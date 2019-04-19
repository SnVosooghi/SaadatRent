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
import { Image, View, Linking } from "react-native";
import styles from "./styles";
import IconEN from "react-native-vector-icons/Entypo";

class Discounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
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

        <Content >

        <Text style={{padding : '4%',fontWeight : 'bold'}}><Icon name="home" style={{fontSize:20}}/> Address</Text>
        <Text style={{paddingLeft : '8%',paddingTop:'1%'}}>Airport Office : Tehran International Airport IKA</Text>
        <Text style={{padding : '4%',fontWeight : 'bold'}}><Icon name="cellphone" style={{fontSize:20}}/> Mobile</Text>
        <Text style={{paddingLeft : '8%',paddingTop:'1%'}}>+98-9128005848</Text>
        <Text style={{padding : '4%',fontWeight : 'bold'}}><Icon name="home" style={{fontSize:20}}/> Address</Text>
        <Text style={{paddingLeft : '8%',paddingTop:'1%'}}>Central Office in Tehran : Unit 33, 4th floor, No 15, Shamim Building, bagh feyz Street Street, Ashrafi Esfehani Highway, Tehran, Iran</Text>
        <Text style={{padding : '4%',fontWeight : 'bold'}}><Icon name="phone" style={{fontSize:20}}/> Telephone</Text>
        <Text style={{paddingLeft : '8%',paddingTop:'1%'}}>+98-2144447679</Text>
        <Text style={{padding : '4%',fontWeight : 'bold'}}><Icon name="cellphone" style={{fontSize:20}}/> Mobile</Text>
        <Text style={{paddingLeft : '8%',paddingTop:'1%'}}>+98-9128005948</Text>
        <Text style={{padding : '4%',fontWeight : 'bold'}}><Icon name="fax" style={{fontSize:20}}/> Fax</Text>
        <Text style={{paddingLeft : '8%',paddingTop:'1%'}}>+98-2146018279</Text>
        <Text style={{padding : '4%',fontWeight : 'bold'}}><Icon name="email" style={{fontSize:20}}/> Email</Text>
        <Text style={{paddingLeft : '8%',paddingTop:'1%'}}>info@saadatrent.com</Text>
        <Card style={styles.mb}>
          <CardItem header bordered>
            <Text>Social Application</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Icon
                active
                name="facebook"
                style={{ color: "#3B579D" }}
              />
              <Text>facebook</Text>
            </Left>
            <Right>
              <Icon name="forward" onPress={()=>{Linking.openURL('https://www.facebook.com/saadatcarrental/');}} />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Icon
                active
                name="twitter"
                style={{ color: "#55ACEE" }}
              />
              <Text>twitter</Text>
            </Left>
            <Right>
              <Icon name="forward" onPress={()=>{Linking.openURL('https://twitter.com/saadatrent1');}} />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Icon
                active
                name="linkedin"
                style={{ color: "#007BB6" }}
              />
              <Text>LinkedIn</Text>
            </Left>
            <Right>
              <Icon name="forward" onPress={()=>{Linking.openURL('https://www.linkedin.com/in/mohamad-salehi-759048173/');}} />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Icon
                active
                name="instagram"
                style={{ color: "#fbad50" }}
              />
              <Text>instagram</Text>
            </Left>
            <Right>
              <Icon name="forward" onPress={()=>{Linking.openURL('https://www.instagram.com/saadatrent/');}} />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <IconEN
                active
                name="tripadvisor"
                style={{ color: "#00af87",fontSize : 25,paddingLeft : 3 }}
              />
              <Text>TripAdvisor</Text>
            </Left>
            <Right>
              <Icon name="forward" onPress={()=>{Linking.openURL('https://www.tripadvisor.com/Attraction_Review-g293999-d12804621-Reviews-Saadat_Rent-Tehran_Tehran_Province.html');}} />
            </Right>
          </CardItem>

        </Card>
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
