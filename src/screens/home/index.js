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
  Icon,
  Left,
  Right,
  Badge,
  Accordion,
  ActionSheet,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  IconNB,
} from "native-base";
import { Image, View, TouchableOpacity, TouchableHighlight, ScrollView, ImageBackground,Linking } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import ImageSlider from 'react-native-image-slider';
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


const cardOne = require("../../../assets/map-road-saadatrent.jpg");
const cardTwo = require("../../../assets/swiper-2.png");
const cardThree = require("../../../assets/swiper-3.png");
const cardFour = require("../../../assets/swiper-4.png");
const images = [cardOne];
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

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
    };
  }
  componentDidMount(){
    return fetch('https://www.saadatrent.com/api/v1/car')
    .then((response) => response.json())
   .then((responseJson) => {
     this.setState({
       isLoading: false,
       dataSource: responseJson.cars,
     }, function() {
       // In this block you can do something with new state.
     });
   })
   .catch((error) => {
     console.error(error);
   });
  }
  ListViewItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
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
      <Container >
      <Header style={{ backgroundColor:"#35353c"}}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={{fontSize:15,fontFamily: 'good times rg',color : "#ff5f00"}}>Saadat Rent</Title>
        </Body>
        <Right>
          <Button transparent onPress={()=>{Linking.openURL('mailto:info@saadatrent.com');}}>
            <Icon active name="email" />
          </Button>
          <Button transparent onPress={()=>{Linking.openURL('tel:021-44447679');}}>
            <Icon name="phone" />
          </Button>
          <Button transparent onPress={()=>{Linking.openURL('http://api.whatsapp.com/send?phone=+989128005848');}}>
            <Icon name="whatsapp" />
          </Button>
        </Right>
      </Header>



        <View style={{flex : 1}}>
        <Image source={require("../../../assets/costumized.jpeg")} style={{height:'100%',width: '100%',resizeMode:'stretch'}} />


        </View>
        <View style={{flex : 2,marginTop : '10%'}}>
          <Row >
            <Col >
              <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.props.navigation.navigate("SelfDrive",{data : this.state.dataSource})}>
                <Icon name="car" style={{color:"white"}}/>
                <Text style={{color:"white"}}>Self drive</Text>
              </TouchableOpacity>
            </Col>
            <Col >
              <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.props.navigation.navigate("ChauferDriven",{data : this.state.dataSource})}>
                <Icon name="taxi" style={{color:"white"}} />
                <Text style={{color:"white"}}>Chauffeur driven</Text>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col >
              <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.props.navigation.navigate("Van",{data : this.state.dataSource})}>
                <Icon name="caravan" style={{color:"white"}}/>
                <Text style={{color:"white"}}>Van</Text>
              </TouchableOpacity>
            </Col>


          <Col >
            <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.props.navigation.navigate("IranAttractions")}>
              <Icon name="wallet-travel" style={{color:"white"}}/>
              <Text style={{color:"white"}}>Iran Attractions</Text>
            </TouchableOpacity>
          </Col>
          </Row>
          <Row>
          <Col >
            <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.props.navigation.navigate("Document")}>
              <Icon name="file-document" style={{color:"white"}}/>
              <Text style={{color:"white"}}>Document</Text>
            </TouchableOpacity>
          </Col>
          <Col >
            <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.props.navigation.navigate("TravelBook")}>
              <Icon name="notebook" style={{color:"white"}}/>
              <Text style={{color:"white"}}>Travel Book!</Text>
            </TouchableOpacity>
          </Col>
          </Row>
        </View>

        <Footer style={{ backgroundColor:"#35353c"}}>
          <FooterTab style={{ backgroundColor:"#35353c"}}>
            <Button active={this.state.tab1} >
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

export default home;
