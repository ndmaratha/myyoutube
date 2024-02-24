export const ApiKey = "AIzaSyAMByn2aMsKs63rW9yWhN031D9SBAILslo";
export const MainApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${ApiKey}&maxResults=150 
`;

export const VideoById = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${ApiKey}&id=`;

export const ResultBySearch = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=surfing&key=${ApiKey}`;

export const SEARCH_API =
	"http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";


export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${ApiKey}&id=`;
export const YOUTUBE_RECOMENDED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=${ApiKey}&relatedToVideoId=`;
export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${ApiKey}&q=`;
