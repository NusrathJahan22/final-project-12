import SecionTitle from "../../../../Components/SectionTitle/SecionTitle";
import featureImg from '../../../../assets/home/featured.jpg'
import './Feature.css'
const Feature = () => {
    return (
        <div className="feature-item pt-8 bg-fixed">
            <SecionTitle subHeading={'check it out'} heading={"Featured Items"}></SecionTitle>

            <div className="md:flex justify-center items-center bg-slate-400 bg-opacity-70 py-20 px-36">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-10 text-white mt-4">
                    <p className="font-bold">Oct 2023</p>
                    <p className="font-bold">WHER CAN I GET ??</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam similique, quibusdam reprehenderit facilis rem eligendi eum quisquam odit atque fuga esse molestias porro nihil excepturi totam reiciendis voluptatibus cumque dignissimos sint nostrum omnis qui. Consectetur voluptas voluptatibus nisi, provident illum odit omnis minima sit eaque numquam doloremque possimus, voluptatem harum.</p>
                    <button className="btn btn-outline  border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;