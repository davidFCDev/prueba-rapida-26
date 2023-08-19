import { useEffect, useId, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import results from "./mocks/results.json";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(false);
  const isFirstInput = useId(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("La búsqueda no puede estar vacía");
      return;
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(false);
  }, [search, isFirstInput]);

  return { search, updateSearch, error };
}

function useMovies() {}

function App() {
  const { search, updateSearch, error } = useSearch();
  const [movies, setMovies] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            value={search}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Escribe aquí tu película favorita"
          />
          <button type="submit" className="button">
            Buscar
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
