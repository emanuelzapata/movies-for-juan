import axios from "axios";
export default async function getMovie(movieTitle:string){
    const response = await axios.get(`http://www.omdbapi.com/?apikey=8bfa8726&t=${movieTitle}&y=`);
    return response;
}