import AsyncStorage from "@react-native-async-storage/async-storage";
//import {describe,it} from 'jest';
//let {describe,it} = global;

/*
//Testing -----------------------------
describe('Storage Management', () => {
  it('should store the keys as the same', () => {
    expect(storeStringData("TEST", "TEST")).toBe(getData("TEST") == "TEST");
  });
});


describe("StorageHandler Loading", () => {
  console.log("The StorageHandler.js Has Loaded. Continuing...")
});

describe("StorageHandler.js in", () => {
  
});
*/
// ---------------------------------------
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
      return value;
    }
  } catch (e) {
    console.log("Exception in DropDown: " + e);
  }

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
  }

  console.log('Cleared all saved data!');
}


export async function clearAllTestData() {
  var InstructorNameFromStorage = await getData("INSTRUCTOR_NAME");
  var InstructorEmailFromStorage = await getData("INSTRUCTOR_EMAIL");

  try {
    global.selectedSound = 0;
    global.currentErrorCount = 0;

    await AsyncStorage.clear()

    storeStringData("IS_LOGGED_IN", "true");

    if (InstructorNameFromStorage != null) {
      storeStringData("INSTRUCTOR_NAME", InstructorNameFromStorage);
    }
    if (InstructorEmailFromStorage != null) {
      storeStringData("INSTRUCTOR_EMAIL", InstructorEmailFromStorage);
    }

    console.log('Cleared all test data!');
  } catch (e) {
    console.log("Error clearing test data");
    console.log(e);
  }


}