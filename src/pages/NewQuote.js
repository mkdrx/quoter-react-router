import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  // Handler that passes data to QuoteForm through props
  const addQuoteHandler = (quoteData) => {
    // Eventually send it to a server - for now console.log
    console.log(quoteData);

    // Add navigating away after submission/sending data
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
