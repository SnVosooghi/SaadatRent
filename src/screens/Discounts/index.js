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
import { Image, View } from "react-native";
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
      <Container >
      <Header style={{ backgroundColor:"#35353c"}}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left-bold" />
          </Button>
        </Left>
        <Body>
          <Title>Discounts</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="heart" />
          </Button>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>

        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            ref={mr => (this._deckSwiper = mr)}
            dataSource={cards}
            looping={false}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>
                        {item.text}
                      </Text>
                      <Text note>SaadatRent</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      flex: 1,
                      height: 300
                    }}
                    source={item.image}
                  />
                </CardItem>
                <CardItem>
                  <IconNB name={"heart"} style={{ color: "#ED4A6A" }} />
                  <Text>
                    {item.name}
                  </Text>
                </CardItem>
              </Card>}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            padding: 15
          }}
        >
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-left" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Text>Swipe Right</Text>
            <Icon name="arrow-right" />
          </Button>
        </View>

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
