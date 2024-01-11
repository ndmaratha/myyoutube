

const Buttonlist = () => {
  return (
    <div className="flex space-x-4">
      <button className="bg-gray-500 text-white px-3 py-2 rounded">All</button>
      <button className="bg-gray-500 text-white px-3 py-2 rounded">Music</button>
      <button className="bg-gray-500 text-white px-3 py-2 rounded">Gaming</button>
      <button className="bg-gray-500 text-white px-3 py-2 rounded">News</button>
      <button className="bg-gray-500 text-white px-3 py-2 rounded">Sports</button>
      <button className="bg-gray-500 text-white px-3 py-2 rounded">Live</button>
      <button className="bg-gray-500 text-white px-3 py-2 rounded">Computer</button>
      <button className="bg-gray-500 text-white px-3 py-2 rounded">Coding</button>
      <button className="bg-gray-500 text-white px-3 py-2 rounded">Javascript</button>
      {/* Add more buttons as needed */}
    </div>
  );
}

export default Buttonlist;
