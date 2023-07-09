// call fetch 
//  response 
// complete data stream 
// make the corresponding dom element

console.log('about to fetch image')

showImage()
.catch(err => {
  console.error(err);
})


async function showImage(){
  let response = await fetch('user.jpg');
  let blob = await response.blob();
  document.getElementById('image').src = URL.createObjectURL(blob);
}


// fetch('user.jpg')
// .then(response => {
//   console.log(response);
//   return response.blob(); 
// })
// .then(blob => {
//   console.log(blob);
//   return document.getElementById('image').src = URL.createObjectURL(blob);
// })
// .catch(err => {
//   console.error(err);
// })