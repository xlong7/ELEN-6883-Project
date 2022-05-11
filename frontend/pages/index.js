import React, { Component } from "react";
import { Card, Button,Image,Item } from "semantic-ui-react";
import Link from "next/link";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import countryList from "../components/Categories";
import CharitableCause from "../ethereum/charitableCause"

class CharitableCauseIndex extends Component {
  static async getInitialProps() {
    const charitableCauses = await factory.methods
      .getDeployedCharitableCauses()
      .call();
    const contracts = charitableCauses.map((cause) => [cause, CharitableCause(cause)]);
    const summaries = await Promise.all(charitableCauses.map((cause) => {
      return CharitableCause(cause).methods.getSummary().call();
    }));
    return { charitableCauses, summaries };
  }

  renderCharitableCauses() {
    const items = this.props.summaries.map((summary, index) => {
      const address = this.props.charitableCauses[index];
      const title = summary[5];
      const details = summary[6];
      return {
        header: title,
        description: (details),
        meta: (
          <Link
            href="/charitableCauses/[charitableCause]"
            as={`/charitableCauses/${address}`}
          >
            <a>Donation Details</a>
          </Link>
        ),
        // fluid: true,
        style: {
          backgroundColor: "white",
          padding: "10px",
        },
      };
    });
      return <Item.Group items={items}/>
    // return <Card.Group items={items}  style={{BackgroundColor: 'white'}} />;
  }

  render() {
    return (
      <Layout>
          <div>
            <h2 style={{color: "white"}}> Contribute to an organization today! </h2>
          <Link href="/charitableCauses/new">
            <a>
              <Button
                color="black"
                floated="bottom"
                icon="add"
                content="Add A New Organization Here"
              >
              </Button>
            </a>
          </Link>
          <Link href="/">
        <Image src="/cover2.jpg" fluid/>
          </Link>
          {this.renderCharitableCauses()}
        </div>
        
      </Layout>
      
    );
  }
}

export default CharitableCauseIndex;
