import AsyncStorage from "@react-native-async-storage/async-storage";

const storeStringData = async (key, value) => {
  try {
    const store = stringify(key);
    await AsyncStorage.setItem("@" + stringify(store), value);
  } catch (e) {
    console.log("Exception in DropDown: " + e);
  }
  console.log("Finished storing string data as followed: " + key + "/" + value);
};

const storeObjectData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@" + stringify(key), jsonValue);
  } catch (e) {
    console.log("Exception in DropDown: " + e);
  }
  console.log("Finished storing object data as followed: " + key + "/" + value);
};

const getData = async (value) => {
  try {
    const value = await AsyncStorage.getItem(value);
    if (value !== null) {
      console.log("Attempted to see a value already stored.");
    }
  } catch (e) {
    console.log("Exception in DropDown: " + e);
  }
  console.log("Finished get string data as followed: " + key + "/" + value);
};

const getObjectData = async (value) => {
  try {
    const jsonValue = await AsyncStorage.getItem(value);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Exception in DropDown: " + e);
  }
  console.log("Finished storing object data as followed: " + key + "/" + value);
};

const checkString = async (key, value) => {
  try {
    const store = stringify(key);
    const keyValue = await AsyncStorage.getItem(store);

    return value == keyValue;
  } catch (e) {
    console.log("Exception in checkString: " + e);
  }
  console.log("Finished checking data. Returned: " + (value == keyValue));
};

const checkObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    const store = stringify(key);
    const keyValue = await AsyncStorage.getItem(store);

    return jsonValue == keyValue;
  } catch (e) {
    console.log("Exception in checkString: " + e);
  }
  console.log("Finished checking data. Returned: " + (jsonValue == keyValue));
};
