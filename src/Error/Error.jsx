import errorImg from '../../public/assets/home/404.gif'

const Error = () => {
    return (
        <div className='flex  justify-center items-center'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default Error;