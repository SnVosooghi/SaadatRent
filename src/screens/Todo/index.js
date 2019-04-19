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
      tab4: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
    this.props.navigation.navigate("Todo");
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
    this.props.navigation.navigate("AddTodo");
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
    this.props.navigation.navigate("DoneTodo");
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
    this.props.navigation.navigate("EditTodo");
  }
  render() {
    return (
      <Container style={styles.container}>
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent>
            <Icon name="heart" />
          </Button>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>

        <Content padder />
        <Button
          onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Select an option"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
        >
          <Text>Actionsheet</Text>
        </Button>
        <Button rounded info >
          <Text>Info</Text>
        </Button>
        <Accordion
          dataArray={dataArray}
          animation={true}
          expanded={true}
          icon="add"
          expandedIcon="remove"
          iconStyle={{ color: "green" }}
          expandedIconStyle={{ color: "red" }}
        />

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
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      flex: 1,
                      height: 300
                    }}
                    source={item.image}
                  />
                </CardItem>
                <CardItem>
                  <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
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
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Text>Swipe Right</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>

        <Footer>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => this.toggleTab1()}
              vertical
              badge
            >
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon active={this.state.tab1} name="apps" />
              <Text>All to-buys</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="add" />
              <Text>Add</Text>
            </Button>
            <Button
              active={this.state.tab3}
              onPress={() => this.toggleTab3()}
              vertical
              badge
            >
              <Badge style={{ backgroundColor: "green" }}>
                <Text>51</Text>
              </Badge>
              <Icon active={this.state.tab3} name="checkmark-circle" />
              <Text>Done</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} name="document" />
              <Text>Edit</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Todo;
