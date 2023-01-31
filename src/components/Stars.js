import React from "react";
import shortid from "shortid";
import Star from "./Star";

export default function Stars({ count }){
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({id: shortid.generate()})
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {count >= 1 && count <= 5 && stars.map(item => <Star key={item.id} />)}
    </ul>
  )
}
