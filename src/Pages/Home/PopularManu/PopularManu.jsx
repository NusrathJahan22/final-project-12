import { useEffect, useState } from "react";
import SecionTitle from "../../../Components/SectionTitle/SecionTitle";
import ManuItems from "../../Shared/ManuItems/ManuItems";


const PopularManu = () => {

const [manu,setManu] = useState([]);

useEffect(()=>{
fetch('Manu.json')
.then(res => res.json())
.then(data => {const popularItems =data.filter(items => items.category === 'popular') ;setManu(popularItems )})
},[])

    return (
        <section className="mb-12">
            <SecionTitle subHeading="Popular Items" heading="From Our Manu"></SecionTitle>
            <div className="grid md:grid-cols-2 gap-3">
                {
                    manu.map(items =><ManuItems key={items._id} items={items}></ManuItems>)
                }
            </div>
            <button className="btn btn-outline mt-6 border-0 border-b-4 mx-25">View Full Manu</button>
        </section>
    );
};

export default PopularManu;