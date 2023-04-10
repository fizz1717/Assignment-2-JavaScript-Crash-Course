function getObjectFromLocalStorage(key) {
    let storedObj = localStorage.getItem(key);
    return storedObj ? JSON.parse(storedObj) : null;
  }
  let myObject = getObjectFromLocalStorage("myKey");
  console.log(myObject);  