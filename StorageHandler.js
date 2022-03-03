import AsyncStorage from '@react-native-async-storage/async-storage';

const storeStringData = async (part, value, type) => {
    try {
      const store = stringify(part + type);
      await AsyncStorage.setItem("@" + stringify(store), value)
    } catch (e) {
      console.log("Exception in DropDown: " + e)
    }
    console.log("Finished storing string data as followed: " + part + "/" + value);
}
const storeObjectData = async (part, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem("@" + stringify(part), jsonValue)
    } catch (e) {
        console.log("Exception in DropDown: " + e)
    }
    console.log("Finished storing object data as followed: " + part + "/" + value);
  }

const getData = async (value) => {
    try {
      const value = await AsyncStorage.getItem(value)
      if(value !== null) {
        console.log("Attempted to see a value already stored.")
      }
    } catch(e) {
        console.log("Exception in DropDown: " + e)
    }
    console.log("Finished get string data as followed: " + part + "/" + value);
  }

  const getObjectData = async (value) => {
    try {
      const jsonValue = await AsyncStorage.getItem(value)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log("Exception in DropDown: " + e)
    }
    console.log("Finished storing object data as followed: " + part + "/" + value);
  }