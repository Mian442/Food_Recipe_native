import React, { Component, useContext, useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { Context } from "../Context/FoodContext";
import Resultlists from "../components/ProjectComponents/Recipe/Recipelist";
import { AsyncStorage } from "react-native";

export default ({ navigation }) => {
  const { state, getdata } = useContext(Context);
  const [Ainemate, setanimate] = useState();
  console.disableYellowBox = true;
  const latest = [];
  console.log("asyncstorage");

  AsyncStorage.getItem("DataKey").then((value) => {
    console.log("asyncstorage2");
    console.log(value);
  });
  // console.log(getsdata);
  useEffect(() => {
    setanimate(true);
    getdata();
    setTimeout(() => {
      setanimate(false);
    }, 3000);
    navigation.addListener("focus", () => {
      setanimate(true);
      getdata();
      setTimeout(() => {
        setanimate(false);
      }, 3000);
    });
  }, []);

  var j = 0;
  if (state == undefined) {
    return null;
  }
  for (var i = state.length > 0 ? state.length : -1; i >= 0; i--) {
    latest[i] = state[j];
    j++;
  }
  if (!(latest.length > 0)) {
    return null;
  }
  return (
    <View style={styles.container}>
      {Ainemate == true ? (
        <ActivityIndicator
          color="#0000ff"
          size="large"
          style={{ marginTop: 300 }}
        />
      ) : (
        <Resultlists
          title="Newly Added"
          result={latest}
          navigation={navigation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
  },
});

///export default class HomeScreen extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//         <View style={styles.container}>
//           <View style={{alignItems: "center", height: 200, justifyContent: "center"}}>
//             <Image source={require("../assets/images/header.png")} resizeMode = 'cover'/>
//           </View>

//           <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//             <ListItem
//                 leftElement={() => {
//                   return (
//                       <Avatar source={require("../assets/imgIcons/employee.png")} rounded size={"medium"}/>
//                   )
//                 }}
//                 title={"Profile"}
//                 subtitle={"View/edit your profile"}
//                 titleStyle={{fontSize: 16, fontWeight: "bold"}}
//                 chevron={true}
//                 pad={25}
//                 bottomDivider
//                 onPress={()=> {this.props.navigation.navigate("Profile")}}
//             />

//             <ListItem
//                 leftElement={() => {
//                   return (
//                       <Avatar source={require("../assets/imgIcons/employee.png")} rounded size={"medium"}/>
//                   )
//                 }}
//                 title={"Add Child"}
//                 subtitle={"Add a new found kid in database"}
//                 titleStyle={{fontSize: 16, fontWeight: "bold"}}
//                 chevron={true}
//                 pad={25}
//                 bottomDivider
//             />

//             <ListItem
//                 leftElement={() => {
//                   return (
//                       <Avatar source={require("../assets/imgIcons/employee.png")} rounded size={"medium"}/>
//                   )
//                 }}
//                 title={"Search Child"}
//                 subtitle={"Search for a lost kid"}
//                 titleStyle={{fontSize: 16, fontWeight: "bold"}}
//                 chevron={true}
//                 pad={25}
//                 bottomDivider
//             />

//             <ListItem
//                 leftElement={() => {
//                   return (
//                       <Avatar source={require("../assets/imgIcons/employee.png")} rounded size={"medium"}/>
//                   )
//                 }}
//                 title={"View Children"}
//                 subtitle={"View lost kids"}
//                 titleStyle={{fontSize: 16, fontWeight: "bold"}}
//                 chevron={true}
//                 pad={25}
//                 bottomDivider
//             />
//           </ScrollView>
//         </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: {width: 0, height: -3},
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
