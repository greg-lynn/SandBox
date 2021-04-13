console.log('Hello World!');

const baseUrl = 'http://api.tvmaze.com';
const endPoint = '/search/shows';
const root = document.querySelector('#root');
const resultsDiv = document.querySelector('#results');

async function getShows() {
  event.preventDefault();
  resultsDiv.innerHTML = "";

  const searchTerm = document.querySelector('#searchTerm').value;

  console.log({ searchTerm });

  const response = await fetch(`${baseUrl}${endPoint}?q=${searchTerm}`);
  const data = await response.json();
  console.log('data:', data);

  letsForEach(data);

  if (data.length > 0) {
    letsMap(data);
    // displayImage(data)
    // letsForEach(data)
  } else {
    resultsDiv.innerHTML = 'No results';
  }

};

function displayImage(data) {

  for (i = 0; i < data.length; i++){
    console.log('The show name is: ', data[i].show.name);

    const newImage = document.createElement('img');
    newImage.setAttribute('src', data[i].show.image.medium);
    resultsDiv.appendChild(newImage);
  }

}

const letsForEach = (data) => {
  data.forEach((item)=>{
    console.log({ item })

    const newImage = document.createElement('img');
    newImage.setAttribute('src', item.show.image.medium);
    resultsDiv.appendChild(newImage);
  })
}



// document.querySelector('#searchForm').addEventListener("submit", getShows)
// document.querySelector('#searchForm').addEventListener("submit", (event) => getShows(event))

// getShows();

const letsMap = (data)=>{
  const newElements = data.map((result) => `<img src='${result.show.image.medium}'/>`);
  resultsDiv.innerHTML = newElements.join('');

  console.log({ newElements });
};

document.querySelector('#searchForm').addEventListener("submit", (event) => getShows(event))