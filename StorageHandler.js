import AsyncStorage from "@react-native-async-storage/async-storage";
/*
 To import use 
 import * as StorageHandler from '../StorageHandler';
*/


export async function storeStringData(key, value) {
  try {
    // const store = stringify(key);
    await AsyncStorage.setItem("@" + key, value);
  } catch (e) {
    console.log("Exception in DropDown: " + e);
  }
  console.log("Finished storing string data as followed: " + key + "/" + value);
}


export async function storeObjectData(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@" + stringify(key), jsonValue);
  } catch (e) {
    console.log("Exception in DropDown: " + e);
  }
  console.log("Finished storing object data as followed: " + key + "/" + value);
}

export async function getData(key) {
  try {
    const value = await AsyncStorage.getItem("@" + key);
    if (value !== null) {
      // console.log("Returned Value in StorageHandler.js: ", value);
      return value;
    }
  } catch (e) {
    console.log("Exception in DropDown: " + e);
  }
  // console.log("Finished get string data as followed: " + key + "/" + value);
}


export async function getObjectData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Exception in DropDown: " + e);
  }
  console.log("Finished get object data as followed: " + key + "/" + value);
}

export async function checkString(key, value) {
  try {
    const store = stringify(key);
    const keyValue = await AsyncStorage.getItem(store);

    return value == keyValue;
  } catch (e) {
    console.log("Exception in checkString: " + e);
  }
  console.log("Finished checking data. Returned: " + (value == keyValue));
}

export async function checkObject(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    const store = stringify(key);
    const keyValue = await AsyncStorage.getItem(store);

    return jsonValue == keyValue;
  } catch (e) {
    console.log("Exception in checkString: " + e);
  }
  console.log("Finished checking data. Returned: " + (jsonValue == keyValue));
}


export async function clearAllStoredData() {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Cleared all saved data!');
}