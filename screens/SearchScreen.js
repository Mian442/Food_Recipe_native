import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { SearchBar } from "react-native-elements";
import FormInput from "../components/FormInput";
import Resultlists from "../components/ProjectComponents/Recipe/Recipelist";
import { Context } from "../Context/FoodContext";

export default function SearchScreen({ navigation }) {
  const [value, setvalue] = useState("Pizza");
  const [result, setresult] = useState();
  const [Ainemate, setanimate] = useState();
  const { state, getsearch } = useContext(Context);
  console.disableYellowBox = true;
  useEffect(() => {
    navigation.addListener("focus", () => {
      setresult(undefined);
      getsearch(value);
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View>
        <SearchBar
          name="Search"
          value={value}
          onChangeText={(ne) => {
            setvalue(ne);
          }}
          round
          lightTheme
          platform="default"
          containerStyle={{ marginVertical: 10 }}
          inputContainerStyle={styles.input}
          placeholder="Search"
          onEndEditing={() => {
            getsearch(value);
            setanimate(true);
            setresult(state);
            setTimeout(() => {
              setanimate(false);
            }, 5000);
          }}
        />
      </View>
      {Ainemate == true ? (
        <ActivityIndicator
          color="#0000ff"
          size="large"
          style={{ marginTop: 300 }}
        />
      ) : result === undefined ? null : result.length == 0 ? (
        <Text>No Result</Text>
      ) : (
        <Resultlists
          title={`Total Result (${result.length})`}
          result={result}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontStyle: "italic",
    color: "black",
  },
});
