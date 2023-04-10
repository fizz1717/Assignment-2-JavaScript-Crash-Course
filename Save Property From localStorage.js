function saveObjectPropertiesToLocalStorage(obj) {
    for (let prop in obj) {
      localStorage.setItem(prop, obj[prop]);
    }
    let newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      newObj[key] = localStorage.getItem(key);
    }
    return newObj;
  }
  let myObject = { name: "Asim", age: 20, city: "Karachi" };
  let retrievedObject = saveObjectPropertiesToLocalStorage(myObject);
  console.log(retrievedObject);