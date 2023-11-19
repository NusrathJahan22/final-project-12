import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import ManuItems from "../Shared/ManuItems/ManuItems";



const MenuCategory = ({items ,title,img2}) => {
    return ( 

        <div className="pt-8">
            {title && <Cover img={img2} title={title}></Cover>}
        <div className="grid md:grid-cols-2 gap-3 mt-10">
                {
                    items.map(item =><ManuItems key={item._id} item={item}></ManuItems>)
                }
        </div>
       <Link to="/order">
       <button className="btn btn-outline border-orange-600   bg-slate-400 mt-6 border-0 border-b-4 mx-25">Order Now</button>
       </Link>
        </div>
    );
};

export default MenuCategory;