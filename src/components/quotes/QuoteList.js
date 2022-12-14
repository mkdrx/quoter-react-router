import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

// Helper sort by id
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  // To extract data from query parameters
  const queryParams = new URLSearchParams(location.search);

  // Helper to get key/value - check if the sorting is ascending or not
  const isSortingAsc = queryParams.get("sort") === "asc";

  // Helper to output the items
  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);

  // Handler for updating the query parameters in the URL ascending or descending
  const changeSortingHandler = () => {
    navigate(`${location.pathname}?sort=${isSortingAsc ? "desc" : "asc"}`, {
      replace: true,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
