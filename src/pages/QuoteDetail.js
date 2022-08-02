import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

// Temporary dummy data
const DUMMY_QUOTES = [
  { id: "q1", author: "Mk", text: "Learning React is great!" },
  { id: "q2", author: "Bl", text: "Learning Python is great!" },
];

const QuoteDetail = () => {
  const params = useParams();

  // To identify the quote
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // If no quote is found
  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
