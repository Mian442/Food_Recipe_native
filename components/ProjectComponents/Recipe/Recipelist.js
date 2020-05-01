import React from "react";
import {ScrollView, StyleSheet, Text, View,} from "react-native";
import {Button, Card} from "react-native-elements"

export default list = ({title, result, del_type, navigation}) => {
    console.disableYellowBox = true;

    const filteredResults = result.filter(function (item) {
        return item != null;
    });

    console.log("sample from resultlist.js -> ", filteredResults[1])

    return (
        <ScrollView style={{flex: 1}}>
            <Text style={styles.title}>{title}</Text>
            {filteredResults.map((item, key) => (
                <Card image={{uri: item.pic}} key={key}>
                    <View style={styles.row2}>
                        <Text
                            style={{width: "70%", fontWeight: "bold", fontSize: 20, paddingLeft: 20}}>{item.name}</Text>
                        <Text style={{width: "30%"}}>Views. {item.views}</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={{fontWeight: "bold"}}>Rating</Text>
                            <Text>{item.rate}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={{fontWeight: "bold"}}>Servings</Text>
                            <Text>{item.serving}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={{fontWeight: "bold"}}>Time</Text>
                            <Text>{item.time}</Text>
                        </View>
                    </View>
                    <Button
                        buttonStyle={{borderRadius: 1, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW RECIPE'
                        onPress={() => {
                            navigation.navigate("RecipeDetail", {
                                id: item.id,
                            })
                        }}
                    />
                </Card>
            ))}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        margin: 10,
    },

    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingBottom: 10
    },
    row2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingBottom: 20
    },
    col: {
        width: '33%',
        alignItems: 'center',
    }
});


// <View>
//     <Text style={styles.title}>{title}</Text>
//     <FlatList
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         data={result}
//         keyExtractor={() => "" + Math.floor(Math.random() * 99999)}
//         renderItem={({item}) => {
//             return (
//
//                 <TouchableOpacity
//                     onPress={() =>
//                         navigation.navigate("RecipeDetail", {
//                             id: item.id,
//                         })
//                     }
//                 >
//                     {item !== null ? (
//                         <ResultlistDetails
//                             result={item}
//                             del_type={del_type}
//                             navigation={navigation}
//                         />
//                     ) : null}
//                 </TouchableOpacity>
//             );
//         }}
//     />
// </View>