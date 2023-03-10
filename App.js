import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Eggs" },
    { id: 3, text: "Bread" },
    { id: 4, text: "Juice" },
  ]);

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  }

  function addItem(item) {
    if (!item) {
      Alert.alert("Error", "Pleas enter an item", {
        item: "OK",
      });
    } else {
      setItems((prevItems) => {
        return [{ id: 1, text: item }, ...prevItems];
      });
    }
  }
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
