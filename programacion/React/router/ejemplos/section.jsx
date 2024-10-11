import React from "react";
import seccion from './section.module.css';
import { Link } from "react-router-dom";

  return (
    <div className={seccion.section}>
      <h1>
        <p>{props.name}</p>
      </h1>
      <img className={seccion.sectioncircleimg}src={props.img} alt={props.name} />
          <p>{props.content} </p>
          <Link to={{pathname:"/spika-games/"+ props.link,state:{title:props.name,img:props.img,content:props.content}}}  ><button style={{textDecoration:"none"}}> Ver mas</button></Link>
    </div>
  );
}
export default Section;
