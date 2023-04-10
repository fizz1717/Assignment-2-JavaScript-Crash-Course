function addParagraph(text) {
    let p = document.createElement('p'); // create a new <p> element
    p.textContent = text; // set the text content of the new element
    document.body.appendChild(p); // add the new element to the bottom of the <body>
  }
  addParagraph('This is a new paragraph.');
  