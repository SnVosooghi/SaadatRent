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
} from "native-base";
import { Image, View,Linking } from "react-native";
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
      tab1: true,
      tab2: false,
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
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left-bold" />
          </Button>
        </Left>
        <Body>
          <Title>About Us</Title>
        </Body>
        <Right>
          <Button transparent onPress={()=>{Linking.openURL('mailto:info@saadatrent.com');}}>
            <Icon name="email" />
          </Button>
          <Button transparent onPress={()=>{Linking.openURL('tel:021-44447679');}}>
            <Icon name="phone" />
          </Button>
          <Button transparent onPress={()=>{Linking.openURL('http://api.whatsapp.com/send?phone=+989128005848');}}>
            <Icon name="whatsapp" style={{color :"#25D366"}}/>
          </Button>
        </Right>

      </Header>

        <Content >
          <Text style={{flex : 1,padding : 10,alignContent:"center"}}>In Saadat Rent, the most important and main goal is customer satisfaction. Our main effort at this company is to meet customer needs and desires and also provide the best and most appropriate services and facilities for them. Indeed, in this business, our customers are not dependent on us, but we are dependent on them, so that we use all our efforts and experience to do whatever our customers expect from us. In all your moments of your travel in Iran, we are ready to serve and help you and will do our best to bring your needs all around the country to your dear travelers.</Text>
        </Content>


        <Footer style={{ backgroundColor:"#35353c"}}>
          <FooterTab style={{ backgroundColor:"#35353c"}}>
            <Button
              active={this.state.tab1}
              onPress={() => this.toggleTab1()}
            >

              <Icon active={this.state.tab1} name="home" />
              <Text>Home</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
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
