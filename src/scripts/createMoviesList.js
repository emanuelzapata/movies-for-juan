const fileSystem = require('fs');
const movies = require('../assets/recommendations.json');
const axios = require('axios');

function createOutputFile(movieOutputList){
    fileSystem.writeFile('src/assets/movies.json',JSON.stringify(movieOutputList), function(error){
        if(error){
            return console.log(error);
        }
        console.log("The file has been updated");
    })
}

async function getMovie(movie, year){
    const response = await axios.get(`http://www.omdbapi.com/?apikey=8bfa8726&t=${movie}&y=${year}`);
    return response.data;
}

async function main(){
    let movieList = [];
    for(let movie of movies){
        const response = await getMovie(movie.title, movie.year);
        movieList.push(
            {
                ...movie,
                ...response
            }
        );
    }
    createOutputFile(movieList);
}

main();