let dogAPI = "https://dog.ceo/api/breeds/image/random" ;

//fetch is a promise which resolves or doesnot respond 
//it responds with response object which itself isnot json so use json() method for conversion
// json itself is promise which is resolved by chaining then again 

fetch(dogAPI)
.then(response => response.json())
.then(json => {
  return document.getElementById('image').src = json.message;
})
.catch(err => console.log(err)); 

  

 