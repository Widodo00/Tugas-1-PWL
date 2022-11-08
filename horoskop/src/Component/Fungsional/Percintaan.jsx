import React from "react";
import Produk from "../Class/Produk";

const Percintaan = (props) => {
  return (
    <div className="blog-wrap">
      <p>
        <h2>{props.zodiak}</h2>
      </p>
      <p>
        {props.zodiak}, dalam percintaan saat ini kamu {props.percintaan}
      </p>
      <Produk like="0" dislike="0" />
    </div>
  );
};

export default Percintaan;
