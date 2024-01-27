import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import VideoList from "./VIdeoList";

const Body = () => {
	const item = useSelector((store) => store.menu.item);
	return (
		<div className="flex ">
			{item && <SideBar />}
			<VideoList />
		</div>
	);
};

export default Body;
