import React from "react";
import Produk from "../Class/Produk";

const Karir = (props) => {
  return (
    <div className="blog-wrap">
      <p>
        <h2>{props.zodiak}</h2>
      </p>
      <p>
        {props.zodiak}, dalam karirrmu saat ini {props.karir}
      </p>
      <Produk like="0" dislike="0" />
    </div>
  );
};

export default Karir;
