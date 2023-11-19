
import SecionTitle from "../../../Components/SectionTitle/SecionTitle";
import ManuItems from "../../Shared/ManuItems/ManuItems";
import useMenu from "../../../Hooks/useMenu";


const PopularManu = () => {
const [manu] =useMenu();
const popular=manu.filter(item => item.category==='popular')
// const [manu,setManu] = useState([]);

// useEffect(()=>{
// fetch('Manu.json')
// .then(res => res.json())
// .then(data => {const popularItems =data.filter(items => items.category === 'popular') ;setManu(popularItems )})
// },[])

    return (
        <section className="mb-12">
            <SecionTitle subHeading="Popular Items" heading="From Our Manu"></SecionTitle>
            <div className="grid md:grid-cols-2 gap-3">
                {
                    popular.map(allitem =><ManuItems key={allitem._id} item={allitem}></ManuItems>)
                }
            </div>
            <button className="btn btn-outline mt-6 border-0 border-b-4 mx-25">View Full Manu</button>
        </section>
    );
};

export default PopularManu;