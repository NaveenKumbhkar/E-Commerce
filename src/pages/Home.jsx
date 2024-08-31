import { useEffect, useState } from "react";
import Spinner from "../components/Spinner.jsx";
import Product from "../components/Product.jsx"


function Home(){

    const API_URL = "https://fakestoreapi.com/products";
    const[loding , setLoding] = useState(false);
    const[posts , setPosts] = useState([]);

    async function fetchApiData(){
      setLoding(true);
       try{
        const data = await fetch(API_URL);
        const result = await data.json();
        console.log(result);
        setPosts(result);
       }
       catch(e){
        console.log("Error aa gya hai bhai....");
        setPosts([]);
       }
       setLoding(false);
    }

    useEffect(() => {
      fetchApiData();
    },[])

    return(
        <div>
          {
            loding ? <Spinner/>:
            posts.length > 0 ? 
            (
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl m-auto p-2 
              space-x-5 space-y-10 min-h-[80vh]">
                {
                posts.map((post) => (
                  <Product key = {post.id} post={post}/>
                ))
                }
              </div>
            ) : 
            <div className="flex justify-center items-center">NO data found</div>
          }
        </div>
    )
}

export default Home;