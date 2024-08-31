import { useDispatch, useSelector } from "react-redux";
import { add , remove } from "../redux/slice/CardSlice";
import {toast} from "react-hot-toast";

function Product({post}){

    const{card} = useSelector((state) => state);
    const dispatch = useDispatch();

    function addCardHandler(){
        dispatch(add(post));
        toast.success("Item added to card");
    }
    function removeCardHandler(){
        dispatch(remove(post.id));
        toast.error("Item remove from card");
    }

    return(
        <div className="flex flex-col items-center justify-between outline 
         gap-3 mt-10 p-4 ml-5 rounded-lg hover:scale-110 transition duration-300 ease-in group">
           <div className="text-gray-700 font-semibold text-lg text-left truncate w-40">{post.title}</div>
           <div>
              <p className="w-40 text-gray-400 text-left text-[10px] font-normal">
                {post.description.split(" ").slice(0,10).join(" ")+"..."}
              </p>
           </div>
           <div className="h-[150px]">
               <img src={post.image} className="h-full w-full"/>
           </div>
           <div className="flex justify-between gap-4 items-center w-full mt-1">
             <div>
                <p className="text-green-600 font-semibold">${post.price}</p>
             </div>
             <div>
                {
                    card.some((p) => p.id == post.id) ?
                    <button onClick={removeCardHandler}
                    className="text-gray-700 border-2 border-gray-700 text-[10px] p-1 px-2  rounded-full 
                    uppercase font-semibold
                    transition duration-300 ease-in group-hover:bg-gray-700 group-hover:text-white">
                        Remove card
                    </button>:
                    <button onClick={addCardHandler}
                    className="text-gray-700 border-2 border-gray-700 text-[10px] p-1 px-2  rounded-full 
                    uppercase font-semibold
                    transition duration-300 ease-in group-hover:bg-gray-700 group-hover:text-white">
                        Add to card
                    </button>
                }
             </div>
           </div>
        </div>
    )
}

export default Product;