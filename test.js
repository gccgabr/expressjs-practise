"use strict";

fetch("http://localhost:3000/", {
  method: "POST"
})
.then(data => {
  console.log('Success:' + data);
})
.catch(error => {
  console.error('Error:', error);
});
