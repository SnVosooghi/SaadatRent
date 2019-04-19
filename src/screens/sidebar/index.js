import React, { Component } from "react";
import { Image,ImageBackground } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";
const drawerCover = require("../../../assets/images.png");
const drawerImage = require("../../../assets/saadatrent-logo-blue-11.png");
const datas = [
  {
    name: "Discounts",
    route: "Discounts",
    icon: "percent",
    bg: "#C5F442"
  },
  {
    name: "Make a Ticket",
    route: "MakeATicket",
    icon: "ticket",
    bg: "#477EEA",
  },
  {
    name: "FAQ",
    route: "FAQ",
    icon: "file-question",
    bg: "#DA4437",
  },
  {
    name: "About us",
    route: "AboutUs",
    icon: "clipboard-account",
    bg: "#4DCAE0"
  },
  {
    name: "Contact Us",
    route: "ContactUs",
    icon: "contacts",
    bg: "#C5F442"
  },

];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <ImageBackground source={drawerCover} style={styles.drawerCover}>
            <Text style={{fontSize : 25,color : "#ff5f00",alignSelf:"center",marginTop:'25%'}}> Saadat Rent </Text>
            <Text style={{fontSize : 15,color : "#ff5f00",alignSelf:"center",paddingLeft : '35%'}}> Car rental in Iran </Text>
          </ImageBackground>


          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
