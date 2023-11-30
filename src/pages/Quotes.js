import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";

const Quotes = () => {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const loadCharacter = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.gameofthronesquotes.xyz/v1/characters",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setCharacter(response.data);
      const allQuotes = character.reduce((quotes, character) => {
        return quotes
          .concat(character.quotes)
          .sort(() => Math.random() - 0.5)
          .slice(0, 5);
      }, []);
      setQuotes(allQuotes);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCharacter();
  }, []);

  const handleRandomQuotesClick = () => {
    loadCharacter();
  };

  return (
    <>
      <header className="w-full h-16 bg-primary text-white flex justify-center items-center mb-8">
        <h1 className="font-medium text-2xl font-sans">Quotes</h1>
      </header>
      <section className="container mx-auto md:p-8 lg:-mt-8">
        <h3 className="text-xl font-bold mb-4">Quotes</h3>

        <div className="gap-4 md:flex col-grid">
          {quotes.length > 0 &&
            quotes.map((item, index) => {
              return (
                <>
                  <div
                    className="mb-4 p-4 max-w-sm bg-white rounded-lg border border-white shadow-md bg-white dark:border-shadow-lg md:mb-0"
                    key={index + 1}
                  >
                    <h6 className="mb-2  font-medium tracking-tight  text-primary">
                      Quotes
                    </h6>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item}
                    </p>
                  </div>
                </>
              );
            })}
        </div>
        {isLoading && <Loader />}
        <button
          className="bg-primary text-white  px-4 py-2 mt-6 rounded-md"
          onClick={handleRandomQuotesClick}
        >
          Random Quotes
        </button>
      </section>
    </>
  );
};
export default Quotes;
