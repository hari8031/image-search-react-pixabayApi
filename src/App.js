import React, { useState } from "react";
import { useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [term]);

  const handleSearch = (search) => {
    console.log(search,'app');
    setTerm(search);
  };
  console.log(term,'=term');
  return (
    <div className="container mx-auto">
      <ImageSearch handleSearch={handleSearch} />
      {
        isLoading? <h1 className="text-6xl text-center mx-auto mt-32">Loading.....</h1>: <div className="grid md:grid-cols-3 justify-center gap-4">
        {images.map((image, i) => (
          <ImageCard key={i} image={image} />
        ))}
      </div>
      }
     
    </div>
  );
};

export default App;
