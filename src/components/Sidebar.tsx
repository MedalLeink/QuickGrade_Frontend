import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { GiStairs } from "react-icons/gi";

function Sidebar() {
    return (
        <div className="w-[237px] h-screen bg-[#3746F5] flex justify-center">
            <div className="w-[80%] pt-4">
                <div className="flex justify-around">
                    <div className="p-3 bg-white text-blue-600 rounded-full"><FaLock /></div>
                    <div className="text-white text-[24px] font-inter font-medium">Quickgrade</div>
                </div>
                <div className="my-5 h-[2px] bg-black"></div>
                <button className="font-inter text-white text-[20px]">
                    <Link to={""}>Overview</Link>
                </button>
                <div className="pl-5 pt-8">
                    <div className="flex gap-2">
                        <div className="pt-2 text-grey-300"><RxDashboard /></div>
                        <button className="font-inter text-white text-[20px] font-extralight">
                            <Link to={""}>Dashboard</Link>
                        </button>
                    </div>
                </div>
                <div className="pl-5 pt-8">
                    <div className="flex gap-2">
                        <div className="pt-2 text-grey-300"><FaBookOpen /></div>
                        <button className="font-inter text-white text-[20px] font-extralight">
                            <Link to={""}>Enrolled courses</Link>
                        </button>
                    </div>
                </div>
                <div className="pl-5 pt-8">
                    <div className="flex gap-2">
                        <div className="pt-2 text-grey-300"><GiStairs /></div>
                        <button className="font-inter text-white text-[20px] font-extralight">
                            <Link to={""}>Results</Link>
                        </button>
                    </div>
                </div>
                <button className="font-inter pt-8 text-white text-[20px]">
                    <Link to={""}>Others</Link>
                </button>
                <div className="pl-5 pt-8">
                    <div className="flex gap-2">
                        <div className="pt-2 text-grey-300"><IoIosSettings /></div>
                        <button className="font-inter text-white text-[20px] font-extralight">
                            <Link to={""}>Settings</Link>
                        </button>
                    </div>
                </div>
                <div className="pl-5 pt-8">
                    <div className="flex gap-2">
                        <div className="pt-2 text-grey-300"><RiLogoutCircleRLine /></div>
                        <button className="font-inter text-white text-[20px] font-extralight">
                            <Link to={""}>Logout</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;