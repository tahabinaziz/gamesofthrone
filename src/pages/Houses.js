import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";

const HousesPage = () => {
  const [house, setHouse] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleClick = (slug) => {
    setSelectedHouse(house.find((house) => house.slug === slug));
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    // Clear the selected house when the search input changes
    setSelectedHouse(null);
  };

  const filteredHouses = house.filter((house) =>
    house.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const MemberList = ({ members }) => {
    return (
      <>
        {members.map((member) => (
          <div className="mt-4 hover:bg-hoverColor cursor-pointer mb-4  text-xs p-6 max-w-md bg-white rounded-lg border border-white shadow-md bg-white dark:border-shadow-lg md:text-lg">
            <span className="inline-flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="md:-mt-1">
                {member.slug.toUpperCase()} - {member.name}
              </p>
            </span>
          </div>
        ))}
      </>
    );
  };

  const [isLoading, setIsLoading] = useState(false);
  /*Data For Table */
  useEffect(() => {
    setIsLoading(true);

    const loadHouse = async () => {
      return await axios
        .get(`https://api.gameofthronesquotes.xyz/v1/houses`, {
          headers: { "Content-Type": `application/json` },
        })
        .then((res) => {
          setHouse(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadHouse();
  }, []);

  return (
    <>
      <header className="w-full h-16 bg-primary text-white flex justify-center items-center mb-8">
        <h1 className="font-medium text-2xl font-sans">Houses</h1>
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

            {Array.isArray(house)
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
                          <p className="md:-mt-1"> {item.slug.toUpperCase()}</p>{" "}
                        </span>
                      </div>
                    </>
                  );
                })
              : []}
          </div>
          {selectedHouse && (
            <div className="">
              <h3 className="text-xl font-bold mb-4">Members</h3>
              <h2>{selectedHouse.name}</h2>
              <MemberList members={selectedHouse.members} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default HousesPage;
