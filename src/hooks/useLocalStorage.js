import { useState } from "react";

// Custom hook for using local storage
const useLocalStorage = (key, initialValue) => {
  // State to hold the current value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Attempt to get the stored value from local storage
      const item = window.localStorage.getItem(key);
      // Parse the stored JSON or return the initialValue if it doesn't exist
      console.log("item ", item);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error retrieving data from local storage:", error);
      return initialValue;
    }
  });

  // Function to set a new value to local storage
  const setValue = (value) => {
    try {
      // lazy initialization: setValue((prevValue) => prevValue + 1)
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      console.log("value to store", valueToStore);

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      // Update the state
      //   console.log("key", key);
    } catch (error) {
      console.error("Error storing data to local storage:", error);
    }
  };

  // Function to remove a value from local storage
  const removeValue = (key) => {
    try {
      // Remove from local storage
      window.localStorage.removeItem(key);
      // Reset the state
      setStoredValue(null);
    } catch (error) {
      console.error("Error removing data from local storage:", error);
    }
  };

  // Return the current value, setValue function, and removeValue function
  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
