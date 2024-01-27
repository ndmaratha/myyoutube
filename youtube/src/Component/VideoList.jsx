import { useEffect, useState } from "react";
import Buttonlist from "./Buttonlist";
import VideoCard from "./VideoCard";
import { MainApi } from "../utils/constant";
import axios from "axios";

import { Link } from "react-router-dom";

const VideoList = () => {
	const [videoData, setVideoData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(MainApi);
				console.log(response.data.items);
				setVideoData(response.data.items);
			} catch (error) {
				console.error("Error fetching data:", error);
				
			}
		};

		fetchData();
	}, []);

	return (
		<div className="flex flex-col ml-5 mt-5">
			<Buttonlist />
			<div className="flex flex-wrap justify-center -mx-4 mt-7">
				{videoData.map((item) => (
					<Link key={item.id} to={"/watch/"+item.id}>
						<VideoCard data={item} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default VideoList;
