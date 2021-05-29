import BeerTile from './beerTile';
import { useState } from 'react';
import { Pagination } from 'antd';

const BeerList = ({ beerList }) => {
  const pageSize = 6;
  const [page, setPage] = useState(1);

  const onPagiantionChange = (page) => {
    setPage(page);
  };

  return (
    <div className="beer-list">
      {beerList.slice((page - 1) * pageSize, page * pageSize).map((beer) => (
        <BeerTile key={beer.id} description={beer.description} image={beer.image_url} name={beer.name} />
      ))}
      <Pagination current={page} total={beerList.length} onChange={onPagiantionChange} pageSize={pageSize} />
    </div>
  );
};

export default BeerList;
