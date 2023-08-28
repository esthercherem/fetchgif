// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.



const API_KEY ='hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const form = document.querySelector(`form`);
const input = document.querySelector('input');
const gifList = document.querySelector('.gif-list');
const deleteAllBtn = document.querySelector('.delete-all-btn');

//add event listener to form submit

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const category = input.value;
    fetchGif(category);
});


//function to fetch a random gif and append to page

function fetchGif(category) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${category}`

    fetch(url)
    .then(response => response.json())
.then (data => {
    const gifUrl = data.data.images.original.url;
    const gifImg = document.createElement('img');
    gifImg.src = gifUrl;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent= 'Delete';
    deleteBtn.addEventListener('click', () => {
        gifList.removeChild(gifDiv);

    });
    const gifDiv  = document.createElement('div');
    gifDiv.appendChild(gifImg);
    gifDiv.appendChild(deleteBtn);
    gifList.appendChild(gifDiv);

});
}

// add event listener to delete all button

deleteAllBtn.addEventListener('click', () => {
    gifList.innerHTML = '';

});

