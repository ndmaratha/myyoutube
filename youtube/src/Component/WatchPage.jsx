import { useParams } from "react-router-dom";
const WatchPage = () => {
  const {id}=useParams();
console.log(id)
  return (
    <iframe width="760" height="515" src={"https://www.youtube.com/embed/"+id} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
  );
};

export default WatchPage;
