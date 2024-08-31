import logo from "../assets/logo.png"
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom"
import {useSelector} from "react-redux";

function Navbar(){

    const {card} = useSelector((state) => state);

    return(
        <div>
            <nav className="flex justify-between items-center max-w-4xl h-18 mx-auto">
            <NavLink to="/" >
            <div>
                <img src={logo} height={50}width={100}/>
            </div>
            </NavLink>
            <div className="flex text-slate-100 gap-4">
                <NavLink to="/">
                    <button >Home</button>
                </NavLink>
                <NavLink to="/card" className="relative">
                    <button><FaCartShopping className="size-6"/></button>
                    {
                        card.length > 0 && 
                        <span 
                        className="bg-green-500 rounded-full absolute -top-1 -right-1 w-4 h-4
                         text-xs flex justify-center items-center animate-bounce ">
                            {card.length}
                        </span>
                    }
                </NavLink>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;