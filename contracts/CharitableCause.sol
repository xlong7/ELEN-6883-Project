// SPDX-License-Identifier: MIT
//pragma solidity >=0.5.0 <0.7.0;
pragma solidity >=0.4.22 <0.9.0;

contract CharitableCauseFactory {
    CharitableCause[] public deployedCharitableCauses;
    // uint256 public numCharitableCause;
    // mapping (uint256 => CharitableCause) deployedCharitableCauses;
    event causeCreated(address causeAddress);

    function createCharitableCause(uint256 minimum, string memory title, string memory details, string memory location, string memory causeType) public returns (address){
        CharitableCause newCharitableCause = new CharitableCause(
            minimum,
            msg.sender,
            title,
            details,
            location,
            causeType
        );
        deployedCharitableCauses.push(newCharitableCause);
        emit causeCreated(address(newCharitableCause));
        //return address(newCharitableCause);
        // CharitableCause storage C = deployedCharitableCauses[numCharitableCause++];
        // C.minimumContribution = minimum;
        // C.manager = msg.sender;
        // C.title = title;
        // C.details = details;
        // C.location = location;
        // C.causeType = causeType;
    }

    function getDeployedCharitableCauses()
        public
        view
        returns (CharitableCause[] memory)
    {
        return deployedCharitableCauses;
    }
}

contract CharitableCause {

    string public title;
    string public details;
    string public location;
    string public causeType;
    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public approvers;
    uint256 public approversCount;
    

    uint256 public numRequests;
    uint256 public numWithdrawals;
    mapping (uint256 => Request) requests;
    mapping (uint256 => Withdrawal) withdrawals;
    //Request[] public requests;
    //Withdrawal[] public withdrawals;

    struct Request {
        string description;
        uint256 value;
        address payable recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    struct Withdrawal {
        string description;
        uint256 amount;
        address payable recieverAcc;
        uint256 timestamp;
    }

    constructor(uint256 minimum, address creator, string memory ttl, string memory des, string memory loctn, string memory cause) public {
        manager = creator;
        minimumContribution = minimum;
        title = ttl;
        location = loctn;
        causeType = cause;
        details = des;
    }

    function contribute() public payable {
        require(
            msg.value >= minimumContribution,
            "A minumum contribution is required."
        );
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string memory description, uint256 value, address payable recipient) public onlyManager {
        // Request memory newRequest = Request({
        //     description: description,
        //     value: value,
        //     recipient: recipient,
        //     complete: false,
        //     approvalCount: 0
        // });
        // requests.push(newRequest);
        Request storage r = requests[numRequests++];
        r.description =description;
        r.value = value;
        r.recipient = recipient;
        r.complete = false;
        r.approvalCount = 0;
    }

    function approveRequest(uint256 index) public {
        Request storage request = requests[index];
        require(
            approvers[msg.sender],
            "Only contributors can approve a specific payment request"
        );
        require(
            !request.approvals[msg.sender],
            "You have already voted to approve this request"
        );

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint256 index) public onlyManager {
        Request storage request = requests[index];
        require(
            request.approvalCount > (approversCount / 2),
            "This request needs more approvals before it can be finalized"
        );
        require(!(request.complete), "This request has already been finalized");

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            address,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        return (
            minimumContribution,
            address(this).balance,
            //requests.length,
            numRequests,
            approversCount,
            manager,
            title,
            details,
            location,
            causeType
        );
    }

    function getRequestsCount() public view returns (uint256) {
        return numRequests;
    }

    function makeWithdrawal(uint256 amt, address payable recieverAcc, string memory description) public onlyManager {
        recieverAcc.transfer(amt);
        Withdrawal storage w = withdrawals[numWithdrawals++];
        w.description = description;
        w.amount = amt;
        w.timestamp = block.timestamp;
        w.recieverAcc = recieverAcc;
    }

     function getWithdrawalCount()
        public
        view
        returns (uint256)
    {
        //return withdrawals.length;
        return numWithdrawals;
    }

    modifier onlyManager() {
        require(
            msg.sender == manager,
            "Only the CharitableCause manager can call this function."
        );
        _;
    }
}
