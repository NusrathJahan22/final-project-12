import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import useCart from "../Hooks/useCart";


const DashBoard = () => {
    
    const [cart] =useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-amber-400">
                <ul className="mt-4">
                <li className="flex gap-2 m-2">
                    <FaHome />
                    <NavLink to="/dashboard/user">User Home</NavLink>
                </li>
                <li className="flex gap-2 m-2">
                    <FaCalendar />
                    <NavLink to="/dashboard/reservation">Reservation</NavLink>
                </li>
                <li className="flex gap-2 m-2">
                    <FaShoppingCart />
                    <NavLink to="/dashboard/cart"> My Cart({cart.length})</NavLink>
                </li>
                <li className="flex gap-2 m-2">
                    <FaAd />
                    <NavLink to="/dashboard/review">Review</NavLink>
                </li>
                <li className="flex gap-2 m-2">
                    <FaList />
                    <NavLink to="/dashboard/bookings"> My Bookings</NavLink>
                </li>
                <div className="divider"></div> 

                <li className="flex gap-2 m-2">
                    <FaHome />
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="flex gap-2 m-2">
                    <FaSearch />
                    <NavLink to="/menu">Manu</NavLink>
                </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;