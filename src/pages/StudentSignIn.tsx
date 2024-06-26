import React, { useState } from "react";
import { HiLockClosed } from "react-icons/hi";
import SignInImage from "../../public/SigninImage.png";
import { Link, useNavigate } from "react-router-dom";
import { loginStudent } from "../axios/axiosFunctions/studentAxios";
import { showErrorToast, showSuccessToast } from "../utilities/toastifySetup";

const StudentSignIn = () => {
  const title = "Camouflage University";
  const subtitle = "Inspiring greatness through education.";

  const [userDetails, setUserDetails] = useState({
    registration_no: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [regErrors, setRegErrors] = useState(false);
  const [passErrors, setPassErrors] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      if (
        userDetails.registration_no.length === 0 &&
        userDetails.password.length === 0
      ) {
        setPassErrors(true);
        return setRegErrors(true);
      }

      if (userDetails.registration_no.length === 0) {
        return setRegErrors(true);
      }

      if (userDetails.password.length === 0) {
        return setPassErrors(true);
      }

      setLoading(true);

      const dataForBackend = new FormData();

      dataForBackend.append("reg_no", userDetails.registration_no);
      dataForBackend.append("password", userDetails.password);

      const data = await loginStudent(dataForBackend);

      if (data.status !== 200) {
        setLoading(false);
        // setUserDetails({
        //   registration_no: "",
        //   password: "",
        // });
        return showErrorToast(data.data.message);
      }

      if(data.data.user.dataValues.user_type === 'Lecturer'){
        setLoading(false)
        return showErrorToast(`This registration number belongs to a lecturer, navigate to the lecturer's signin page`)
      }

      showSuccessToast(data.data.message);

      setLoading(false);

      setUserDetails({
        registration_no: "",
        password: "",
      });

      localStorage.setItem('student', JSON.stringify(data.data.user))

      localStorage.setItem('token', data.data.token)

      return navigate("/StudentDashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div
          className="flex-shrink-0 w-1/2 h-full relative"
          style={{
            width: "50%", // Adjust the width to take up half of the screen
            height: "100vh", // Full height of the screen
            position: "relative",
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundColor: "rgba(16, 24, 40, 0.87)", // Adjust the transparency as needed
            }}
          ></div>
          <img
            src={SignInImage}
            alt="SignIn"
            className="w-full h-full object-cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1, // Push the image to the back
            }}
          />

          {/* Title and Subtitle on top */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1
              className="w-363px h-45px text-4xl font-bold mb-2 font-inter text-red-600 bg-maroon-700"
              style={{
                fontFamily: "Inter",
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "45px",
                letterSpacing: "0.25px",
                textAlign: "left",
                marginTop: "-150px",
                marginLeft: "-250px",
              }}
            >
              {title}
            </h1>
            <p
              className="w-297px h-22px text-lg font-Inter"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
                letterSpacing: "0.15px",
                textAlign: "left",
                marginLeft: "-250px", // Adjust this value to move it higher
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>

        {/* Form on the right */}
        <div
          style={{
            width: "50%",
            height: "100%",
            padding: "137px 80px 113px 100px",
            backgroundColor: "#FFFFFF",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Grey background */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "calc(100% - 58px)", // Adjust based on your design
              backgroundColor: "#FFFFFF", // Grey background color
              zIndex: "-1", // Push it to the back
            }}
          ></div>
          <form
            style={{
              width: "480px", // Add quotes to make it a string
              height: "600px", // Add quotes to make it a string
              top: "172px", // Add quotes to make it a string
              left: "842px", // Add quotes to make it a string
              padding: "137px 80px 113px 80px", // Add quotes to make it a string
              background: "#F9FAFB",
              marginBottom: "777",
            }}
            onSubmit={handleSubmit}
          >
            {/* Your form content */}
            <div></div>

            <div
              style={{
                width: "320px", // Add quotes to make it a string
                height: "350px", // Add quotes to make it a string
                top: "137px", // Add quotes to make it a string
                left: "80px", // Add quotes to make it a string
                gap: "48px", // Add quotes to make it a string
              }}
            >
              <label
                htmlFor="signin"
                style={{
                  width: "163px",
                  height: "22px",
                  gap: "2px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22px",
                  letterSpacing: "0.15px",
                  textAlign: "left",
                }}
              >
                Sign into QuickGrade
              </label>
              <br />
              <br />
              <br />
              <br />

              <div
                style={{
                  width: "320px",
                  height: "182px",
                  gap: "8px",
                }}
              >
                <label
                  htmlFor="employee"
                  style={{
                    width: "162px",
                    height: "20px",
                    gap: "2px",
                  }}
                >
                  Student Registration Number
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Registration number"
                  style={{
                    width: "320px",
                    height: "48px",
                    padding: "12px",
                    borderRadius: "4px",
                    border: "1px solid #BDBDBD",
                    gap: "8px",
                    background: "#FFFFFF",
                  }}
                  value={userDetails.registration_no}
                  onChange={(e: any) => {
                    setUserDetails({
                      ...userDetails,
                      registration_no: e.target.value,
                    });
                    setRegErrors(false);
                  }}
                />
                {regErrors ? (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    <em>Registration Number Required</em>
                  </p>
                ) : (
                  <br />
                )}
                <br />

                <div className="relative">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    style={{
                      width: "320px",
                      height: "48px",
                      padding: "12px",
                      borderRadius: "4px",
                      border: "1px solid #BDBDBD",
                      background:
                        "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #BDBDBD, #BDBDBD)",
                      paddingLeft: "40px",
                    }}
                    value={userDetails.password}
                    onChange={(e: any) => {
                      setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      });
                      setPassErrors(false);
                    }}
                  />
                  <HiLockClosed
                    size={18}
                    className="absolute mt-3 left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                  />
                </div>
                  {passErrors ? (
                    <p
                      style={{
                        fontSize: "12px",
                        color: "red",
                      }}
                    >
                      <em>Password Required</em>
                    </p>
                  ) : null}

                <a
                  href="/forgetPassword"
                  className="block hover:text-red-500 w-119 h-20 text-blue-500 text-s font-inter fontsize-normal leading-20 tracking-normal text-left mt-2 hover:gray-700 rounded"
                >
                  Forgot password?
                </a>
              </div>
              <br />
              <button className="border-2 border-blue-700 w-80 h-12 p-3 text-white hover:bg-white hover:text-blue-700 rounded-full flex items-center justify-center gap-2 bg-blue-700 mt-12 text-white">
                {loading ? "Loading..." : "Signin"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-16 top-944px pt-4 pb-4 pl-8 pr-8 border-t border-solid border-gray-800 bg-2D00F7">
        <footer className="bg-2D00F7 text-white w-full">
          <div className="w-[1240px] h-[22px] top-30 left-100 px-24 flex items-center justify-between">
            <span className="w-94 h-22 font-inter font-bold text-base text-indigo-900">
              QuickGrade
            </span>
            <span className="w-234 h-22 font-inter text-base font-normal text-gray-900">
              QuickGrade Inc. All rights reserved
            </span>
            <span className="flex gap-4">
              <span
                className="text-blue-700 width: 49px
height: 20px
"
              >
                Privacy
              </span>
              <span className="text-blue-700 width-[41px] height-[20px] font-inter text-base font-normal leading-20 tracking-normal text-left">
                Terms
              </span>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default StudentSignIn;
