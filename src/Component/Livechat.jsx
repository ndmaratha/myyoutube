import { useDispatch, useSelector } from "react-redux";
import { addComent } from "../Redux/LiveSlice";
import {
	uniqueNamesGenerator,
	animals,
	starWars,
} from "unique-names-generator";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";

const Livechat = () => {
	const item = useSelector((store) => store.live.cmt);
	const [chat, setChat] = useState({
		uname: "Nayan",
		cmt: "",
	});
	const dispatch = useDispatch();

	useEffect(() => {
		const intervalId = setInterval(() => {
			const shortName = uniqueNamesGenerator({
				dictionaries: [animals],
			});
			const don = uniqueNamesGenerator({
				dictionaries: [starWars],
			});
			const newComment = {
				uname: don,
				cmt: shortName,
			};
			dispatch(addComent(newComment));
			
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);
	const handlechat=(e)=>{
		setChat({
			...chat,
			cmt:e.target.value,
		})
	}
	const handleChatSubmit=()=>{
        dispatch(addComent(chat))
		setChat({
			...chat,
			cmt:"",
		})
	}
	return (
		<div className="flex flex-col">
			<div className="border border-black h-[515px] w-[360px] flex flex-col-reverse ">
				{item.map((cmt, index) => {
					return (
						<div key={index} className="flex m-2 ">
							<AccountCircleIcon />
							<p className="font-bold">{cmt.uname}</p>: <p>{cmt.cmt}</p>
						</div>
					);
				})}
			</div>

			<div>
				<input
					type="text"
					className="border border-black cursor-pointer "
					placeholder="Type a msg"
					value={chat.cmt}
					onChange={handlechat}
				/>
				<SendIcon onClick={handleChatSubmit} />
			</div>
		</div>
	);
};

export default Livechat;
