
import SearchBar from './SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 ">
      <div className="flex items-center space-x-2">
        <MenuIcon className="text-2xl cursor-pointer text-black mr-4" />
        <img
          className="h-12 w-12 rounded-full"
          src="https://t4.ftcdn.net/jpg/03/04/06/01/360_F_304060171_OUUSKIITlOLRgnDI1EFO8eSZqOHab6Iq.jpg"
          alt="logo"
        />
      </div>

      <div className="flex items-center w-2/4">
        <SearchBar />
      </div>
        <AccountCircleIcon className="text-3xl cursor-pointer" />
    </div>
  );
};

export default Header;
