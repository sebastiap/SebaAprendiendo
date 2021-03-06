// Ejemplo de Spika Games - Archivo section.jsx
// Evalua si esta seccion es o no favorita y la agrega o la quita de favoritos usando el contexto creado con createContext

import React,{useContext} from "react";
import seccion from './section.module.css';

import FavoritesContext from "../store/favorites-context";

function Section(props) {
  const fContext = useContext(FavoritesContext);
  const itemIsFavorite = fContext.isFavorite(props.id);
  console.log(itemIsFavorite);
  function onClickHandler() {
  if (itemIsFavorite) {
    fContext.removeFavorite(props.id)
  }
  else {
fContext.addFavorite({
  id:props.id,
  name:props.name,
  img:props.img,
  content:props.content,
})
  }
  console.log(fContext)
  }

  return (
    <div className={seccion.section}>
      <h1>
        <p>{props.name}</p>
      </h1>
      <img className={seccion.sectioncircleimg}src={props.img} alt={props.name} />
          <p>{props.content}</p>
          <button onClick={onClickHandler}> {itemIsFavorite?"Quitar de Favoritos":"Agregar a Favoritos"} </button>
    </div>
  );
}
export default Section;
