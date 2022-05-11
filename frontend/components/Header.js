import React from "react";
import Link from "next/link";
import { Menu, Container, Card, Grid,Image, Button,Header,Icon,Divider} from "semantic-ui-react";


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
      <style>
      {`
      html, body {
        background-color: #252839 !important;
      }
      p {
        align-content: center;
        background-color: #495285;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }
      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}
    </style>

    <Header as='h2' icon inverted textAlign='center'>
      <Icon name='braille' />
      DonateBit
      <Header.Subheader>
        Start your first step to help the world. Donate Bitcoin for Charity!
      </Header.Subheader>
    </Header>
    <Divider />
      <Link href="/">
        <Image src="/cover1.jpg" fluid/>
      </Link>
      

    {/* <Grid columns={3} doubling >
      <Grid.Column> */}
      <Menu color={colors[2]} widths={3}>
      <Menu.Item name='home'>
      <Link href="/">
          <a className="item">
            Home
            </a>
        </Link>
      </Menu.Item>
      <Menu.Item name='About'>
      <Link href="/">
          <a className="item">
            About
            </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/">
          <a className="item">
            Contribute Now!
            </a>
        </Link>
      </Menu.Item>
      </Menu>
     
    </Container>
  );
};
