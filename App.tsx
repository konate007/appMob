import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SearchBar } from "react-native-elements";
import { useState } from 'react';


export default function App() {
  const [searchValue, setSearchValue] = useState("")
  const searchFunction = (text: string) => {
    setSearchValue(text)
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ padding: 10, backgroundColor: 'orange' }}>
        <Text style={{ color: '#fff' }}>Appeler pour comander</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('./assets/logo.png')} style={{ width: 100, height: 50 }} />
        <TouchableOpacity onPress={() => alert("Shopping Bag")}>
          <MaterialIcons name='shop' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Bag...")}>
          <MaterialIcons name='shop' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("User account")}>
          <MaterialIcons name='person' size={30} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => alert("Menu ...")}>
          <MaterialIcons name='menu' size={30} />
        </TouchableOpacity>
        <View>
          <TextInput
            placeholder='Rechercher'
            value={searchValue}
            onChangeText={(searchValue) => searchFunction(searchValue)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
