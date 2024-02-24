
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideBar = () => {
  const item=useSelector(store=>store.menu.item);

  return (
    <>  
    {
      item &&
     <List className=" p-4 ">
          <Link to={"/"}>
      <ListItem button>
        <ListItemIcon>
      <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <SubscriptionsIcon />
        </ListItemIcon>
        <ListItemText primary="Subscriptions" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PlayCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Shorts" />
      </ListItem>
     
      <ListItem button>
        <ListItemIcon>
          <LibraryAddIcon />
        </ListItemIcon>
        <ListItemText primary="Library" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <VideoLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Your videos" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WatchLaterIcon />
        </ListItemIcon>
        <ListItemText primary="Watch later" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ThumbUpIcon />
        </ListItemIcon>
        <ListItemText primary="Liked videos" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SportsEsportsIcon />
        </ListItemIcon>
        <ListItemText primary="Gaming" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LiveTvIcon />
        </ListItemIcon>
        <ListItemText primary="Live" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MusicNoteIcon />
        </ListItemIcon>
        <ListItemText primary="Music" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SportsSoccerIcon />
        </ListItemIcon>
        <ListItemText primary="Sports" />
      </ListItem>
    </List>
    }
    </>

  );
};

export default SideBar;
