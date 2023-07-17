import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {data.map((element) => {
          return (
            <Movie
              title={element.Title}
              year={element.Year}
              img={element.Poster}
              imdb={element.indbID}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
