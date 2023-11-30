import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";

const Persons = () => {
  const [character, setCharacter] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedHouse, setSelectedHouse] = useState(null);

  const [quoteButton, setQuoteButton] = useState(true);

  const handleClick = (slug) => {
    setSelectedHouse(character.find((character) => character.slug === slug));
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    // Clear the selected house when the search input changes
    setSelectedHouse(null);
  };

  const filteredHouses = character.filter((character) =>
    character.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const allQuotes = character.reduce((quotes, character) => {
    return quotes
      .concat(character.quotes)
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
  }, []);

  const DetailList = ({ persons }) => {
    return (
      <>
        <section className=" container  py-6 ">
          <div className="mb-4 p-6 max-w-sm bg-white rounded-lg border border-white shadow-md bg-white dark:border-shadow-lg md:mb-0">
            <h3 className="mb-2 text-lg font-medium tracking-tight  text-primary">
              Name: {persons.name.toUpperCase()}
            </h3>
            <h3 className="mb-2 text-lg font-medium tracking-tight  text-primary">
              House: {persons.house.name}
            </h3>
            <div className="container  mx-auto flex flex-col md:flex-row py-2 px-4 border-t-2 border-lineColor"></div>

            {quoteButton ? (
              <ul>
                {persons.quotes.map((item, index) => (
                  <li key={index + 1}>
                    {index + 1} - {item}
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <p className="text-lg">Other Quotes:</p>
                {allQuotes.map((item, index) => (
                  <ul>
                    <li key={index + 1}>
                      {index + 1} - {item}
                    </li>
                  </ul>
                ))}
              </>
            )}

            <button
              className="bg-primary text-white px-4 py-2 mt-4 rounded-md"
              onClick={() => setQuoteButton(!quoteButton)}
            >
              {quoteButton ? "More Quotes" : "Hide Quotes"}
            </button>
          </div>
        </section>
      </>
    );
  };

  const [isLoading, setIsLoading] = useState(false);
  /*Data For Table */
  useEffect(() => {
    setIsLoading(true);

    const loadCharacter = async () => {
      return await axios
        .get(`https://api.gameofthronesquotes.xyz/v1/characters`, {
          headers: { "Content-Type": `application/json` },
        })
        .then((res) => {
          setCharacter(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadCharacter();
  }, []);

  return (
    <>
      <header className="w-full h-16 bg-primary text-white flex justify-center items-center mb-8">
        <h1 className="font-medium text-2xl font-sans">Persons</h1>
      </header>
      <section className="container mx-auto md:p-8 lg:-mt-8">
        <input
          type="text"
          placeholder="Search houses..."
          value={searchInput}
          onChange={handleSearchChange}
          className="w-1/2  flex  rounded-md mb-8 block mx-auto p-2 border-white shadow-md bg-white dark:border-shadow-lg  mb-4"
        />
        {isLoading && <Loader />}
        <div className="flex flex-col md:grid grid-cols-2 gap-8">
          <div className="">
            <h3 className="text-xl font-bold mb-4">Houses</h3>

            {filteredHouses.length === 0 && searchInput !== "" && (
              <p>No results found.</p>
            )}

            {Array.isArray(filteredHouses)
              ? filteredHouses.map((item, index) => {
                  return (
                    <>
                      <div
                        onClick={() => handleClick(item.slug)}
                        key={index + 1}
                        className="hover:bg-hoverColor cursor-pointer mb-4 text-xs p-6 max-w-md bg-white rounded-lg border border-white shadow-md bg-white dark:border-shadow-lg md:text-lg"
                      >
                        <span className="inline-flex gap-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                            />
                          </svg>
                          <p className="md:-mt-1"> {item.name.toUpperCase()}</p>{" "}
                        </span>
                      </div>
                    </>
                  );
                })
              : []}
          </div>
          {selectedHouse && (
            <div className="">
              <h3 className="text-xl font-bold">Details</h3>
              {/* <h2>{selectedHouse.name}</h2> */}

              <DetailList persons={selectedHouse} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Persons;
