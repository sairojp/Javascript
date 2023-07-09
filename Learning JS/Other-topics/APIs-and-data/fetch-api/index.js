// call fetch 
//  response 
// complete data stream 
// make the corresponding dom element

console.log('about to fetch image')
fetch('user.jpg')
.then(response => {
  console.log(response);
  return response.blob(); 
})
.then(blob => {
  console.log(blob);
  return document.getElementById('image').src = URL.createObjectURL(blob);
})
.catch(err => {
  console.error(err);
})