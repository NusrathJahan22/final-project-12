import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";


const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const handelGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
    }
    return (
        <div>
            <button onClick={handelGoogle} className="btn bg-gray-200"><FaGoogle className="text-blue"></FaGoogle>Google</button>
        </div>
    );
};

export default SocialLogin;