import React from "react";
import { Link } from 'gatsby';

function DonateTile(props) {
  return (
    <a href={props.href}>
       <div style={{ marginTop: "20px"}}>
          <Image style={{width: "400px"}} src={props.imgsrc} />
       </div>
       </a>
  );
}

export default DonateTile;
