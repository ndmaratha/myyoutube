export const ApiKey = "AIzaSyAMByn2aMsKs63rW9yWhN031D9SBAILslo";
export const MainApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${ApiKey}&maxResults=150 
`;

export const VideoById=`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${ApiKey}&id=`;