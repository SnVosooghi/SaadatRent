import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon,
  Badge,
  Accordion,
  ActionSheet,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  IconNB,
  Form,
  Input,
  Label,
  Item,
  Textarea
} from "native-base";
import { Image, View, Linking } from "react-native";
import styles from "./styles";
var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const dataArray = [
  {
    title: "First Element",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!"
  },
  {
    title: "Second Element",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!"
  },
  {
    title: "Third Element",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!"
  }
];
const cardOne = require("../../../assets/swiper-1.png");
const cardTwo = require("../../../assets/swiper-2.png");
const cardThree = require("../../../assets/swiper-3.png");
const cardFour = require("../../../assets/swiper-4.png");
const cards = [
  {
    text: "Card One",
    name: "One",
    image: cardOne
  },
  {
    text: "Card Two",
    name: "Two",
    image: cardTwo
  },
  {
    text: "Card Three",
    name: "Three",
    image: cardThree
  },
  {
    text: "Card Four",
    name: "Four",
    image: cardFour
  }
];

class Discounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
    };
  }
  toggleTab1() {
    this.props.navigation.navigate("Home");
  }
  toggleTab2() {
    this.props.navigation.navigate("MakeATicket");
  }
  toggleTab3() {
    this.props.navigation.navigate("ContactUs");
  }
  render() {
    return (
      <Container style={styles.container}>
      <Header style={{ backgroundColor:"#35353c"}}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu"/>
          </Button>
        </Left>
        <Body>
          <Title style={{fontSize:15,fontFamily: 'good times rg',color : "#ff5f00"}}>Saadat Rent</Title>
        </Body>
        <Right>
        <Button transparent onPress={()=>{Linking.openURL('mailto:info@saadatrent.com');}}>
          <Icon name="email" />
        </Button>
        <Button transparent onPress={()=>{Linking.openURL('tel:021-44447679');}}>
          <Icon name="phone" />
        </Button>
        <Button transparent onPress={()=>{Linking.openURL('http://api.whatsapp.com/send?phone=+989128005848');}}>
          <Icon name="whatsapp" />
        </Button>
        </Right>
      </Header>

        <Content >
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
              <Icon active name="home" />
            </Item>
            <Item floatingLabel last>
              <Label>E-mail</Label>
              <Input />
              <Icon active name="email" />
            </Item>
            <Item floatingLabel last>
              <Label>Phone No.</Label>
              <Input />
              <Icon active name="phone" />
            </Item>
            <Item floatingLabel last>
              <Label>Subject</Label>
              <Input />
              <Icon active name="menu" />
            </Item>
            <Item floatingLabel last>
              <Label>Message</Label>
              <Input />
              <Icon active name="menu" />
            </Item>
          </Form>


          <Button block style={{ margin: 15, marginTop: 50, borderRadius:25, borderWidth: 3,width : '70%', alignSelf:"center" }}>
            <Text>Submit</Text>
          </Button>
        </Content>


        <Footer style={{ backgroundColor:"#35353c"}}>
          <FooterTab style={{ backgroundColor:"#35353c"}}>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} name="home" />
              <Text>Home</Text>
            </Button>
            <Button active={this.state.tab2} >
              <Icon active={this.state.tab2} name="ticket" />
              <Text>Make a Ticket</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="contacts" />
              <Text>Contact Us</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


export default Discounts;
