import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SEARCH_API } from "../utils/constant";
import axios from "axios";



const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [focus, setFocus] = useState(false);
    const [suggestion, setSuggestion] = useState([]);
    const suggestionListRef = useRef(null);
   
    const handleSuggestion = async () => {
        try {
            console.log(SEARCH_API + searchQuery);
            const response = await axios.get(SEARCH_API + searchQuery);
            setSuggestion(response.data[1]);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            handleSuggestion();
          }, 200);
      
          return () => {
            clearTimeout(timer);
          };
    }, [searchQuery]);

    const handleBlur = () => {
        
        if (!suggestionListRef.current || !suggestionListRef.current.contains(document.activeElement)) {
            setFocus(false);
        }
    };

    return (
        <>
      
            <div className="relative w-full" onBlur={handleBlur}>
                <input
                    type="text"
                    className="w-full border p-2 border-black rounded-l-full focus:outline-none"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setFocus(true)}
                />
                {focus && suggestion.length > 0 && (
                    <div className="absolute bg-white w-[calc(100%-4px)] shadow-lg border rounded-lg overflow-y-auto mt-1 z-50 text-left" ref={suggestionListRef}>
                        <ul className="py-3" onMouseDown={(e) => e.preventDefault()}>
                            {suggestion?.map((sugg) => (
                                <li key={sugg} className="my-1 p-1 hover:bg-gray-100 cursor-pointer">
                                    <Link to={`/SearchResult/q=${sugg}`}>
                                        <span>{sugg}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <button  className="bg-gray-700 text-white p-2 rounded-r-full">🔍</button>
        </>
    );
};

export default SearchBar;
