import './App.css';
import movies from './assets/movies.json';
export default function App() {

  return (
    <div className="container">
      <ul>
      { movies.map((movie) => 
        <li>{movie.title}</li>
      )}
      </ul>
    </div>
  );
}