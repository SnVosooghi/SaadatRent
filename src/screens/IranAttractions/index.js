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
import { Image, Dimensions,View,ScrollView,Linking } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import ImageSlider from 'react-native-image-slider';
import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;
const cardImage = require("../../../assets/drawer-cover.png");
const first = require("../../../assets/wall1.jpg");
const second = require("../../../assets/jhn.jpg");
const third = require("../../../assets/ramadan3.jpg");
const fourth = require("../../../assets/suri16.jpg");
var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
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






      <ScrollView style={{flex :1}}>
      <Card style={styles.mb}>
        <CardItem bordered>
          <Left>
            <Body>
              <Text style={{fontType:"bold",fontSize :18}} >5 reasons why you should visit Iran now</Text>
              <Text note>April 13, 2019</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Body>
            <Image
              style={{
                alignSelf: "center",
                height: 150,
                resizeMode: "cover",
                width: deviceWidth / 1.18,
                marginVertical: 5
              }}
              source={first}
            />
            <Text style={{padding :10}} onPress={()=>{Linking.openURL('https://www.saadatrent.com/english/article/why-you-should-travel-iran');}}>
              Why you should travel to Iran at least once in your life Iran is a country that nowadays hits on the headlines all around the world. You can hear the name of Iran between all travelers and even in me...
            </Text>
          </Body>
        </CardItem>
        <CardItem style={{ paddingVertical: 0 }}>
          <Left>
            <Button transparent>

              <Text note>By Cmin</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
      <Card style={styles.mb}>
        <CardItem bordered>
          <Left>
            <Body>
              <Text style={{fontType:"bold",fontSize :18}}>six natural attractions in Iran you have never seen before</Text>
              <Text note>April 11, 2019</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Body>
            <Image
              style={{
                alignSelf: "center",
                height: 150,
                resizeMode: "cover",
                width: deviceWidth / 1.18,
                marginVertical: 5
              }}
              source={second}
            />
            <Text style={{padding :10}} onPress={()=>{Linking.openURL('https://www.saadatrent.com/english/article/six-pristine-attractions-in-iran');}}>
              6 Iran ecotourism attractions you must see in your Iran tour The nature of the northern part of Iran in the Caspian Sea and also its lush green forests, the Persian Gulf coasts, the warm and desired...
            </Text>
          </Body>
        </CardItem>
        <CardItem style={{ paddingVertical: 0 }}>
          <Left>
            <Button transparent>

              <Text note>By Cmin</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
      <Card style={styles.mb}>
        <CardItem bordered>
          <Left>
            <Body>
              <Text style={{fontType:"bold",fontSize :18}}>Most Useful Tips For traveling Iran during Ramadan</Text>
              <Text note>April 9, 2016</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Body>
            <Image
              style={{
                alignSelf: "center",
                height: 150,
                resizeMode: "cover",
                width: deviceWidth / 1.18,
                marginVertical: 5
              }}
              source={third}
            />
            <Text style={{padding :10}} onPress={()=>{Linking.openURL('https://www.saadatrent.com/english/article/travel-iran-during-ramadan');}}>
              Traveling to Iran during Ramadan The Ramadan month is very especial between all Muslims. All Muslims in the world and in Iran fast during this month. But what is fasting? What is its philosophy, and...
            </Text>
          </Body>
        </CardItem>
        <CardItem style={{ paddingVertical: 0 }}>
          <Left>
            <Button transparent>

              <Text note>By Cmin</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
      <Card style={styles.mb}>
        <CardItem bordered>
          <Left>
            <Body>
              <Text style={{fontType:"bold",fontSize :18}}>Everything about Chaharshanbe Suri</Text>
              <Text note>March 9, 2016</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Body>
            <Image
              style={{
                alignSelf: "center",
                height: 150,
                resizeMode: "cover",
                width: deviceWidth / 1.18,
                marginVertical: 5
              }}
              source={fourth}
            />
            <Text style={{padding :10}} onPress={()=>{Linking.openURL('https://www.saadatrent.com/english/article/Everything-about-Chaharshanbe-Suri');}}>
              Everything you should know about Chaharshanbe Suri Iranian people like the other ancient nations have their own customs and traditions. One of our new year ritual, which should be a mixture of severa...
            </Text>
          </Body>
        </CardItem>
        <CardItem style={{ paddingVertical: 0 }}>
          <Left>
            <Button transparent>

              <Text note>By Cmin</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
      </ScrollView>







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
