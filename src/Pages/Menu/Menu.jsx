// import { Helmet } from 'react-helmet-async';

import Cover from "../Shared/Cover/Cover";
import menuImg from '../../../public/assets/menu/banner3.jpg';
import dessertImg from '../../../public/assets/menu/dessert-bg.jpeg'
import useMenu from "../../Hooks/useMenu";
import SecionTitle from "../../Components/SectionTitle/SecionTitle";
import MenuCategory from "../MenuCetegory/MenuCategory";
import imgp from '../../../public/assets/menu/pizza-bg.jpg'
import imgs from '../../../public/assets/menu/salad-bg.jpg'
import imgsoup from '../../../public/assets/menu/soup-bg.jpg'
import { Helmet } from "react-helmet";


const Menu = () => {
    const [manu] = useMenu();
    const desserts = manu.filter(item => item.category === 'dessert')
    const soup = manu.filter(item => item.category === 'soup')
    const salad = manu.filter(item => item.category === 'salad')
    const pizza = manu.filter(item => item.category === 'pizza')
    const offered = manu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
            <title>Bistro | Menu</title>
           </Helmet>
            <Cover img={menuImg} title='Our Menu'></Cover>
            <SecionTitle subHeading={"Don't miss"} heading={"today's offer"}></SecionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory img2={dessertImg} items={desserts} title="dessert"></MenuCategory>
            <MenuCategory img2={imgs} items={salad} title="salad"></MenuCategory>
            <MenuCategory img2={imgsoup} items={soup} title="soup"></MenuCategory>
            <MenuCategory img2={imgp} items={pizza} title="pizza"></MenuCategory>
        </div>
    );
};

export default Menu;