import './qotd.css';
const Qotd = ({ quote, author }) => {
  return (
    <div className="quote-of-the-day">
      <h1>"{quote}"</h1>
      <h2>{author}</h2>
    </div>
  );
};

export default Qotd;
