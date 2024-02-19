import { Link } from "react-router-dom"
import logo from "./images/award.png"

const ForgotPassword = () => {
    return(
        <div className="">
            <div className=" flex justify-center mt-10">
                <div className="flex flex-center w-1/3">
                    <div className="bg-white mx-2 rounded-full">
                        <img src={logo} alt="logo" className="w-16 h-16 px-"/>
                    </div>
                    <h3 className="text-6xl font-bold text-blue-600">QuickGrade</h3>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <div className=" w-1/2 flex justify-center mt-8 shadow p-10">
                    <div className="">
                        <div className="flex justify-center">
                            <h1 className="text-4xl "> Forgot Password </h1>
                        </div>
                        
                        <div className="flex mt-6 justify-center items-center"><p className="text-xl text-center">Enter the email associated with your account and we’ll send an email with instruction to reset your password</p></div>
                        <form className="my-10">
                            <label className="text-2xl"> Email</label><br /><br />
                            <input type="text" placeholder="Enter your email" className="w-full h-16 text-lg rounded-full p-6 border"/><br />
                            <Link to="/resetPassword"><button className="h-16 mt-10 text-white text-xl border-2 border-blue-600 hover:bg-white hover:text-blue-600 p-1.5 bg-blue-600 w-full rounded-full">Reset Password</button></Link>
                        </form>
                        <div className="flex justify-center">
                            <a href="/" className="font-bold text-xl">Back to Login</a>
                        </div>
                            
                    </div>
                </div>
            </div>
            
            
        </div>
    )

}
export default ForgotPassword