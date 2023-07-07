let dogAPI = "https://dog.ceo/api/breeds/image/random" ;

  showgif().
  then(results => {
    return document.getElementById('image').src = results.message;
  })
  .catch(err => console.log(err));


 async function showgif(){
  let response = await fetch(dogAPI);
  let json = await response.json();
  return  json;
 }

 