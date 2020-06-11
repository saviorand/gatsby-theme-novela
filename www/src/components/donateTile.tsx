import React from "react";
import { Link } from 'gatsby';
import Image, { ImagePlaceholder } from '../../@narative/gatsby-theme-novela/src/components/Image';

function DonateTile(props) {
  return (
    <a href={props.href}>
       <div style={{ marginTop: "20px"}}>
          <Image style={{width: "400px"}} src="https://betternotstop.com/wp-content/uploads/2018/03/Patreon.jpg" />
       </div>
       </a>
  );
}

export default DonateTile;
