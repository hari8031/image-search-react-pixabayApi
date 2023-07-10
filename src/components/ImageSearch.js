import React from "react";
import { useState } from "react";

const ImageSearch = ({ handleSearch }) => {
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(term);
    setTerm("");
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-4 leading-tight focus:outline-none"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded mr-2">Search</button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
