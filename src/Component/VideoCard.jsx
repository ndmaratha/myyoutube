

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength - 3) + '...';
  }
  return title;
};

const VideoCard = ({ data }) => {
  const truncatedTitle = truncateTitle(data?.snippet?.title, 50);

  return (
    <div className="mx-auto w-80 mr-1 mb-4 rounded-lg overflow-hidden shadow-lg bg-white transition duration-300 transform hover:shadow-xl ">
      <img
        className="w-full h-48  object-cover"
        src={data?.snippet?.thumbnails?.high?.url}
        alt={data?.snippet?.title}
      />
      <div className="px-4 py-2">
        <div className="font-semibold text-lg mb-1">{truncatedTitle}</div>
        <p className="text-gray-700 text-sm">{data?.snippet?.channelTitle}</p>
        <p className="text-gray-700 text-sm">{data?.statistics?.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
