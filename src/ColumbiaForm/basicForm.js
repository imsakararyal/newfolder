import React from "react";
import {
  AppRegistry,
  Platform,
  Alert,
  StyleSheet,
  View,
  TouchableOpacity,
  NetInfo,
  Dimensions,
  AsyncStorage
} from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1,
  Form,
  Item,
  Input,
  Label,
  Picker,
  DatePicker,
  CheckBox,
  Radio,
  ListItem,
  List,
  Toast
} from "native-base";
import Geolocation from "react-native-geolocation-service";
import { storage } from "../../App";
import { NavigationActions } from "react-navigation";
//const { width } = Dimensions.get("window");
import { PermissionsAndroid } from "react-native";
import { withNamespaces } from "react-i18next";
var LABEL_COLOR = "gray";
var INPUT_COLOR = "#000000";
var ERROR_COLOR = "#a94442";
var HELP_COLOR = "#999999";
var BORDER_COLOR = "#cccccc";
var DISABLED_COLOR = "#777777";
var DISABLED_BACKGROUND_COLOR = "#eeeeee";
var FONT_SIZE = 17;
var FONT_WEIGHT = "400";
export class BasicForm extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      isConnected: true,
      id: "",
      idError: "",
      idValidate: "",
      fullName: "",
      fullNameError: "",
      fullNameValidate: "",
      address: "",
      addressError: "",
      addressValidate: "",
      lotNo: "",
      lotNoError: "",
      lotNoValidate: "",
      chipCode: "",
      chipCodeError: "",
      chipCodeValidate: "",
      contactNo: "",
      contactNoError: "",
      contactNoValidate: "",

      selectedId: "",
      selectedfullName: "",
      selectedAddress: "",
      selectedLotNo: "",
      selectedChipCode: "",
      selectedContactNo: "",
      errorMessage: null,
      //   isConnected: true,
      hasOnlineData: null,
      isMounted: false,
      showToast: true,
      region: "",
      latitude: "",
      longitude: "",
      hId: "",
      hcode: ""
    };
    // this.handleChangeOption = this.handleChangeOption.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  handleConnectivityChange = isConnected => {
    if (this._isMounted) {
      if (isConnected) {
        this.setState({ isConnected });
      } else {
        this.setState({ isConnected });
      }
    }
  };
  MiniOfflineSign() {
    return (
      <View style={styles.offlineContainer}>
        <Text style={styles.offlineText}>No Internet Connection</Text>
      </View>
    );
  }

  setData(id, fullName, address, lotNo, chipCode, contactNo) {
    if (this._isMounted) {
      this.setState(
        {
          hasOnlineData: true,
          selectedId: id,
          selectedfullName: fullName,
          selectedAddress: address,
          selectedLotNo: lotNo,
          selectedChipCode: chipCode,
          selectedContactNo: contactNo
        },
        function() {
          console.log("selected fullName" + this.state.selectedfullName);
        }
      );
    }
  }
  async componentDidMount() {
    this._isMounted = true;
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Example App",
          message: "Example App access to your location "
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
        // alert("You can use the location");
        // Instead of navigator.geolocation, just use Geolocation.
        //   if (hasLocationPermission) {
        Geolocation.getCurrentPosition(
          position => {
            this.setState({
              latitude: JSON.stringify(position.coords.latitude),
              longitude: JSON.stringify(position.coords.longitude)
            });
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
        // }
      } else {
        console.log("location permission denied");
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }

    console.log("component di mount");

    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );

    /* storage.remove({
      key: 'surveyData'
    });*/

    //if (this.state.isMounted) {
    console.log("into the component");

    storage
      .load({
        key: "surveyData"
      })
      .then(ret => {
        //   this.setState({ selectedTechnology: ret });
        if (this._isMounted) {
          console.log(ret);
          // const { bed, floor, house,lotsize,techn,toilet } = ret;
          const id = ret.id;
          console.log("id" + id);
          const fullName = ret.fullName;
          console.log("fullName" + fullName);

          const lotNo = ret.lotNo;
          console.log("lotNo" + lotNo);
          const address = ret.address;
          console.log("address" + address);
          const chipCode = ret.chipCode;
          console.log("chipCode" + chipCode);
          const contactNo = ret.contactNo;
          console.log("contactNo" + contactNo);
          this.setData(id, fullName, address, lotNo, chipCode, contactNo);
        }
      })
      .catch(err => {
        // any exception including data not found
        // goes to catch()
        //  console.warn(err.message);
        switch (err.name) {
          case "NotFoundError":
            console.log("notfound error");
            this.setState({ hasOnlineData: false });
            console.log("hasonlinedate set false");
            // TODO;
            break;
          case "ExpiredError":
            // TODO
            console.log("notfound error");
            this.setState({ hasOnlineData: false });
            console.log("hasonlinedate set false");
            break;
        }
      });

    // }
  }
  componentWillMount() {
    /*if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this._getLocationAsync();
    }*/
    this._isMounted = false;
    // this.setState({Balance:""})
  }
  /*_getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  */
  validate(text, type) {
    alph = /^(?=.{5,50}$)[a-zA-Z0-9]+(?:[-'\s][a-zA-Z0-9]+)*$/;

    pass = /^(?=.{4,8}$)[a-zA-Z0-9]+(?:[-'\s][a-zA-Z0-9]+)*$/;

    idRegex = /^(?=.{5,50}$)[a-zA-Z0-9]+(?:[-'\s][a-zA-Z0-9]+)*$/;
    fullNameRegex = /^(?=.{5,50}$)[a-zA-Z0-9]+(?:[-'\s][a-zA-Z0-9]+)*$/;
    addressRegex = /^(?=.{5,50}$)[a-zA-Z0-9]+(?:[-'\s][a-zA-Z0-9]+)*$/;
    lotNoRegex = /^(?=.{5,50}$)[a-zA-Z0-9]+(?:[-'\s][a-zA-Z0-9]+)*$/;
    chipCodeRegex = /^(?=.{5,50}$)[a-zA-Z0-9]+(?:[-'\s][a-zA-Z0-9]+)*$/;
    contactNoRegex = /^(?=.{5,50}$)[a-zA-Z0-9]+(?:[-'\s][a-zA-Z0-9]+)*$/;
    console.log("validate1");
    if (this._isMounted) {
      console.log("validate2");
      if (type == "id") {
        this.setState({
          id: text
        });
        /* if (idRegex.test(text)) {
              this.setState({
                id: text,
                idValidate: true,
                idError: "",
                validateError: false
              });
              
            } else {
              
              this.setState({
                id: text,
                idValidate: false,
                idError: "Enter correct Id between 1 to 10 characters",
                validateError: true
              });
            }*/
      }

      if (type == "fullName") {
        this.setState({
          fullName: text
        });
        /*  if (fullNameRegex.test(text)) {
              this.setState({
                fullName: text,
                fullNameValidate: true,
                fullNameError: "",
                validateError: false
              });
             
            } else {
             
              this.setState({
                fullName: text,
                fullNameValidate: false,
                fullNameError: "Enter correct full Name",
                validateError: true
              });
            } */
      } //if

      if (type == "address") {
        this.setState({
          address: text
        });
        /*   if (addressRegex.test(text)) {
              this.setState({
                address: text,
                addressValidate: true,
                addressError: "",
                validateError: false
              });
            
            } else {
             
              this.setState({
                address: text,
                addressValidate: false,
                addressError: "Enter address between 4 to 40 characters",
                validateError: true
              });
            } */
      } //if
      if (type == "lotNo") {
        this.setState({
          lotNo: text
        });
        /*  if (lotNoRegex.test(text)) {
              this.setState({
                lotNo: text,
                lotNoValidate: true,
                lotNoError: "",
                validateError: false
              });
              // console.warn("2text is correct");
            } else {
              //  console.warn("invalid text");
              this.setState({
                lotNo: text,
                lotNoValidate: false,
                lotNoError: "Enter lotNo between 4 to 8 characters",
                validateError: true
              });
            } //else*/
      }

      if (type == "chipCode") {
        this.setState({
          chipCode: text
        });
        /*    if (chipCodeRegex.test(text)) {
              this.setState({
                chipCode: text,
                chipCodeValidate: true,
                chipCodesError: "",
                validateError: false
              });
              // console.warn("2text is correct");
            } else {
              //  console.warn("invalid text");
              this.setState({
                chipCode: text,
                chipCodeValidate: false,
                chipCodesError: "Enter chipcode between 4 to 8 characters",
                validateError: true
              });
            } //*/
      }

      if (type == "contactNo") {
        this.setState({
          contactNo: text
        });
        /*  if (contactNoRegex.test(text)) {
              this.setState({
                contactNo: text,
                contactNoValidate: true,
                contactNoError: "",
                validateError: false
              });
              // console.warn("2text is correct");
            } else {
              //  console.warn("invalid text");
              this.setState({
                contactNo: text,
                contactNoValidate: false,
                contactNoError: "Enter password between 4 to 8 characters",
                validateError: true
              });
            } //else*/
      }
      //if
    }
  }
  async setValue() {
    await AsyncStorage.setItem("hId", JSON.stringify(this.state.hId));
  }

  async getValue() {
    try {
      const value = await AsyncStorage.getItem("homeOwnerId");
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  formSubmit = async () => {
    var Id;
    var code;
    //if(this._isMounted){
    console.log("into the submit form");
    let missingField;
    if (this.state.id == "") {
      missingField += "Enter Id\n";
      this.setState({
        idError: "Enter Id"
      });
    }
    if (this.state.fullName == "") {
      missingField += "Enter Full Name\n";
      this.setState({
        fullNameError: "Enter Full Name"
      });
    }
    if (this.state.address == "") {
      missingField += "Enter Address\n";
      this.setState({
        addressError: "Enter Address"
      });
    }
    if (this.state.lotNo == "") {
      missingField += "Enter LotNo\n";
      this.setState({
        lotNoError: "Enter Lot No"
      });
    }
    if (this.state.chipCode == "") {
      missingField += "Enter CHIPCode\n";
      this.setState({
        chipCodeError: "Enter chipCode"
      });
    }

    this.setState({
      missingError: missingField
    });
    // if(this.state.missingError<0){
    var abc = JSON.stringify({
      //    id: this.state.id,
      name: this.state.fullName,
      address: this.state.address,
      lot_no: this.state.lotNo,
      chip_code: this.state.chipCode,
      phone: this.state.contactNo,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    });
    console.log(abc);
    storage.remove({
      key: "surveyData"
    });
    console.log("remove sucessfully");
    var data = new FormData();
    data.append("id", this.state.id);
    data.append("fullName", this.state.fullName);
    data.append("address", this.state.address);
    data.append("lotNo", this.state.lotNo);
    data.append("chipCode", this.state.chipCode);
    data.append("contactNo", this.state.contactNo);

    /*  fetch(url, {
            method: "post",
            body: data
          }).then(res => {
            console.log(res);
          });
      */

    fetch("http://colapp.drcmp.org/api/homeowner/create", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.fullName,
        address: this.state.address,
        lot_no: this.state.lotNo,
        chip_code: this.state.chipCode,
        phone: this.state.contactNo,
        latitude: this.state.latitude,
        longitude: this.state.longitude
      })
    })
      .then(response => {
        return response.json();
      })
      .then(async jsonResponse => {
        console.log(jsonResponse.data.id);
        console.log(jsonResponse.data.chip_code);
        Id = jsonResponse.data.id;
        code = jsonResponse.data.chip_code;
        this.setState(
          {
            hId: jsonResponse.data.id,
            hcode:jsonResponse.data.chip_code
            //loading: false,
          },
          function() {
            console.log("ino set data 1");
          
            AsyncStorage.setItem("homeOwnerId", JSON.stringify(this.state.hId));
          
            AsyncStorage.setItem("chipCode", JSON.stringify(this.state.hcode));

            console.log("ino set data 2");
            this.props.navigation.navigate("BasicFormPart2");
     
          }
        );
      })
      .catch(error => {
        console.log(error);
      });

    //   await AsyncStorage.setItem('homeOwnerId',JSON.stringify(Id) );
    // await AsyncStorage.setItem('ChipCode', JSON.stringify(code));
    //await this.getValue();
    //  this.props.navigation.navigate("BasicFormPart2");
    /*    fetch(" http://colapp.drcmp.org/api/homeowner/create", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
             // 'Content-type': 'application/x-www-form-urlencoded'
            },
            // formdata
            body: JSON.stringify({
              name: this.state.fullName,
              address: this.state.address,
              lot_no: this.state.lotNo,
              chip_code: this.state.chipCode,
              phone: this.state.contactNo,
              latitude:this.state.latitude,
              longitude:this.state.longitude
            })
          })
            .then(response => {
              console.log(response)
              return response.json()
            })
            .then(responseJson => {
              console.log(responseJSON);
              Alert.alert(responseJson);
            })
            .catch(error => {
              console.error(error);
            });
*/

    /*  fetch('https://gabbarseang.000webhostapp.com/user_login.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              formdata
              body: JSON.stringify({
            
              
            
                email: this.state.email,
            
                password: this.state.password
            
              })
            
            }).then((response) => response.json())
                  .then((responseJson) => {
            
            
                    Alert.alert(responseJson);
            
                  }).catch((error) => {
                    console.error(error);
                  });*/
    //  await AsyncStorage.setItem('userToken', 'sakar');
    // await AsyncStorage.setItem('Role', 'Staff');

    //  this.props.navigation.navigate("BasicFormPart2");
    //   }

    //   }
  };

  submitLater = async () => {
   // if (this.isMounted) {
      console.log("into the submit later");
      let missingField;
      if (this.state.selectedTechnology == "") {
        missingField += "Select Technology\n";
      }
      if (this.state.selectedFloor == "") {
        missingField += "Select Floor\n";
      }
      if (this.state.selectedHouse == "") {
        missingField += "Select House\n";
      }
      if (this.state.selectedBedroom == "") {
        missingField += "Select Bedroom\n";
      }
      if (this.state.selectedToilet == "") {
        missingField += "Select Toilet\n";
      }
      if (this.state.selectedLotSize == "") {
        missingField += "Enter Select LotSize\n";
      }
      this.setState({
        missingError: missingField
      });

      storage.remove({
        key: "surveyData"
      });
      storage.save({
        key: "surveyData", // Note: Do not use underscore("_") in key!
        data: {
          id: this.state.id,
          fullName: this.state.fullName,
          address: this.state.address,
          lotNo: this.state.lotNo,
          chipCode: this.state.chipCode,
          contactNo: this.state.contactNo
        },

        // if expires not specified, the defaultExpires will be applied instead.
        // if set to null, then it will never expire.
        expires: null
      });
      // this.props.goBack();
      console.log("sucessfully saved form");
    //}
  };

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { t, i18n, navigation } = this.props;
    const { navigate } = navigation;
    let text = "Waiting..";
    let latitude = "";
    let longitude = "";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      //  text = JSON.stringify(this.state.location);
      latitude = JSON.stringify(this.state.location.coords.latitude);
      longitude = JSON.stringify(this.state.location.coords.longitude);
      console.log(text);
    }
    /*    if (!this.state.isConnected) {
      return this.MiniOfflineSign();
    }*/
    //   this.checkData()
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
        <Body style={{ flex: 2 }}>
          <Title>{t('columbia_form:title')}</Title>
        </Body>
        <Right />
      </Header>
        <Content padder style={styles.formWrapper}>
          {this.state.hasOnlineData == false ||
          this.state.hasOnlineData == null ? (
            <Text></Text>
          ) : this.state.hasOnlineData == true ? (
            <Text>Seems like you do have already save form</Text>
          ) : null}
           
           
           
            <Label  style={styles.label}>
              <Text style={styles.required}>*</Text>
              
              {t('columbia_form:full_name')}
            </Label>
          <Item regular>


            <Input
              style={[
                styles.inputStyle,
                !this.state.fullName ? styles.error : null
              ]}
              onChangeText={text => this.validate(text, "fullName")}
            />
          </Item>
          <Label  style={styles.label}>
              <Text style={{color:'red',marginRight:2}}>* </Text>{t('columbia_form:address')}
            </Label>
          <Item regular>


            <Input
              style={[
                styles.inputStyle,
                !this.state.address ? styles.error : null
              ]}
              onChangeText={text => this.validate(text, "address")}
            />
          </Item>
          <Label  style={styles.label}> 
              <Text style={styles.required}>*</Text>{t('columbia_form:lot_number')}
            </Label>
          <Item regular>


            <Input
              style={[
                styles.inputStyle,
                !this.state.lotNo ? styles.error : null
              ]}
              onChangeText={text => this.validate(text, "lotNo")}
            />
          </Item>
          <Label  style={styles.label}>
              <Text style={styles.required}>*</Text>{t('columbia_form:chip_code')}
            </Label>
          <Item regular>


            <Input
              style={[
                styles.inputStyle,
                !this.state.chipCode ? styles.error : null
              ]}
              onChangeText={text => this.validate(text, "chipCode")}
            />
          </Item>
          <Label  style={styles.label}>{t('columbia_form:contact_number')}</Label>
          <Item regular>
     

            <Input
              style={[
                styles.inputStyle,
                !this.state.contactNo ? styles.error : null
              ]}
              onChangeText={text => this.validate(text, "contactNo")}
            />
          </Item>
          <Label  style={styles.label}>{t('columbia_form:latitude')}</Label>
          <Item regular>
           
            <Input value={this.state.latitude} disabled />
          </Item>
          <View style={styles.PickerLine} />
          <Label  style={styles.label}>{t('columbia_form:longitude')}</Label>
          <Item regular>
           
            <Input value={this.state.longitude} disabled />
          </Item>
          <View style={styles.PickerLine} />
          <View>
            {/**
    * <MapView coordinate={this.state.location.coords} title="My Marker" description="Some description" />

    */}
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop:10,
              marginBottom:10
            }}
          >
            {this.state.isConnected ? (
              <Button
                primary
                style={styles.centerButton}
                onPress={() => {
                  this.formSubmit();
                }}
              >
                <Text> {t('columbia_form:submit')} </Text>
              </Button>
            ) : (
              <Button
                primary
                style={styles.centerButton}
                onPress={() => {
                  this.submitLater();
                }}
              >
                <Text> Submit Later </Text>
              </Button>
            )}

          </View>
          <Toast
            showToast={this.state.showToast}
            buttonText="Okay"
            buttonPress={() =>
              this.setState({
                showToast: !this.state.showToast
              })
            }
            position="bottom"
          >
            <Text>Wrong password!</Text>
          </Toast>
        </Content>
      </Container>
    );
  }
}
export default withNamespaces(['columbia_form', 'common'], { wait: true })(BasicForm);
const styles = StyleSheet.create({
  required: {
    color: "red",
    marginRight: 5
  },
  icon: {
    color: "#fff",
    fontSize: 20
  },
  headerText: {
    color: "#fff",
    fontSize: 14
  },
  logo: {
    width: 50,
    height: 50
  },
  PickerLabel: {
    borderColor: "transparent",
    height: 30
  },
  Picker: {
    marginTop: -5,
    marginLeft: 9,
    paddingBottom: 10,
    borderWidth: 1,
    borderBottomColor: "gray"
  },
  PickerLine: {
    borderBottomColor: "#aaa",
    borderBottomWidth: 0.5,
    marginLeft: 15
  },
  offlineContainer: {
    backgroundColor: "#b52424",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    //  width,
    position: "absolute",
    top: 30
  },
  offlineText: { color: "#fff" },




  formWrapper:{
    padding:10,
    backgroundColor:'#d2dae2'
  },
  label:{
    color: LABEL_COLOR,
    fontSize: FONT_SIZE,
    marginBottom: 7,
    fontWeight: FONT_WEIGHT
  },
  inputStyle:{
    backgroundColor:'#fff',
   // height:40,
   // borderColor:'#F1CEAF',
   // borderRadius: 5,


    color: INPUT_COLOR,
    fontSize: FONT_SIZE,
    height: 36,
    paddingVertical: Platform.OS === "ios" ? 7 : 0,
    paddingHorizontal: 7,
    borderRadius: 4,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    marginBottom: 5
  }
});
