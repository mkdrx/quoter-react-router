import QuoteList from "../components/quotes/QuoteList";
import { useEffect } from "react";

// Imports to then fetch the data from db
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  // To send a request to db whenever the component renders
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  // Handle the different status:
  // If pending, render LoadingSpinner
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  // If there is an error
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  // If completed but no loaded quotes or empty array
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  // Output loadedQuotes if it passes all the checks
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
