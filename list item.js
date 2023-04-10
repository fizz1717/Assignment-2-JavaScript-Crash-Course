function addListItem(text) {
    let li = document.createElement('li'); // create a new <li> element
    li.textContent = text; // set the text content of the new element
    let ul = document.querySelector('ul'); // get the <ul> element
    ul.appendChild(li); // add the new element to the <ul>
  }
  addListItem('New list item.');  