import React from "react";
import Produk from "../Class/Produk";

const Tanggal = (props) => {
  return (
    <div className="blog-wrap">
      <p>
        <h2>{props.zodiak}</h2>
      </p>
      <p>
        {props.zodiak} merupakan manusia yang lahir pada rentang waktu{" "}
        {props.tanggal}
      </p>
      <Produk like="0" dislike="0" />
    </div>
  );
};

export default Tanggal;
