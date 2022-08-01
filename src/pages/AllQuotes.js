import QuoteList from "../components/quotes/QuoteList";

// Temporary dummy data
const DUMMY_QUOTES = [
  { id: "q1", author: "Mk", text: "Learning React is great!" },
  { id: "q2", author: "Bl", text: "Learning Python is great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
