import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure, { axiosSecure } from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";



const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure=useAxiosSecure()
const [, refetch] =useCart()
   

    const handelAddToCart = () => {
        console.log(user)
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }5
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title:`${name} added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                          refetch()
                    }  

                })
        } 
        else {
            Swal.fire({
                title: "Your are not logged in ",
                text: "Please login to add to cart ",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <h2 className="absolute right-0 m-3 text-white bg-slate-700 px-4 rounded-lg ">${price}</h2>
            <div className=" card-body text-center">
                <h2 className="card-title">{name}</h2>

                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handelAddToCart} className="btn bg-yellow-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;