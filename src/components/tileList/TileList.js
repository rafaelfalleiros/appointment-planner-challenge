import React from "react";

import { Tile } from "../../components/tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map(({ name, ...rest }, index) => (
        <Tile key={index} name={name} description={{ ...rest }} />
      ))}
    </div>
  );
};
