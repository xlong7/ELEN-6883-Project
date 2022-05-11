// This is the command to be used in truffle console --network huygens_dev to do and display test result
// Enter the command line by line
let CCfactory = await CharitableCauseFactory.deployed()
let create_CC = await CCfactory.createCharitableCause(10,'testCC1','detail','New York','AnyCause')
let CC1 = await CCfactory.getDeployedCharitableCauses()
CC1
create_CC.logs[0].args
let CC2 = await CharitableCause.at(create_CC.logs[0].args.causeAddress)
CC2