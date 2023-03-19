
const searchBar = document.querySelector('.search-bar')
const search = document.querySelector('#myInput')
const submitBtn = document.querySelector('#submit')
const result = document.querySelector('.results')

// search.submit(e => {
//   e.preventDefault();
//   const searchTerm = $("#myInput").val();
//   const url = `https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=80&api_key=YbP6kkWKW2vqBjrAuWx0MgQhsfv7S4Ed`;
//   $.get(url)
//     .done(resp => {
//       showGiphs(resp.data.slice(0, 10));
//     })
//     .fail(console.log);
// });


submitBtn.addEventListener('submit', () =>{
     e.preventDefault();
  const searchTerm = $(search).val();
  console.log(searchTerm);
  const request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=80&api_key=YbP6kkWKW2vqBjrAuWx0MgQhsfv7S4Ed`;
  
  request.open('GET', url);
  request.onload = function(){
      const response = request.response
      const data = JSON.parse(response);
      const gif = data;
      console.log(gif)
  }
//   $.get(url)
//     .done(resp => {
//       showGiphs(resp.data.slice(0, 10));
//     })
//     .fail(console.log);
})





function showGiphs(dataArray) {
  
  let output = "";
  output = dataArray
    .map(
        gif =>{
        const gifElem = document.createElement('img');
          gifElem.setAttribute('src', gif);
          document.body.appendChild(image);
     }   
    //   imgData =>
    //     `<a href="${imgData.images.original.url}" alt="${
    //       imgData.title
    //     }" target="_blank"><img src="${gif}"></a>`
    )
    .join("");
  $(result).html(output);
}











// const images = document.querySelectorAll('.image')




// const request = new XMLHttpRequest();

// request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=cheeseburgers&api_key=YbP6kkWKW2vqBjrAuWx0MgQhsfv7S4Ed')

// request.onload = function() {
//     const response = request.response
//     const data = JSON.parse(response);
//     const gif = data;
//     images.setAttribute('src', gif);
//     // const gifElem = document.createElement('img');
//     // gifElem.setAttribute('src', gif);
//     //document.body.appendChild(image);

   

// }

// request.send();


