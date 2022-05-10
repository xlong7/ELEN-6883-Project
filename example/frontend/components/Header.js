import React from "react";
import Link from "next/link";
import { Menu, Container, Card, Grid,Image} from "semantic-ui-react";


const time = "00:05:00";
const items = [
  {header: '90012',
  description: "ETH"}
]
const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]
export default () => {
  return (
    <Container>
      <Link href="/">
        <Image src="/cover1.jpg" fluid/>
      </Link>
      
    <Menu color={colors[0]} widths={3}>
      <Menu.Item name='home'>
        
      </Menu.Item>
      <Menu.Item name='About'>
        
      </Menu.Item>
      <Menu.Item>
        <Link href="/">
          <a className="item">Contribute Now!</a>
        </Link>
      </Menu.Item>

   
    </Menu>
    <Card.Group>
    <Card centered color="red">
    <Image src="/pic1.jpeg" wrapped ui={false}/>

      <Card.Content>
        <Card.Header> 90000 ETH</Card.Header>
        <Card.Description>  waiting for distribution </Card.Description>
      </Card.Content>
      
    </Card>
    <Card centered color="blue">
    <Image src="/pic2.jpeg" wrapped ui={false}/>
    <Card.Content>
        <Grid columns={2}>
          <Grid.Column key="1" width={5}> <h3> {time} </h3></Grid.Column>
          <Grid.Column key="2" width = {11}> <p> hours till next distribution </p></Grid.Column>
       </Grid>
      </Card.Content>
      </Card>
      </Card.Group>
    </Container>
  );
};
