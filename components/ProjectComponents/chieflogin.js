import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { Avatar, ListItem } from "react-native-elements";
import { Context } from "../../Context/FoodContext";
import userlogcontext from "../../connection/userLogContext";
import { Icon, Card, CardItem, Body, Left, Right } from "native-base";

export default ({ navigation, route }) => {
  const { state, getcheifdata } = useContext(Context);
  const [Ainemate, setanimate] = useState();
  const { data1, data2 } = useContext(userlogcontext);
  const [id, setid] = data1;
  const [type, settype] = data2;
  console.disableYellowBox = true;
  console.log("CheifScreen\n" + route.params.cid);
  console.log(type + " " + id);
  useEffect(() => {
    setanimate(true);
    getcheifdata();
    setTimeout(() => {
      setanimate(false);
    }, 3000);
  }, []);
  if (state[route.params.cid - 1] == undefined) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      {Ainemate == true ? (
        <ActivityIndicator
          color="#0000ff"
          size="large"
          style={{ marginTop: 300 }}
        />
      ) : (
        <ScrollView>
          <Avatar
            rounded
            overlayContainerStyle={{
              backgroundColor: "white",
            }}
            containerStyle={{
              marginLeft: 130,
              marginTop: 25,
              marginBottom: 30,
              backgroundColor: "white",
            }}
            source={{
              uri: state[route.params.cid - 1].pic,
            }}
            size="xlarge"
          />
          <ListItem
            title="Name"
            rightTitle={state[route.params.cid - 1].name}
            leftIcon={<Icon name="user" type="FontAwesome5" />}
            bottomDivider
          />
          <ListItem
            title="Email"
            rightTitle={state[route.params.cid - 1].mail}
            leftIcon={<Icon name="md-mail" type="Ionicons" />}
            bottomDivider
          />
          <ListItem
            title="Phone#"
            rightTitle={state[route.params.cid - 1].ph}
            leftIcon={<Icon name="phone" type="FontAwesome" />}
            bottomDivider
          />
          <ListItem
            title="Account Type"
            rightTitle="Chief"
            leftIcon={
              <Icon name="account-card-details" type="MaterialCommunityIcons" />
            }
            bottomDivider
          />
          <ListItem
            title="Food"
            leftIcon={<Icon name="hamburger" type="FontAwesome5" />}
            bottomDivider
            chevron
            leftIcon={<Icon name="bowl" type="Entypo" />}
            onPress={() => {
              console.log("fav");
              navigation.navigate("FoodDisplayList", {
                data: state[route.params.cid - 1].food,
                premission: false,
              });
            }}
          />
          <ListItem
            title="Recipe"
            bottomDivider
            leftIcon={<Icon name="book" type="MaterialCommunityIcons" />}
            chevron
            onPress={() => {
              navigation.navigate("DisplayList", {
                data: state[route.params.cid - 1].recipe,
                premission: false,
              });
            }}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 35,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  iconOT: {
    marginTop: 12,
  },
  Htext: {
    fontSize: 16,
    marginVertical: 14,
    fontFamily: "serif",
    fontWeight: "bold",
    flexGrow: 1,
    paddingLeft: 15,
  },
  button: {
    borderRadius: 25,
    borderColor: "#eb0c40",
    marginTop: 80,
    borderWidth: 1,
    marginHorizontal: 75,
    height: 45,
  },
  buttontext: {
    color: "#eb0c40",
    marginLeft: 110,
    fontSize: 18,
    marginTop: 9,
  },
});
