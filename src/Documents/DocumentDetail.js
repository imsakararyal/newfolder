import React from 'react';
import { StyleSheet, Dimensions, View,Text } from 'react-native';

import PDFReader from 'rn-pdf-reader-js';
import { Constants } from 'expo';

export default class DocumentDetail extends React.Component {
    render() {
        const { navigation } = this.props;


                 

        const url = navigation.getParam('url', url);

        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};

        return (
            <View style={styles.container}>
            <PDFReader
              source={{ uri: "http://gahp.net/wp-content/uploads/2017/09/sample.pdf" }}
            />
          </View>


        )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
      },
});