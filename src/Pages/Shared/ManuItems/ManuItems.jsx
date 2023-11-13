

const ManuItems = ({items}) => {
    const {name,image,price,recipe} =items
    return (
        <div className="flex space-x-5">
          <img style={{borderRadius:'0 200px 200px 200px'  }} className="w-[100px]" src={image} alt="" />  
          <div>
            <p className="uppercase font-semibold">{name}</p>
            <p>{recipe}</p>
          </div>
          <p className="text-yellow-500 ">${price}</p>
        </div>
    );
};

export default ManuItems;