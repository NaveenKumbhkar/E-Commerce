import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import CardItem from "../components/CardItem";

function Card(){

    const {card} = useSelector((state) => state);
    const[totalAmount , setTotalAmount] = useState(0);

    useEffect(() =>{
       setTotalAmount(card.reduce((acc,curr)=>acc+curr.price , 0))
    },[card])
    

    return(
        <div>
           {
            card.length > 0 ?
            (
                <div className="max-w-[900px] mx-auto flex flex-col md:flex-row justify-center">
                    <div className="w-[100%] md:w-[60%] flex flex-col p-2">
                    {
                    card.map((item,index) => (
                        <CardItem key = {item.id} item = {item} itemIndex = {index}/>
                    ))
                    }
                    </div>
                    <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
                        <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
                        <div className="flex flex-col gap-5">
                        <div className="font-semibold text-xl text-green-800">Your card</div>
                        <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                        <p>
                            <span className="text-gray-700 font-semibold text-xl">Total Item = {card.length}</span>
                        </p>
                        </div>
                        </div>
                        <div className="flex flex-col mb-10">
                        <p className="text-xl font-bold">
                            <span className="text-gray-700 font-semibold">
                                Total Amount:
                            </span> ${totalAmount}</p>
                            <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">CheckOut Now</button>
                        </div>
                    </div>
                </div>
            ) :
            (
                <div className="flex justify-center items-center flex-col h-screen">
                    <h1 className="text-[25px] mb-2 font-bold">Card Empty</h1>
                    <NavLink to={"/"}>
                        <button
                        className="bg-slate-700 uppercase outline rounded-full 
                        p-1 px-4 text-white font-semibold hover:scale-110 transition duration-300 ease-in"
                        >Shop Now</button>
                    </NavLink>
                </div>
            )
           }
        </div>
    )
}

export default Card;