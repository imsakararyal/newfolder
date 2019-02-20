/**
 * Index
 * srw=site retaining wall
 * frw=found retaining wall
 * dfh= distance from House
 */

import React, { Component } from "react";
import {
  View,
  Alert,
  StyleSheet,
  ScrollView,
  Linking,
  AsyncStorage,Platform
} from "react-native";

import { NavigationActions } from "react-navigation";

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
export class BasicFormPart2 extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    const { t, i18n, navigation } = this.props;
    this.state = {
      mapHazard: "",
      selectedMapHazard: "",
      mapHazardOptions: [{ name: t('columbia_form:map_Hazard_o_1'), id: 1 }, { name: t('columbia_form:map_Hazard_o_2'), id: 2 }],

      srwSwitch: 0,
      srw: "",
      selectedsrw: "",
      srwOptions: [{ name: t('columbia_form:retaining_wall_o_1'), id: 1 }, { name:  t('columbia_form:retaining_wall_o_2'), id: 2 }],

      srwHeightSwitch: 0,
      srwHeight: "",
      selectedsrwHeight: "",

      srw_dfhSwitch: 0,
      srw_dfh: "",
      srw_Dfh: "",
      selectedsrw_dfh: "",

      frwSwitch: 0,
      frw: "",
      selectedfrw: "",
      frwOptions: [{ name: t('columbia_form:frw_option_1'), id: 1 }, { name: t('columbia_form:frw_option_2'), id: 2 }],

      frw_dfh: "",
      frwHeightSwitch: 0,
      frwHeight: "",
      selectedfrwHeight: "",
      frwHeightChecked: "",

      storeysSwitch: 0,
      storeysSwitch2: 0,
      storeys: "",
      selectedStoreys: "",
      storeysOptions: [
        { name: t('columbia_form:storeys_o_1'), id: 1 },
        { name:t('columbia_form:storeys_o_2'), id: 2 },
        { name: t('columbia_form:storeys_o_3'), id: 3 }
      ],
      storeysChecked: null,

      masonarySwitch: 0,
      masonarySwitch2: 0,
      masonary: "",
      selectedMasonary: "",
      masonaryOptions: [{ name:t('columbia_form:principle_masonry_o_1'), id: 1 }, { name: t('columbia_form:principle_masonry_o_2'), id: 2 }],

      constructionSwitch: 0,
      constructionDetail: "",
      selectedConstructionDetail: "",

      residentialTypeSwitch: 0,
      residentialType: "",
      selectedresidentialType: "",
      residentialTypeOptions: [{ name: t('columbia_form:residential_o_1'), id: 1 }, { name: t('columbia_form:residential_o_2'), id: 2 }],

      evidenceDamageSwitch: 0,
      selectedEvidenceDamage: "",
      evidenceDamageOptions: [{ name: t('columbia_form: evidence_o_1'), id: 1 }, { name: t('columbia_form:evidence_o_2'), id: 2 }],

      rfcardSwitch: 0,

      roofTypeSwitch: 0,
      roofTypeSwitch2: 0,
      roofType: "",
      selectedRoofType: "",
      roofTypeOptions: [{ name: t('columbia_form:roof_type_o_1'), id: 1 }, { name:t('columbia_form:roof_type_o_2'), id: 2 }],

      roofSlabSwitch: 0,
      roofSlab: "",
      selectedRoofSlab: "",
      roofSlabOptions: [
        { name:  t('columbia_form:roof_slab_type_o_1'), id: 1 },
        { name: t('columbia_form:roof_slab_type_o_2'), id: 2 },
        { name: t('columbia_form:roof_slab_type_o_3'), id: 3 },
        { name: t('columbia_form:roof_slab_type_o_4'), id: 4 }
      ],
   
      buildingShapeSwitch: 0,
      buildingShape: "",
      selectedBuildingShape: "",
      buildingShapeOptions: [

        { name:  t('columbia_form:buildingShape_o_1'), id: 1 },
        { name: t('columbia_form:buildingShape_o_2'), id: 2 }
      ],

      canLeverSwitch: 0,
      canLever: "",
      selectedCanLever: "",
      canLeverOptions: [{ name:t('columbia_form:cantiliver_o_1'), id: 1 }, { name:t('columbia_form:cantiliver_o_2'), id: 2 }],

      magicPlanSurveySwitch: 0
    };
  }
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  magicPlanAppOpen(){



    const APP_ID = 'com.sensopia.magicplan';
    const appDeepLinkURL = 'whatsapp://send?text=Hello%20World!';


    Linking.openURL(appDeepLinkURL).catch(err => {
      Linking.openURL(
        `market://details?id=${APP_ID}`
      )
      .catch(err => Linking.openURL(
        `http://play.google.com/store/apps/details?id=${APP_ID}`
      )
      )
      .catch(err => console.error("An error occurred", err))


    });



  }
  loadApp = async () => {
    const homeOwnerId = await AsyncStorage.getItem("homeOwnerId");
    const chipCode = await AsyncStorage.getItem("chipCode");
    console.log("HOMEOWNER ID" + homeOwnerId);
    console.log("ChipCode" + chipCode);

    this.setState({
      homeOwnerId: homeOwnerId,
      chipCode: chipCode
    });
    /* homeOwnerId
      ? this.setState({
        homeOwnerId:homeOwnerId ,
        chipCode: chipCode
        })
      : this.setState({
        homeOwnerId:null ,
        chipCode: null
        });*/
  };
  async componentDidMount() {
    this._isMounted = true;
    await this.loadApp();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
getData=()=>{
  console.log("get Data");
  fetch("http://colapp.drcmp.org/api/go-nogo/create", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      homeowner_id: this.state.homeOwnerId
    })
  })
    .then(response => {
      return response.json();
    })
    .then(async jsonResponse => {
      console.log(jsonResponse);
      // console.log(jsonResponse.data.chip_code);
      // Id = jsonResponse.data.id;
      // code = jsonResponse.data.chip_code;
      /*   this.setState(
      {
        hId: jsonResponse.data.id
       
      },
      function() {
        console.log("ino set data 1");
        AsyncStorage.setItem("homeOwnerId", JSON.stringify(this.state.hId));
        AsyncStorage.setItem("chipCode", JSON.stringify(this.state.hcode));
        this.props.navigation.navigate("BasicFormPart2");
        console.log("ino set data 1");
      }
    );*/
    })
    .catch(error => {
      console.log(error);
    });
};

  submitData = () => {
    const url = "";
    console.log("into nogo");
    var abc = JSON.stringify({
      homeowner_id: this.state.homeOwnerId,
      hazard_map: this.state.selectedMapHazard == 1 ? "yes" : "no",
      status: "nogo",
      side_retaining_wall: this.state.selectedsrw == 1 ? "yes" : "no",
      side_retaining_wall_height:
      this.state.selectedsrwHeight == 1 ? "yes" : "no",
      side_retaining_wall_distance:
        this.state.selectedsrw_dfh == 1 ? "yes" : "no",
      foundation_retaining_wall: this.state.selectedfrw == 1 ? "yes" : "no",
      foundation_retaining_wall_height:
        this.state.selectedfrwHeight == 1 ? "yes" : "no",
      foundation_retaining_wall_distance: this.state.frw_dfh,
      storeys: this.state.selectedStoreys,
      selectedMasonary: this.state.selectedMasonary == 1 ? "yes" : "no",
      construction_detail: this.state.selectedConstructionDetail,
      selectedresidentialType:
        this.state.selectedresidentialType == 1 ? "yes" : "no",
      selectedEvidenceDamage:
        this.state.selectedEvidenceDamage == 1 ? "yes" : "no",
      selectedConstructionDetail:
        this.state.selectedConstructionDetail == 1 ? "yes" : "no",
      selectedEvidenceDamage:
        this.state.selectedEvidenceDamage == 1 ? "yes" : "no",
      roof_type: this.state.selectedRoofType == 1 ? "yes" : "no",
      roof_slab_type: this.state.selectedRoofSlab == 1 ? "yes" : "no",
      contilever: this.state.selectedCanLever == 1 ? "yes" : "no",
      building_shape: this.state.selectedBuildingShape == 1 ? "yes" : "no",
      house_type: this.state.selectedBuildingShape == 1 ? "yes" : "no",
      damage_evidence: this.state.selectedEvidenceDamage == 1 ? "yes" : "no",
      construction_principle: this.state.selectedMasonary == 1 ? "yes" : "no"
    });
    console.log(abc);
    console.log("hid" + this.state.homeOwnerId);
    fetch("http://colapp.drcmp.org/api/go-nogo/create", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        homeowner_id: this.state.homeOwnerId,
        hazard_map: this.state.selectedMapHazard == 1 ? "yes" : "no",
        status: "nogo",
        side_retaining_wall: this.state.selectedsrw == 1 ? "yes" : "no",
        side_retaining_wall_height: this.state.selectedsrwHeight,
        side_retaining_wall_distance: this.state.selectedsrw_dfh,
        foundation_retaining_wall: this.state.selectedfrw == 1 ? "yes" : "no",
        foundation_retaining_wall_height: this.state.selectedfrwHeight,
        foundation_retaining_wall_distance: this.state.frw_dfh,
        storeys: this.state.selectedStoreys,
        selectedMasonary: this.state.selectedMasonary == 1 ? "yes" : "no",
        construction_detail: this.state.selectedConstructionDetail,
        selectedresidentialType:
          this.state.selectedresidentialType == 1 ? "yes" : "no",
        selectedEvidenceDamage:
          this.state.selectedEvidenceDamage == 1 ? "yes" : "no",
        selectedConstructionDetail: this.state.selectedConstructionDetail,
        selectedEvidenceDamage:
          this.state.selectedEvidenceDamage == 1 ? "yes" : "no",
        roof_type: this.state.selectedRoofType == 1 ? "yes" : "no",
        roof_slab_type: this.state.selectedRoofSlab == 1 ? "yes" : "no",
        contilever: this.state.selectedCanLever == 1 ? "yes" : "no",
        building_shape: this.state.selectedBuildingShape == 1 ? "yes" : "no",
        house_type: this.state.selectedBuildingShape == 1 ? "yes" : "no",
        damage_evidence: this.state.selectedEvidenceDamage == 1 ? "yes" : "no",
        construction_principle: this.state.selectedMasonary == 1 ? "yes" : "no"
      })
    })
      .then(response => {
        return response.json();
      })
      .then(async jsonResponse => {
        console.log(jsonResponse);
        // console.log(jsonResponse.data.chip_code);
        // Id = jsonResponse.data.id;
        // code = jsonResponse.data.chip_code;
        /*   this.setState(
        {
          hId: jsonResponse.data.id
         
        },
        function() {
          console.log("ino set data 1");
          AsyncStorage.setItem("homeOwnerId", JSON.stringify(this.state.hId));
          AsyncStorage.setItem("chipCode", JSON.stringify(this.state.hcode));
          this.props.navigation.navigate("BasicFormPart2");
          console.log("ino set data 1");
        }
      );*/
      })
      .catch(error => {
        console.log(error);
      });
  };
  nogo = () => {

    Alert.alert( this.props.t('columbia_form:error_msg'));
  };

  srw_dfhFunc = srw_dfh => {
    console.log("dis" + this.state.srw_dfh);
    console.log("height" + this.state.srwHeight);
    if (parseInt(srw_dfh) < parseInt(this.state.srwHeight)) {
      console.log("since is more than 2 print nogo");
      this.setState({
        selectedsrw_dfh: "0",
        frwSwitch: 0
      });
      this.nogo();
    } else {
      console.log("else");
      this.setState(
        {
          selectedsrw_dfh: "1",
          frwSwitch: 1
        },
        console.log("srw distance" + this.state.srw_dfhSwitch)
      );
    }
  };

  srwHeightFunc = height => {
    // Alert.alert("hey");

    var stateHeight = parseInt(this.state.srwHeight);
    console.log("into srwheight" + stateHeight);
    if (stateHeight > 2) {
      console.log("since is more than 2 print nogo");
      this.setState({
        srw_dfhSwitch: 0,
        selectedsrwHeight: "0"
      });
      this.nogo();
    } else {
      console.log("else");
      this.setState({
        srw_dfhSwitch: 1,
        selectedsrwHeight: "1"
      });
    }
  };
  checkStoreys = () => {
    // Alert.alert("hey");
    console.log("into the storeys1");
    var storeysType = parseInt(this.state.selectedStoreys);
    console.log("into srwheight" + storeysType);
    if (storeysType == 1) {
      console.log(" if 1storeyType" + storeysType);
      var tarrifMeter = 3;
      var distFromHouse = this.state.frw_dfh;
      if (tarrifMeter < distFromHouse) {
        this.setState({
          frwHeightSwitch: 0
        });
        console.log(" if distFromHouse" + this.state.frw_dfh);
      } else {
        console.log(" if distFromHouse" + this.state.frw_dfh);
        console.log("storeys else");

        this.setState({
          frwHeightSwitch: 1
        });
      }
    } else if (storeysType == 2) {
      console.log("else if 2storeyType" + storeysType);
      var tarrifMeter = 5;
      var distFromHouse = this.state.frw_dfh;
      if (tarrifMeter < distFromHouse) {
        this.setState({
          frwHeightSwitch: 0
        });
        console.log(" if distFromHouse" + this.state.frw_dfh);
      } else {
        console.log("else distFromHouse" + this.state.frw_dfh);

        this.setState({
          frwHeightSwitch: 1
        });
      }
    } else if (storeysType == 3) {
      this.nogo();
    } else {
      console.log("else storeyType" + storeysType);
    }
  };

  checkStoreys3 = () => {
    // Alert.alert("hey");
    console.log("into the storeys2");
    var storeysType = parseInt(this.state.selectedStoreys);
    console.log("into srwheight" + storeysType);

    if (storeysType == 3) {
      /*    this.setState({ residentialTypeSwitch: 1,roofSlabSwitch:0  }, () => {
        console.log(this.state.residentialTypeSwitch, 'residentialTypeSwitch3');
      });
*/
      this.nogo();
    } else if (storeysType == 2) {
      //2

      this.setState(
        {
          roofSlabSwitch: 1,
          canLeverSwitch: 1,
          roofTypeSwitch: 0
        },
        () => {
          console.log(
            this.state.residentialTypeSwitch,
            "residentialTypeSwitch2"
          );
        }
      );
    } else if (storeysType == 1) {
      //1

      this.setState(
        {
          roofTypeSwitch: 1
          // roofTypeSwitch: 1
        },
        () => {
          console.log(
            this.state.residentialTypeSwitch,
            "residentialTypeSwitch1"
          );
        }
      );
    } else {
      //nothing
    }

    /*if (storeysType == 1) {
      //
      var tarrifMeter = 3;
      var distFromHouse = this.state.frw_dfh;
      if (tarrifMeter < distFromHouse) {
        this.setState({
         
          frwHeightSwitch:0
        });
        console.log(" if distFromHouse"+this.state.frw_dfh);
      } else {
        console.log(" if distFromHouse"+this.state.frw_dfh);
        console.log("storeys else");
      
        this.setState({
        
          frwHeightSwitch:1,
        });
      }
    } else if (storeysType == 2) {
      var tarrifMeter = 5;
      var distFromHouse = this.state.frw_dfh;
      if (tarrifMeter < distFromHouse) {
        this.setState({
          frwHeightSwitch:0
        });
        console.log(" if distFromHouse"+this.state.frw_dfh);
      } else {
        console.log("else distFromHouse"+this.state.frw_dfh);
       
        this.setState({
          frwHeightSwitch:1
        });
      }
    } else {

    }*/
  };

  checkStoreys2 = () => {
    // Alert.alert("hey");
    console.log("into the storeys2");
    var storeysType = parseInt(this.state.selectedStoreys);
    console.log("into srwheight" + storeysType);

    if (storeysType == 3) {
      /*    this.setState({ residentialTypeSwitch: 1,roofSlabSwitch:0  }, () => {
        console.log(this.state.residentialTypeSwitch, 'residentialTypeSwitch3');
      });
*/
      this.nogo();
    } else if (storeysType == 2) {
      //2

      this.setState(
        {
          residentialTypeSwitch: 1
          // roofSlabSwitch: 1,
          ///canLeverSwitch: 1
        },
        () => {
          console.log(
            this.state.residentialTypeSwitch,
            "residentialTypeSwitch2"
          );
        }
      );
    } else if (storeysType == 1) {
      //1

      this.setState(
        {
          residentialTypeSwitch: 1
          // roofTypeSwitch: 1
        },
        () => {
          console.log(
            this.state.residentialTypeSwitch,
            "residentialTypeSwitch1"
          );
        }
      );
    } else {
      //nothing
    }

    /*if (storeysType == 1) {
      //
      var tarrifMeter = 3;
      var distFromHouse = this.state.frw_dfh;
      if (tarrifMeter < distFromHouse) {
        this.setState({
         
          frwHeightSwitch:0
        });
        console.log(" if distFromHouse"+this.state.frw_dfh);
      } else {
        console.log(" if distFromHouse"+this.state.frw_dfh);
        console.log("storeys else");
      
        this.setState({
        
          frwHeightSwitch:1,
        });
      }
    } else if (storeysType == 2) {
      var tarrifMeter = 5;
      var distFromHouse = this.state.frw_dfh;
      if (tarrifMeter < distFromHouse) {
        this.setState({
          frwHeightSwitch:0
        });
        console.log(" if distFromHouse"+this.state.frw_dfh);
      } else {
        console.log("else distFromHouse"+this.state.frw_dfh);
       
        this.setState({
          frwHeightSwitch:1
        });
      }
    } else {

    }*/
  };
  checkStoreyHeight = () => {
    console.log("inrto the storeyHeight");
  };
  frwHeightCheck = frwHeight => {
    console.log("frwHeight function" + frwHeight);
    if (frwHeight > 1.6) {
      console.log("more than " + frwHeight);
      this.setState(
        {
          frwHeightChecked: "1",
          constructionSwitch: 0
        },
        this.nogo(),
        console.log("this.state.frwheight" + this.state.frwHeightChecked)
      );
    } else {
      console.log("less than " + frwHeight);
      this.setState({
        frwHeightChecked: "0",
        constructionSwitch: 1
      });
      // this.nogo();
    }
  };

  handleChangeOption(val, type) {
    const { t, i18n, navigation } = this.props;
    console.log("value" + val + "type" + type);
    if (val !== 0) {
      // this.setState({selectedValue: val});
      this.setState({
        selectedValue: val
      });

      if (type == "mapHazard") {
        this.setState(
          {
            selectedMapHazard: val
          },
          function() {
            if (this.state.selectedMapHazard == 2) {
              this.setState(
                {
                  srwSwitch: 0
                },
                this.nogo()
              );
            } else if (this.state.selectedMapHazard == 1) {
              this.setState({
                srwSwitch: 1
              });
            } else {
              this.setState(
                {
                  srwSwitch: 0
                },
                this.nogo()
              );
            }
          }
        );
      }

      if (type == "srw") {
        this.setState(
          {
            selectedsrw: val
          },
          function() {
            if (this.state.selectedsrw == 1) {
              this.setState({
                srwHeightSwitch: 1,
                frwSwitch: 0
                // selectedsrw_dfh: 0
              });
            } else if (this.state.selectedsrw == 2) {
              this.setState({
                srwHeightSwitch: 0,
                frwSwitch: 1
                // selectedsrw_dfh: 1
              });
            } else {
              this.setState({
                srwHeightSwitch: 0,
                frwSwitch: 0
                // selectedsrw_dfh: 1
              });
            }
          }
        );
      }

      if (type == "frw") {
        console.log("frw" + val);
        this.setState(
          {
            selectedfrw: val
          },

          function() {
            if (this.state.selectedfrw == 1) {
              this.setState({
                //  srwHeightSwitch: 1,
                //frwSwitch: 0
                // selectedsrw_dfh: 0
                masonarySwitch2: 0,
                frw_dfhSwitch: 1,
                storeysSwitch: 1
              });
            } else if (this.state.selectedfrw == 2) {
              this.setState({
                //  srwHeightSwitch: 0,
                //frwSwitch: 1
                // selectedsrw_dfh: 1
                masonarySwitch2: 1,
                frw_dfhSwitch: 0,
                storeysSwitch: 0
              });
            } else {
              this.setState({
                masonarySwitch2: 0,
                frw_dfhSwitch: 0,
                storeysSwitch: 0
                // selectedsrw_dfh: 1
              });
            }
          }
        );
      }
      /*  if (type == "storeys") {
        this.setState(
          {
            selectedStoreys: val
          },
          function() {
            this.checkStoreys();
          }
        );
      }*/

      if (type == "storeys2") {
        console.log("storey type" + val);
        this.setState({ selectedStoreys: val }, () => {
          this.checkStoreys2(),
            console.log(this.state.selectedStoreys, "selectedStoreys");
        });
      }

      if (type == "storeys") {
        console.log("storey type" + val);
        this.setState({ selectedStoreys: val }, () => {
          this.checkStoreys(),
            console.log(this.state.selectedStoreys, "selectedStoreys");
        });
      }

      if (type == "masonary") {
        this.setState(
          {
            selectedMasonary: val
          },
          function() {
            if (this.state.selectedMasonary == 2) {
              this.setState(
                {
                  storeysSwitch: 0
                },
                this.nogo()
              );
            } else if (this.state.selectedMasonary == 1) {
              this.setState({
                storeysSwitch: 1,
                residentialTypeSwitch: 1
              });
            } else {
              this.setState(
                {
                  storeysSwitch: 0
                },
                this.nogo(),
                console.log("masonary " + this.state.selectedfrw)
              );

              //this.checkStoreyHeight();
            }
          }
        );
      }

      if (type == "masonary2") {
        this.setState(
          {
            selectedMasonary: val
          },
          function() {
            if (this.state.selectedMasonary == 2) {
              this.setState(
                {
                  storeysSwitch2: 0
                },
                this.nogo()
              );
            } else if (this.state.selectedMasonary == 1) {
              this.setState({
                storeysSwitch2: 1
              });
            } else {
              this.setState(
                {
                  storeysSwitch2: 0
                },
                console.log("masonary " + this.state.selectedfrw)
              );
              this.nogo();
              //this.checkStoreyHeight();
            }
          }
        );
      }

      if (type == "residentialType") {
        console.log("into the residential tyepe" + val);
        this.setState(
          {
            selectedresidentialType: val
          },
          function() {
            if (this.state.selectedresidentialType == 1) {
              this.setState({
                evidenceDamageSwitch: 1
              });
            } else {
              console.log("nothing to do");
              this.setState({
                evidenceDamageSwitch: 0
              });
            }
          }
        );
      }

      if (type == "evidenceDamage") {
        this.setState(
          {
            selectedEvidenceDamage: val
          },
          function() {
            if (this.state.selectedEvidenceDamage == 1) {
              this.nogo();
              this.setState({
                rfcardSwitch: 0
              });
            } else {
              console.log("nothing to do");
              this.checkStoreys3();
            }
          }
        );
      }

      if (type == "roofType") {
        this.setState(
          {
            selectedRoofType: val
          },
          function() {
            if (this.state.selectedRoofType == 1) {
              //Heavy
              this.setState({
                roofSlabSwitch: 1,
                buildingShapeSwitch: 1
              });
            } else if (this.state.selectedRoofType == 2) {
              this.setState({
                buildingShapeSwitch: 1
              });
            } else {
              console.log("nothing to do");
              this.setState(
                {
                  roofSlabSwitch: 0
                },
                this.nogo()
              );
            }
          }
        );
      }

      if (type == "roofSlab") {
        this.setState(
          {
            selectedRoofSlab: val
          },
          function() {
            if (
              this.state.selectedRoofSlab == 1 ||
              this.state.selectedRoofSlab == 2 ||
              this.state.selectedRoofSlab == 3
            ) {
              //Heavy
              if (this.state.selectedStoreys == 2) {
                this.setState({
                  canleverSwitch: 1,
                  roofTypeSwitch: 0,
                  buildingShape: 0
                });
              }

              if (this.state.selectedStoreys == 1) {
                this.setState({
                  roofTypeSwitch: 1,
                  canleverSwitch: 0,
                  buildingShape: 1
                });
              }
            } else if (this.state.selectedRoofType == 4) {
              this.setState(
                {
                  roofTypeSwitch: 0,
                  canLeverSwitch: 0
                },
                this.nogo()
              );
            } else {
              console.log("nothing to do");
              this.setState(
                {
                  roofSlabSwitch: 0
                },
                this.nogo()
              );
            }
          }
        );
      }

      if (type == "canLever") {
        this.setState(
          {
            selectedCanLever: val
          },
          function() {
            if (this.state.selectedCanLever == 1) {
              //Heavy
              this.nogo();
            } else if (this.state.selectedCanLever == 2) {
              this.setState({
                roofTypeSwitch2: 1
              });
            } else {
              console.log("nothing to do");
              this.setState({
                roofSlabSwitch2: 0
              });
            }
          }
        );
      }

      if (type == "buildingShape") {
        this.setState(
          {
            selectedBuildingShape: val
          },
          function() {
            if (this.state.selectedBuildingShape == 1) {
              //Heavy
              this.setState({
                magicPlanSurveySwitch: 1
              });
            } else {
              console.log("nothing to do");
              this.setState(
                {
                  magicPlanSurveySwitch: 0
                },
                this.nogo()
              );
            }
          }
        );
      }
    }
  }
  validate(text, type) {
    console.log("validate1");
    if (this._isMounted) {
      if (type == "srwHeight") {
        console.log("srwHeight" + text);
        this.setState(
          {
            srwHeight: text
          },
          function() {
            console.log("insde func" + this.state.srwHeight);
            this.srwHeightFunc();
          }
        );
      }

      if (type == "srw_dfh") {
        console.log("srw_dfh" + text);
        this.setState(
          {
            srw_dfh: text
          },
          console.log("distance set" + this.state.srw_dfh),
          this.srw_dfhFunc(text)
        );
      }

      if (type == "frw_dfh") {
        this.setState(
          {
            frw_dfh: text
          }
          //  this.frw_dfhFunc()
        );
      }
      if (type == "frwHeight") {
        console.log("into the frwHeight" + text);
        this.setState(
          {
            frwHeight: text
          },
          this.frwHeightCheck(text)
        );
      }
      if (type == "constructionDetail") {
        console.log("into the constructionDetail" + text);
        this.setState({
          selectedConstructionDetail: text,
          masonarySwitch: 1
        });
      }
    }
  }
  render() {
    // this.nogo;
    const { t, i18n, navigation } = this.props;
    const { navigate } = navigation;
    return (
      <Container style={{backgroundColor:'#d2dae2'}}>
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
        <Title>{t('columbia_form:title')} </Title>
      </Body>
      <Right />
    </Header>
      <ScrollView>
        <View>
          <Form>
            {/*
             *MAP HAZARD
             */}

            <View>
            <Label>{t('columbia_form:homeowner_id')}</Label>
              <Item regular>
               
                <Input value={this.state.homeOwnerId} disabled />
              </Item>
              <View style={styles.PickerLine} />
            </View>
            <View>
            <Label>{t('columbia_form:chip_code')}</Label>
              <Item regular>
               
                <Input value={this.state.chipCode} disabled />
              </Item>
              <View style={styles.PickerLine} />
            </View>
            <Item stackedLabel style={styles.PickerLabel}>
              <Label>{t('columbia_form:map_hazard')}</Label>
            </Item>
            <Picker
              style={styles.Picker}
              selectedValue={this.state.selectedMapHazard}
              onValueChange={e => this.handleChangeOption(e, "mapHazard")}
            >
              <Picker.Item label={t('columbia_form:picker_placeholder')}  value="0" />
              {this.state.mapHazardOptions.map((mapHazardOptions, i) => {
                return (
                  <Picker.Item
                    label={mapHazardOptions.name}
                    value={mapHazardOptions.id}
                    key={i}
                  />
                );
              })}
            </Picker>
            <View style={styles.PickerLine} />

            {/*
             *SIDE RETAINING WALL
             */}

            {this.state.srwSwitch == 1 ? (
              <View>
                 <Label style={styles.label}>{t('columbia_form:retaining_wall')}</Label>
                <Item regular >
                 
                </Item>
                <Picker
                  style={styles.Picker}
                  selectedValue={this.state.selectedsrw}
                  onValueChange={e => this.handleChangeOption(e, "srw")}
                >
                  <Picker.Item label={t('columbia_form:picker_placeholder')} value="0" />
                  {this.state.srwOptions.map((srwOptions, i) => {
                    return (
                      <Picker.Item
                        iosHeader="Selecione"
                        label={srwOptions.name}
                        value={srwOptions.id}
                        key={i}
                      />
                    );
                  })}
                </Picker>
                <View style={styles.PickerLine} />
              </View>
            ) : null}

            {/*
             *SIDE RETAINING WALL HEIGHT
             */}

            {this.state.srwHeightSwitch == 1 ? (
              <View>
                <Item regular>
                  <Label>
                    <Text style={styles.required}>*</Text>{t('columbia_form:side_retaing_wall_height')}
                  </Label>

                  <Input
                    keyboardType="numeric"
                    style={[
                      styles.inputStyle,
                      !this.state.srwHeight ? styles.error : null
                    ]}
                    onChangeText={text => {
                      this.validate(text, "srwHeight");
                    }}
                  />
                </Item>
              </View>
            ) : null}

            {/*
             *DISTANCE FROM HOUSE
             */}

            {this.state.srw_dfhSwitch == 1 ? (
              <View>
                <Item regular>
                  <Label>
                    <Text style={styles.required}>*</Text>
{t('columbia_form:srw_distance')}
                  </Label>

                  <Input
                    keyboardType="numeric"
                    style={[
                      styles.inputStyle,
                      !this.state.srw_dfh ? styles.error : null
                    ]}
                    onChangeText={text => {
                      this.validate(text, "srw_dfh");
                    }}
                  />
                </Item>
              </View>
            ) : null}

            {/*
             *FOUND RETAINING WALL HEIGHT
             */}

            {this.state.frwSwitch == 1 ? (
              <View>
                <Item regular style={styles.PickerLabel}>
                  <Label>{t('columbia_form:frw')}</Label>
                </Item>
                <Picker
                  style={styles.Picker}
                  selectedValue={this.state.selectedfrw}
                  onValueChange={e => this.handleChangeOption(e, "frw")}
                >
                  <Picker.Item label={t('columbia_form:picker_placeholder')} value="0" />
                  {this.state.frwOptions.map((frwOptions, i) => {
                    return (
                      <Picker.Item
                        iosHeader="Selecione"
                        label={frwOptions.name}
                        value={frwOptions.id}
                        key={i}
                      />
                    );
                  })}
                </Picker>
                <View style={styles.PickerLine} />
              </View>
            ) : null}

            {this.state.frw_dfhSwitch == 1 ? (
              <View>
                <Item regular>
                  <Label>
                    <Text style={styles.required}>*</Text>{t('columbia_form:frw_distance')}
                  </Label>

                  <Input
                    keyboardType="numeric"
                    style={[
                      styles.inputStyle,
                      !this.state.frw_dfh ? styles.error : null
                    ]}
                    onChangeText={text => this.validate(text, "frw_dfh")}
                  />
                </Item>
              </View>
            ) : null}
            {this.state.storeysSwitch == 1 ? (
              <View>
                <View>
                 
                  <Item regular style={styles.PickerLabel}>
                    <Label>{t('columbia_form:storeys')}</Label>
                  </Item>
                  <Picker
                    style={styles.Picker}
                    selectedValue={this.state.selectedStoreys}
                    onValueChange={e => this.handleChangeOption(e, "storeys")}
                  >
                    <Picker.Item label={t('columbia_form:picker_placeholder')} value="0" />
                    {this.state.storeysOptions.map((storeysOptions, i) => {
                      return (
                        <Picker.Item
                          iosHeader="Selecione"
                          label={storeysOptions.name}
                          value={storeysOptions.id}
                          key={i}
                        />
                      );
                    })}
                  </Picker>
                  <View style={styles.PickerLine} />
                </View>
              </View>
            ) : null}
            {this.state.masonarySwitch2 == 1 ? (
              <View>
              
                <View>
                  <Item regular style={styles.PickerLabel}>
                    <Label>{t('columbia_form:principle_masonry')}</Label>
                  </Item>
                  <Picker
                    style={styles.Picker}
                    selectedValue={this.state.selectedMasonary}
                    onValueChange={e => this.handleChangeOption(e, "masonary2")}
                  >
                    <Picker.Item label="Please select Options" value="0" />
                    {this.state.masonaryOptions.map((masonaryOptions, i) => {
                      return (
                        <Picker.Item
                          iosHeader="Selecione"
                          label={masonaryOptions.name}
                          value={masonaryOptions.id}
                          key={i}
                        />
                      );
                    })}
                  </Picker>
                  <View style={styles.PickerLine} />
                </View>
              </View>
            ) : null}
            {this.state.storeysSwitch2 == 1 ? (
              <View>
                <View>

                  <Item regular style={styles.PickerLabel}>
                    <Label>{t('columbia_form:storeys')}</Label>
                  </Item>
                  <Picker
                    style={styles.Picker}
                    selectedValue={this.state.selectedStoreys}
                    onValueChange={e => this.handleChangeOption(e, "storeys2")}
                  >
                    <Picker.Item label="Please select Options" value="0" />
                    {this.state.storeysOptions.map((storeysOptions, i) => {
                      return (
                        <Picker.Item
                          iosHeader="Selecione"
                          label={storeysOptions.name}
                          value={storeysOptions.id}
                          key={i}
                        />
                      );
                    })}
                  </Picker>
                  <View style={styles.PickerLine} />
                </View>
              </View>
            ) : null}
            {this.state.frwHeightSwitch == 1 ? (
              <View>
                <Item regular>
                  <Label>
                    <Text style={styles.required}>*</Text>
                    {t('columbia_form:frw_height')}
                  </Label>

                  <Input
                    keyboardType="numeric"
                    style={[
                      styles.inputStyle,
                      !this.state.frwHeight ? styles.error : null
                    ]}
                    onChangeText={text => {
                      this.validate(text, "frwHeight");
                    }}
                  />
                </Item>
              </View>
            ) : null}
            {this.state.constructionSwitch == 1 ? (
              <View>
                <Item regular>
                  <Label>
                    <Text style={styles.required}>*</Text> {t('columbia_form:construction_detail')}
                  </Label>
                  <Input
                    style={[
                      styles.inputStyle,
                      !this.state.constructionDetail ? styles.error : null
                    ]}
                    onChangeText={text =>
                      this.validate(text, "constructionDetail")
                    }
                  />
                </Item>
              </View>
            ) : null}
            {this.state.masonarySwitch == 1 ? (
              <View>
                
                <View>
                  <Item regular style={styles.PickerLabel}>
                    <Label>{t('columbia_form:principle_masonry')}</Label>
                  </Item>
                  <Picker
                    style={styles.Picker}
                    selectedValue={this.state.selectedMasonary}
                    onValueChange={e => this.handleChangeOption(e, "masonary")}
                  >
                    <Picker.Item label={t('columbia_form:picker_placeholder')} value="0" />
                    {this.state.masonaryOptions.map((masonaryOptions, i) => {
                      return (
                        <Picker.Item
                          iosHeader="Selecione"
                          label={masonaryOptions.name}
                          value={masonaryOptions.id}
                          key={i}
                        />
                      );
                    })}
                  </Picker>
                  <View style={styles.PickerLine} />
                </View>
              </View>
            ) : null}

            {this.state.residentialTypeSwitch == 1 ? (
              <View>
                <Item regular style={styles.PickerLabel}>
                  <Label>{t('columbia_form:residential')}</Label>
                </Item>
                <Picker
                  style={styles.Picker}
                  selectedValue={this.state.selectedresidentialType}
                  onValueChange={e =>
                    this.handleChangeOption(e, "residentialType")
                  }
                >
                  <Picker.Item label={t('columbia_form:picker_placeholder')} value="0" />
                  {this.state.residentialTypeOptions.map(
                    (residentialTypeOptions, i) => {
                      return (
                        <Picker.Item
                          iosHeader="Selecione"
                          label={residentialTypeOptions.name}
                          value={residentialTypeOptions.id}
                          key={i}
                        />
                      );
                    }
                  )}
                </Picker>
                <View style={styles.PickerLine} />
              </View>
            ) : null}

            {this.state.evidenceDamageSwitch == 1 ? (
              <View>
                <Item regular style={styles.PickerLabel}>
                  <Label>{t('columbia_form:evidence')}</Label>
                </Item>
                <Picker
                  style={styles.Picker}
                  selectedValue={this.state.selectedEvidenceDamage}
                  onValueChange={e =>
                    this.handleChangeOption(e, "evidenceDamage")
                  }
                >
                  <Picker.Item label={t('columbia_form:picker_placeholder')} value="0" />
                  {this.state.evidenceDamageOptions.map(
                    (evidenceDamageOptions, i) => {
                      return (
                        <Picker.Item
                          iosHeader="Selecione"
                          label={evidenceDamageOptions.name}
                          value={evidenceDamageOptions.id}
                          key={i}
                        />
                      );
                    }
                  )}
                </Picker>
                <View style={styles.PickerLine} />
              </View>
            ) : null}

            {this.state.roofTypeSwitch == 1 ? (
              <View>
                <Item regular style={styles.PickerLabel}>
                  <Label>{t('columbia_form:roof_type')}</Label>
                </Item>
                <Picker
                  style={styles.Picker}
                  selectedValue={this.state.selectedRoofType}
                  onValueChange={e => this.handleChangeOption(e, "roofType")}
                >
                  <Picker.Item label={t('columbia_form:picker_placeholder')} value="0" />
                  {this.state.roofTypeOptions.map((roofTypeOptions, i) => {
                    return (
                      <Picker.Item
                        iosHeader="Selecione"
                        label={roofTypeOptions.name}
                        value={roofTypeOptions.id}
                        key={i}
                      />
                    );
                  })}
                </Picker>
                <View style={styles.PickerLine} />
              </View>
            ) : null}

            {this.state.roofSlabSwitch == 1 ? (
              <View>
                <Item regular style={styles.PickerLabel}>
                  <Label>{t('columbia_form:roof_slab_type')}</Label>
                </Item>
                <Picker
                  style={styles.Picker}
                  selectedValue={this.state.selectedRoofSlab}
                  onValueChange={e => this.handleChangeOption(e, "roofSlab")}
                >
                  <Picker.Item label={t('columbia_form:picker_placeholder')} value="0" />
                  {this.state.roofSlabOptions.map((roofSlabOptions, i) => {
                    return (
                      <Picker.Item
                        iosHeader="Selecione"
                        label={roofSlabOptions.name}
                        value={roofSlabOptions.id}
                        key={i}
                      />
                    );
                  })}
                </Picker>
                <View style={styles.PickerLine} />
              </View>
            ) : null}

            {this.state.canleverSwitch == 1 ? (
              <View>
                <Item regular style={styles.PickerLabel}>
                  <Label>{t('columbia_form:cantiliver')}</Label>
                </Item>
                <Picker
                  style={styles.Picker}
                  selectedValue={this.state.selectedCanLever}
                  onValueChange={e => this.handleChangeOption(e, "canLever")}
                >
                  <Picker.Item label={t('columbia_form:picker_placeholder')} value="0" />
                  {this.state.canLeverOptions.map((canLeverOptions, i) => {
                    return (
                      <Picker.Item
                        iosHeader="Selecione"
                        label={canLeverOptions.name}
                        value={canLeverOptions.id}
                        key={i}
                      />
                    );
                  })}
                </Picker>
                <View style={styles.PickerLine} />
              </View>
            ) : null}
            {this.state.roofTypeSwitch2 == 1 ? (
              <View>
                <Item regular style={styles.PickerLabel}>
                  <Label>{t('columbia_form:roof_type')}</Label>
                </Item>
                <Picker
                  style={styles.Picker}
                  selectedValue={this.state.selectedRoofType}
                  onValueChange={e => this.handleChangeOption(e, "roofType")}
                >
                  <Picker.Item label="Please select Options" value="0" />
                  {this.state.roofTypeOptions.map((roofTypeOptions, i) => {
                    return (
                      <Picker.Item
                        iosHeader="Selecione"
                        label={roofTypeOptions.name}
                        value={roofTypeOptions.id}
                        key={i}
                      />
                    );
                  })}
                </Picker>
                <View style={styles.PickerLine} />
              </View>
            ) : null}
            {this.state.buildingShapeSwitch == 1 ? (
              <View>
                <Item regular style={styles.PickerLabel}>
                  <Label>{t('columbia_form:building_shape')}</Label>
                </Item>
                <Picker
                  style={styles.Picker}
                  selectedValue={this.state.selectedBuildingShape}
                  onValueChange={e =>
                    this.handleChangeOption(e, "buildingShape")
                  }
                >
                  <Picker.Item label={t('columbia_form:picker_placeholder')} value="0" />
                  {this.state.buildingShapeOptions.map(
                    (buildingShapeOptions, i) => {
                      return (
                        <Picker.Item
                          iosHeader="Selecione"
                          label={buildingShapeOptions.name}
                          value={buildingShapeOptions.id}
                          key={i}
                        />
                      );
                    }
                  )}
                </Picker>
                <View style={styles.PickerLine} />
              </View>
            ) : null}

            {this.state.magicPlanSurveySwitch == 1 ? (
              <View>
                <Button
                  danger
                  style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 5,
                    marginBottom: 5
                  }}
                  onPress={() =>
                    this.magicPlanAppOpen()
         
                  }
                >
                  <Text>{t('columbia_form:magic_plan')} </Text>
                </Button>
              </View>
            ) : null}
<View style={{flex:1}}>  
<View style={{flexDirection:'row','padding':10,justifyContent:'space-around'}}>
<Button
              primary
              style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                marginBottom: 5
              }}
              onPress={() => {
                this.submitData();
              }}
            >
              <Text>{t('columbia_form:submit')} </Text>
            </Button>


            <Button
              primary
              style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                marginBottom: 5
              }}
              onPress={() => {
                this.getData();
              }}
            >
              <Text>Get Data </Text>
            </Button>
</View>

</View>
            
          </Form>
        </View>
      </ScrollView>

      </Container>
    
    );
  }
}
export default withNamespaces(['columbia_form', 'common'], { wait: true })(BasicFormPart2);
const styles = StyleSheet.create({
  required: {
    color: "red",
    marginRight: 2
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
    borderBottomColor: "gray",
    borderRadius:5
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
  },
  picker: {
    marginBottom: 4,
    borderRadius: 10,
    borderColor: BORDER_COLOR,
    borderWidth: 1
  },
  select: {
    paddingLeft: 7,
    color: INPUT_COLOR
  }
});
