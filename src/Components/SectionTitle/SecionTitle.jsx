

const SecionTitle = ({heading ,subHeading}) => {
    return (
        <div className="mx-auto text-center w-3/12 my-8">
           <p className="text-yellow-500 mb-2 ">-----------{subHeading}-----------</p> 
           <p className="uppercase font-semibold text-3xl border-y-4 py-3">{heading}</p> 
        </div>
    );
};

export default SecionTitle;