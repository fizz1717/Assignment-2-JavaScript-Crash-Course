function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  let myObject = { name: "Asim", age: 20, city: "Karachi" };
  saveObjectToLocalStorage("myKey", myObject);  