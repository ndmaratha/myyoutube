
const SearchBar = () => {
  return (
    <>
       <input
    type="text"
    className="w-full border p-2 border-black rounded-l-full focus:outline-none"
    placeholder="Search"
  />
  <button className="bg-gray-700 text-white p-2 rounded-r-full">
    🔍
  </button>
    </>
  )
}

export default SearchBar
