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
  IconNB
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
    title: "Is there a contract and official invoice\n when renting a car?",
    content:
      "at the pick -up time , you will receive an official contract and, if necessary, you can receive the official invoice from our Central branch!"
  },
  {
    title: "Is it possible to deliver the car\n at the desired location",
    content:
      "The places where customers can deliver or repatriate a car include: the central office of Tehran, Mehrabad airport, Imam Khomeini airport, Shiraz airport, as well as its location or hotel in Tehran."
  },
  {
    title: "When is deposit return?",
    content:
      "deposit is returned to the customer at the drop off time"
  },{
    title: "How can i find you at the pick-up time\n at the airport?",
    content:
      "We are aware of your arrival by your ticket information and will be waiting for you holding a paging board"
  },
  {
    title: "What will happen if the car breaks down?",
    content:
      "All vehicles are produced newly and if any technical problem happens , we will provide customer service less than 45 minutes anywhere. In additional , if the problem is not fixable , we will change the car less than 24 hours. All of these services are free ."
  },
  {
    title: "what documents are needed to rent a car\n without a driver?",
    content:
      "Copy of the passport + 200 euros as deposit + Copy of your driving license (international or local) + Return flight ticket. deposit is returned to the customer at the drop off time"
  },
  {
    title: "How long is minimum rental period?",
    content:
      "The minimum rental period for self- drive cars is 3 days. Cars and vans with a driver are hourly and daily."
  },
  {
    title: "what is insurance and allowed mileage policy?",
    content:
      "All of our vehicles have the most complete and highest level of CDW insurance coverage and no limitations on mileage"
  },
];

class Todo extends Component {
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
          <Title>FAQ</Title>
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



        <Accordion
          style={{flex :1,padding : 10}}
          dataArray={dataArray}
          animation={true}
          expanded={true}
          icon="chevron-down"
          expandedIcon="chevron-up"
          iconStyle={{ color: "green" }}
          expandedIconStyle={{ color: "red" }}
        />



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

export default Todo;
