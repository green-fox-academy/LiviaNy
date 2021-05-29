import { useState } from 'react';

const BeerTile = ({ image, name, description }) => {
  const [tileFront, setTileFront] = useState(true);
  const onTileChange = () => {
    console.log(tileFront);
    setTileFront(!tileFront);
  };
  return (
    <div className="beer-tile" onClick={onTileChange}>
      {tileFront ? <img src={image} alt="" /> : <p>{description}</p>}
      <h1>{name}</h1>
    </div>
  );
};

export default BeerTile;
