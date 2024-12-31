import { useEffect, useState } from "react";
import CatBookCard from "./CatBookCard";

const CatBook = () => {

    const [catBook , setcatBook] = useState([]);

    useEffect(() =>{
        fetch('FeaturedBooks.json')
        .then (res => res.json())
        .then (data => setcatBook(data));
    },[]);


    return (
      <div className="mt-10">
        <div className="text-center">
          <h1>Hello this is Quick Book</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nesciunt tempore debitis a?
            Aliquam ipsum, cum, ad ipsam doloremque dolorum earum, maxime optio repudiandae omnis a nemo recusandae numquam saepe.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:ml-16 mr-16 gap-10  lg:grid-cols-2 lg:ml-36 mr-36  gap-10">
          {catBook.map((catBook) => (
            <CatBookCard key={catBook._id} catBook={catBook}></CatBookCard>
          ))}
        </div>
      </div>
    );
};

export default CatBook;