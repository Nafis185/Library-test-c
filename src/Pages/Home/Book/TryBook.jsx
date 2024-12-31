import { useEffect, useState } from "react";
import TryBookCard from "./TryBookCard";

const TryBook = () => {

    const [tryBook, settrybook] = useState([]);
    useEffect(() => {
        fetch('FeaturedBooks.json')
        .then (res => res.json())
        .then(data => settrybook(data));
    },[])


    return (
      <div className="mt-10">
        <div className="text-center">
          <h1 className="4xl font-semibold"> Try  Book</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-l grid-cols-1 ml-16  md:grid-cols-2 lg:grid-cols-3 lg:ml-36  gap-5 ">
          {
          tryBook.map((tryBook) => 
            <TryBookCard 
          key={tryBook._id} 
          tryBook = {tryBook}>
            
          </TryBookCard>
        )}
        </div>
      </div>
    );
};

export default TryBook;