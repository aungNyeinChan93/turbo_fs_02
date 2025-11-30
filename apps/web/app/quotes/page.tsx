import React from "react";

export async function getAllQuotes() {
  const response = await fetch(`https://dummyjson.com/quotes`);
  const { quotes } = await response.json();
  return quotes;
}

const QuotesPage = async () => {
  const quotes = await getAllQuotes();

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(quotes, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default QuotesPage;
