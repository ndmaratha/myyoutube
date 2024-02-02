import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from "../utils/constant";
import { useSelector } from "react-redux";
import SideBar from "../Component/SideBar"
const SearchResult = () => {
    const { q } = useParams();
    const [result, setResult] = useState([]);
    const item = useSelector((store) => store.menu.item);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + q);
                setResult(res.data.items);
                console.log(res.data)
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };
        fetchData();
    }, [q]);
    
    return (
      <div className="flex">
        {item && <SideBar />}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {result.map((item) => (
                <div key={item.id.videoId} className="bg-white p-4 rounded-lg shadow-md">
                    <Link to={"/watch/"+item?.id?.videoId}>
                        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} className="w-full h-auto rounded-md mb-2" />
                        <h2 className="text-lg font-semibold text-gray-800">{item.snippet.title}</h2>
                        <p className="text-sm text-gray-600">{item.snippet.channelTitle}</p>
                        {/* You can add additional information here if needed */}
                    </Link>
                </div>
            ))}
        </div>
        </div>
    );
};

export default SearchResult;
