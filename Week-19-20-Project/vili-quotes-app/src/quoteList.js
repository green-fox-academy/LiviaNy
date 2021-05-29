import './quoteList.css';
import Qotd from './qotd';
import { useState } from 'react';
import { Pagination } from 'antd';

const QuoteList = ({ quotes }) => {
  // eslint-disable-next-line
  const [page, setPage] = useState(0);

  const pageSize = 6;
  const onPagiantionChange = (page) => {
    setPage(page - 1);
  };
  return (
    <div className="quote-list">
      {quotes.slice(page * pageSize, (page + 1) * pageSize).map((quote) => (
        <Qotd key={quote.id} quote={quote.body} author={quote.author} />
      ))}
      <Pagination current={page + 1} total={quotes.length} onChange={onPagiantionChange} pageSize={pageSize} />
    </div>
  );
};

export default QuoteList;
