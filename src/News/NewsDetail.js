import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar,TouchableOpacity,Share,AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Header,NavigationActions } from 'react-navigation';

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import tvShowContent from '../../assets/news/tvShowContent';
import {
  Container,
  Header as HeaderNativeBase,
  Content,
  List,
  ListItem,
  Thumbnail,

  Left,
  Body,
  Right,
  Button,
  Accordion,
  Icon,
  Title,
  Card,
  CardItem
} from "native-base";
import HTML from 'react-native-render-html';
const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;
const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;
const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#999999',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  keyword: {
    fontSize: 16,
    color: 'white',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    height: 600,
  },

  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
  },
  item: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',

    margin: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  itemText: {
    fontSize: 20,
  },
  backButton: {
    backgroundColor: 'transparent',
    left: 10,
    position: 'absolute',
    top: 20,
    width: 40,
  },
  shareButton: {
    backgroundColor: 'transparent',
    right: 10,
    position: 'absolute',
    top: 20,
    width: 40,
  },
});

class TvShow extends Component {
  constructor() {
    super();
    this.state = { showNavTitle: false ,currentLanguage:''};

  }
  componentWillMount(){
    AsyncStorage.getItem("language").then((value) => {
      console.log("Value"+value);
      this.setState({currentLanguage: value});
  })
  .then(res => {
      //do something else
  });
  }
  render() {
    const { t, i18n, navigation } = this.props;
    const { navigate } = navigation;



    const title = navigation.getParam('title', title);
    const title_idn = navigation.getParam('title_idn', title_idn);
    const description = navigation.getParam('description', description);

    const description_idn = navigation.getParam('description_idn', description_idn);
    const image = navigation.getParam('image', image);

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          fadeOutForeground
          renderHeader={() => <Image    source={{ uri: `http://colapp.drcmp.org/uploads/news_images/${image}` }} style={styles.image} />}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}
            >
    
    {/*
     <TouchableOpacity
        activeOpacity={.85}
        onPress={() => navigation.dispatch(NavigationActions.back())}
        style={styles.backButton}
      >
        <View>
         <Icon
            name={"arrow-back"}
            size={32}
            style={{ color: "#000" }}
          />
        </View>
      </TouchableOpacity>
    
    
    */}
      
      <TouchableOpacity
        activeOpacity={.85}
       onPress={ () => Share.share({
    message: 'Share the news: we\'re helping your business with awesome React Native apps',
    url: 'http://buildchange.orh',
    title: 'Got news via this aoo'
  })}
        style={styles.shareButton}
      >
        <View>
          <Icon
            name={"share"}
            size={32}
            style={{ color: "#FFF" }}
          />
        </View>
      </TouchableOpacity>
              <Text style={styles.navTitle}>
                {tvShowContent.title}, ({tvShowContent.year})
              </Text>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View>
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}>{tvShowContent.title}</Text>
 
            </View>
         
         {/*
        
        <TouchableOpacity
        activeOpacity={.85}
        onPress={() => navigation.dispatch(NavigationActions.back())}
        style={styles.backButton}
      >
        <View>
         <Icon
            name={"arrow-back"}
            size={32}
            style={{ color: "blue" }}
          />
        </View>
      </TouchableOpacity>
        
        */}
            
<TouchableOpacity
        activeOpacity={.85}
        onPress={ () => Share.share({
          message: 'Share the news: in awareness of construction',
          url: 'http://buildchange.orh',
          title: 'Got news via this aoo'
        })}
        style={styles.shareButton}
      >
        <View>
          <Icon
            name={"share"}
            size={32}
            style={{ color: "#FFF" }}
          />
        </View>
      </TouchableOpacity>
            </View>

            
          )}
        >


     
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}
          >
            <Text style={styles.title}>
              <Text style={styles.name}>{this.state.currentLanguage=='en'?title:title_idn}</Text>
            </Text>
          </TriggeringView>
          <View style={{height:1000}}>
          <View style={styles.section}>
                     <HTML style={styles.sectionContent} html={this.state.currentLanguage=='en'?description:description_idn} imagesMaxWidth={Dimensions.get('window').width} />
          </View>
          </View>

         
        </HeaderImageScrollView>
      </View>
    );
  }
}

export default TvShow;
