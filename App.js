import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [poeple, setPeople] = useState ([
    {name: "loki", id: "1"},
    {name: "thor", id: "2"},
    {name: "groot", id: "3"},
    {name: "youndu", id: "4"},
    {name: "starlord", id: "5"},
    {name: "monkey", id: "6"},
    {name: "kevin", id: "7"},
    {name: "heller", id: "8"},
    {name: "hellen", id: "9"},
    {name: "loda", id: "10"},
    {name: "gegetsu", id: "11"},
    {name: "todo", id: "12"},
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>

      <FlatList
      numColumns= {2}
      keyExtractor={(item) => item.id }
      data={poeple}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
        //  <Text style={styles.item}>{item.name}</Text>
      )}
      />

    {/* <ScrollView>
      { poeple.map(item => (
        <View key={item.key} >
          <Text style={styles.item}>{item.name}</Text>
        </View>))}
      </ScrollView> */}

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    margin: 30,
    padding: 30,
    backgroundColor: "#FED049",
    fontSize: 25,
    marginHorizontal: 20,
    // borderRadius: 10,
  }
});
