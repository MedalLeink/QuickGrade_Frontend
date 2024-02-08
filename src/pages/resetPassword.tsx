import logo from "./images/award.png"

const ResetPassword = () => {
    return(
        <>
            <div className=" flex justify-center mt-10">
                <div className="flex flex-center w-1/3">
                    <div className="bg-white mx-2 rounded-full">
                        <img src={logo} alt="logo" className="w-16 h-16 px-"/>
                    </div>
                    <h3 className="text-6xl font-bold text-blue-600">QuickGrade</h3>
                </div>
            </div>

            <div className="flex justify-center mt-16">
                <div className=" w-1/2 shadow p-10">
                    <div className="">
                        <div className="flex justify-center">
                            <h1 className="text-4xl "> Reset Password </h1>
                        </div>
                        
                        {/* <p className="text-xl mt-10">Enter the email associated with your account and we’ll send an email with instruction to reset your password</p> */}
                        <form className="my-10">
                            <label className="text-2xl"> New Password</label><br /><br />
                            <input type="text" placeholder="Enter your email" className="w-full h-16 text-lg rounded-full p-6 border"/><br /><br />
                            <label className="text-2xl"> Confirm Password</label><br /><br />
                            <input type="text" placeholder="Enter your email" className="w-full h-16 text-lg rounded-full p-6 border"/><br />
                            
                            <button className="h-16 mt-10 text-white text-xl p-1.5 bg-blue-600 w-full rounded-full">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
            
            
        </>
    )

}
export default ResetPassword