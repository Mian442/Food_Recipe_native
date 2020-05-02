import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, ListItem, Button } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import { Context } from "../../Context/FoodContext";
import userlogcontext from "../../connection/userLogContext";
import { Icon, Card, Content, CardItem, Body, Left, Right } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import UserContext from "../../connection/userContext";
import { AsyncStorage } from "react-native";

export default ({ navigation, route }) => {
  const { state, getSingleuserdata } = useContext(Context);
  const { loggedIn, setLoggedin } = useContext(UserContext);
  const [Ainemate, setanimate] = useState();
  const [id, setid] = useState();
  const [type, settype] = useState();

  console.disableYellowBox = true;
  console.log("Logger1\n" + id + " " + type);
  useEffect(() => {
    setanimate(true);
    getSingleuserdata(type);
    setTimeout(() => {
      setanimate(false);
    }, 3000);
    AsyncStorage.getItem("DataKey").then((value) => {
      console.log("proasyncstorage2");
      console.log("jj" + value);
      console.log(JSON.parse(value).type);
      settype(JSON.parse(value).type);
      setid(JSON.parse(value).id);
    });
    navigation.addListener("focus", () => {
      console.log("LoggerFocus");
      setanimate(true);
      getSingleuserdata(type);
      setTimeout(() => {
        setanimate(false);
      }, 3000);
      console.log("LoggerFocusend");
    });
  }, []);
  if (state[id - 1] == undefined) {
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
        <View>
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
            source={
              type === "Chief"
                ? require("../../assets/images/Chief.jpeg")
                : require("../../assets/images/User.jpeg")
            }
            size="xlarge"
          />
          <ListItem
            title="Name"
            rightTitle={state[id - 1].name}
            leftIcon={<Icon name="user" type="FontAwesome5" />}
            bottomDivider
          />
          <ListItem
            title="Phone#"
            rightTitle={state[id - 1].ph}
            leftIcon={<Icon name="phone" type="FontAwesome" />}
            bottomDivider
          />
          <ListItem
            title={type !== "Chief" ? "Favourite" : "Food"}
            leftIcon={
              <Icon
                name={type !== "Chief" ? "bookmark" : "hamburger"}
                type="FontAwesome5"
              />
            }
            bottomDivider
            chevron
            leftIcon={<Icon name="bowl" type="Entypo" />}
            onPress={() => {
              console.log("fav");
              if (type === "Chief") {
                navigation.navigate("FoodDisplayList", {
                  data: state[id - 1].food,
                  premission: true,
                });
              } else {
                navigation.navigate("Favourite", {
                  data: state[id - 1],
                });
              }
            }}
          />
          {type == "Chief" ? (
            <ListItem
              title="Recipe"
              bottomDivider
              leftIcon={<Icon name="book" type="MaterialCommunityIcons" />}
              chevron
              onPress={() => {
                console.log("recip");
                navigation.navigate("DisplayList", {
                  data: state[id - 1].recipe,
                  premission: true,
                });
              }}
            />
          ) : null}
          <Button
            onPress={async () => {
              var Data = {
                id: -3,
                type: "",
                LogStatus: false,
              };
              await AsyncStorage.setItem("DataKey", JSON.stringify(Data));
              navigation.navigate("Home");
            }}
            title={"Sign Out"}
            style={{ padding: 10, marginTop: 20 }}
            type="outline"
            buttonStyle={{
              borderRadius: 20,
              marginHorizontal: 40,
              marginVertical: 20,
              borderWidth: 2,
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
