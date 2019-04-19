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
  IconNB
} from "native-base";
import { Image, View, TouchableOpacity, TouchableHighlight, ScrollView, ImageBackground,FlatList,ListView } from "react-native";
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
const logo = require("../../../assets/saadatrent-logo-blue-11.png");
const urlpattern="https://www.saadatrent.com/upload/";
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



class SelfDrive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
	  dataSource : [],
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
    if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }
   let title_en=[];
   let picture=[];
   for (let i=0;i<this.state.dataSource.length;i++){
	   title_en[i]=JSON.stringify(this.state.dataSource[i].title_en);
	   picture[i]=urlpattern+(this.state.dataSource[i].picture);
	}
  const source = require('../../../assets/book1.pdf');
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
          <Button transparent>
            <Icon name="email" />
          </Button>
          <Button transparent>
            <Icon name="phone" />
          </Button>
          <Button transparent>
            <Icon name="whatsapp" />
          </Button>
        </Right>
      </Header>






            









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

export default SelfDrive;
