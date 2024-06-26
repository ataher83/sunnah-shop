import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-purple-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                <form className="card-body">

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>

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
                    
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>

                </form>
                <p className="text-center font-semibold py-2">Already have account? Please <Link to='/login'><button className="btn bg-green-200">Login</button></Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;