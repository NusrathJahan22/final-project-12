import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, SetDisabled] = useState(true);
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handelLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: "Login Successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true })
            })
    }
    const handelCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        if (validateCaptcha(user_captcha_value)) {
            SetDisabled(false)
        } else {
            SetDisabled(true)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:w-1/2">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold text-orange-500">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" name="text" ref={captchaRef} placeholder="text captcha" className="input input-bordered" required />
                            <button onClick={handelCaptcha} className="btn btn-outline btn-xs mt-3">Vlidation</button>
                        </div>
                        <div className="form-control mt-6">
                            {/* disable ={disable} */}
                            <input disabled={false} className="btn bg-yellow-500" type="submit" value="login" />
                        </div>
                        <p><small>New Here ? <Link to="/signup" className='text-orange-700'>Create an Account </Link></small></p>
                        <div className='divider'></div>
                        <SocialLogin></SocialLogin>
                    </form>
                   
                   </div>
                </div>
                
            </div>
       
    );
};

export default Login;