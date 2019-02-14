import React from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, Dimensions,
Platform } from 'react-native';

const {height, width } = Dimensions.get("window")

export default class  App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Kawai To Do</Text>
        <View style={styles.card} >
          <TextInput style={styles.input} placeHolder={"New To Do"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },

  title: {
    color : "white",
    fontSize : 30,
    marginTop : 50,
    fontWeight : "200",
    marginBottom : 30
  }, 

  card: {
    backgroundColor:"white",
    flex : 1,
    width : width - 25,
    marginBottom : 50,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
    ...Platform.select(
      {
        ios:
        {
          sha
        },
        android:
        {

        }
      }
    )
  }

});
