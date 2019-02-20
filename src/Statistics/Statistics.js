import React, { Component } from "react";
import { Image, Dimensions, View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right
} from "native-base";
import { withNamespaces } from "react-i18next";
import { NavigationActions } from "react-navigation";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie
} from "victory-native";
import Icons from 'react-native-vector-icons/FontAwesome';
import AnimateNumber from "react-native-animate-number";
import PureChart from 'react-native-pure-chart';
const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];
export class StatisticsList extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { t, i18n, navigation } = this.props;
    const { navigate } = navigation;
          
    let sampleData = [30, 200, 170, 250, 10];   
    let PiechartData = [
      {
        value: 50,
        label: 'Marketing',
        color: 'red',
      }, {
        value: 40,
        label: 'Sales',
        color: 'blue'
      }, {
        value: 25,
        label: 'Support',
        color: 'green'
      }
  
    ] 

    return (
      <Container>
          <Header>
        <Left>
          <Button
            transparent
            onPress={() => navigation.dispatch(NavigationActions.back())}
          >
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{t("statistics:title")}</Title>
        </Body>
        <Right />
      </Header>
        <Content padder>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Button style={styles.buttonStyle} info>
              <Icon name="home" />
              <Left>
                <Text style={{ alignItems: "flex-start", color: "#fff" }}>
                  Home
                </Text>
              </Left>
            </Button>

            <Button style={styles.buttonStyle} warning>
              <Icon name="home" />
              <Left>
                <Text style={{ alignItems: "flex-start", color: "#fff" }}>
                  Home
                </Text>
              </Left>
            </Button>

            <Button style={styles.buttonStyle} success>
              <Icon name="home" />
              <Left>
                <Text style={{ alignItems: "flex-start", color: "#fff" }}>
                  Home
                </Text>
              </Left>
            </Button>
          </View>
<Card style={{padding:10}}>
<CardItem header>
              <Text style={styles.heading4}>Work progress 2019</Text>
                         </CardItem>
<PureChart style={{paddingTop:10}} data={sampleData} type='line' />
</Card>
 
<Card style={{padding:10}}>
<CardItem header>
              <Text style={styles.heading4}>Total Retroffited</Text>
                         </CardItem>
<CardItem style={{flexDirection:"row",justifyContent:"space-around"}}>
<Icons name="home" size={50} style={{ color: "purple" }} />
<AnimateNumber value={1000} timing="easeIn" countBy={100} style={{color:"purple",fontSize:40}}/>

</CardItem>
</Card>


<Card style={{padding:10}}>
<CardItem header>
              <Text style={styles.heading4}>Work in Sector</Text>
                         </CardItem>
<PureChart style={{paddingTop:10}} data={PiechartData} type='pie' />
</Card>
<Card style={{padding:10}}>
<CardItem header>
              <Text style={styles.heading4}>Total Survey Taken</Text>
                         </CardItem>
<CardItem style={{flexDirection:"row",justifyContent:"space-around"}}>
<AnimateNumber value={1500} timing="easeIn" countBy={100} style={{color:"#00bfff",fontSize:40}}/>
<Icons name="group" size={50} style={{ color: "#00bfff" }} />


</CardItem>
</Card>
        </Content>
      </Container>
    );
  }
}
export default withNamespaces(['statistics', 'common'], { wait: true })(StatisticsList);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },
  buttonStyle: {
    borderRadius: 5,
    height: 40,
    width: 100
    // backgroundColor: data.bg
  },
  heading4: {
    fontSize: 20,
    textAlign: "justify",
    color: 'black',
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo"
  },
});
