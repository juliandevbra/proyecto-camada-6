import { useEffect, useState } from "react";
import "./styles.css";

// PARA REALIZAR ESTE EJERCICIO, PUEDES COMENZAR
// DESDE EL ARCHIVO "src/hooks/useFetch".
// UNA VEZ REALIZADO DICHO CUSTOM HOOKS, PUEDES
// CONTINUAR CON EL ARCHIVO "src/hooks/usePagination".

const TOTAL_CHARACTERS = 5;
const API_URL = `https://thesimpsonsquoteapi.glitch.me/quotes?count=${TOTAL_CHARACTERS}`;

const Card = ({ url, name }) => (
  <div className="image-card">
    <div className="card-img-title">
      <h5>{name}</h5>
    </div>
    <img src={url} className="card-img" alt={name} />
  </div>
);

const ImageGallery = () => {
  const [characters, setCharacters] = useState([]);

  // Una vez que tenemos el useFetch, podemos utilizarlo
  // para obtener la data de la API en reemplazo del useState anterior.

  // TU CODIGO VA AQUI...

  //Ahora, importamos nuestro custom hook de paginación y le pasamos
  // los argumentos: nuestro array de personajes y la cantidad
  // de ellos que queremos mostrar en cada página.

  // TU CODIGO VA AQUI...

  // Esto no será necesario una vez implementados los
  // custom hooks
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Response not succesful");
        return response.json();
      })
      .then((json) => setCharacters(json))
      .catch((err) => {
        console.log(err);
        setCharacters([]);
      });
  }, []);

  const renderCharacters = (characters) =>
    characters.map(({ character, image }, index) => (
      <Card url={image} name={character} key={`${character}-${index}`} />
    ));

  // Verificamos si nuestro useFetch nos devuelve un error y mostramos el
  // mensaje

  // TU CODIGO VA AQUI...

  return (
    <div className="gallery-container">
      {/*
      Ahora que tenemos nuestro hook de paginación, 
      reemplazamos la variable sobre la cual realizaremos
      el renderizado. Además, deberemos validar que el hook no se
      encuentre "fetcheando la data", utilizando la info que nos 
      brinda nuestro useFetch.
       */}
      <div>
        {characters.length ? (
          renderCharacters(characters)
        ) : (
          <p className="loading-text">Cargando Galería...</p>
        )}
      </div>
      {/*
      Además, debemos agregamos un componente que se encargará
      de navegar entre las distintas páginas y mostrar
      el número de los items actuales sobre el total. Puedes agregarlo
      a continuación de este comentario.
       */}
    </div>
  );
};

export default function Simpson() {
  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/The_logo_simpsons_yellow.svg"
        alt="The Simpsons"
        className="title-image"
      />
      <ImageGallery />
    </div>
  );
}
