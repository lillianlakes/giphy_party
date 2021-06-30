"use strict"
// console.log("Let's get this party started!");

let gifCount = 0;

/** Retrieves data from the form */
async function getGiphy(e) {
  e.preventDefault();
  let term = $('.term').val();
  let response = await axios.get("http://api.giphy.com/v1/gifs/search", 
    {params: {q: term, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" }});

  let gifs = response.data.data;
  appendGif(gifs[gifCount % gifs.length].id);
  gifCount++;
}

/** Appends GIFs */
function appendGif(url) {
  $('.giphy').append(
    `<iframe src="https://giphy.com/embed/${url}" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
  );
}

/** Submits the form */
$('form').on('submit', getGiphy);

/** Removes GIFs */
$('.removeButton').on('click', function() {
  console.log('clicked');
  $('.giphy').empty();
});