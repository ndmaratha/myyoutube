import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { SEARCH_API } from "../utils/constant";
import axios from "axios";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [focus, setFocus] = useState(true);
    const [suggestion, setSuggestion] = useState([]);

    useEffect(() => {
        const handleSuggestion = async () => {
            try {
                console.log(SEARCH_API + searchQuery);
                const response = await axios.get(SEARCH_API + searchQuery);
                setSuggestion(response.data[1]); // Access data directly from the response object
            } catch (error) {
                console.error("Error fetching suggestions:", error);
                // Handle error appropriately, e.g., display an error message to the user
            }
        };
        handleSuggestion();
    }, [searchQuery]);

    return (
        <>
            <div className="relative w-full">
                <input
                    type="text"
                    className="w-full border p-2 border-black rounded-l-full focus:outline-none"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                {focus && suggestion.length > 0 && (
                    <div className="absolute bg-white w-[calc(100%-4px)] shadow-lg border rounded-lg overflow-y-auto mt-1 z-50 text-left">
                        <ul className="py-3">
                            {suggestion?.map((sugg) => (
                                <li
                                    key={sugg}
                                    className="my-1 p-1 hover:bg-gray-100 cursor-pointer"
                                >
                                    {/* Wrap each suggestion item with Link */}
                                    <Link to={`/SearchResult/q=${sugg}`}>
                                        <span>{sugg}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <button className="bg-gray-700 text-white p-2 rounded-r-full">
                🔍
            </button>
        </>
    );
};

export default SearchBar;
