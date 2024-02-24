import { useSelector } from "react-redux";
import SideBar from "./SideBar";

import WatchPage from "./WatchPage";
import Livechat from "./Livechat";
const Watch = () => {
  const item=useSelector(store=>store.menu.item)

  return (
    <div className="flex gap-2 ">
			{item && <SideBar />}
      <WatchPage/>
      <Livechat/>
    </div>
  )
}

export default Watch
