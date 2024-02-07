import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../public/BackgroundImage.jpeg';
import logo from '../../public/logo.png';
import SignInPage from './SignInPage';
import Footer from './Footer';

const LaunchScreen: React.FC = () => {
    const title: string = 'QuickGrade';
    const subtitle: string = 'Unlock your exam potential with our management system.';
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <>
            <div className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-between w-screen h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '38px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
                        <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '2px', marginRight: '2px', marginTop: '14px' }}>
                            <img src={logo} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '40%' }} />
                        </div>
                        <h1 style={{ fontSize: '58px', fontWeight: 'bold', color: 'white', lineHeight: '91.2px', letterSpacing: '-0.5px', margin: '8px', width: '333px', height: '81px', alignItems: 'center' }}>
                            {title}
                        </h1>
                    </div>
                    <p className="text-yellow-400 font-Inter font-normal text-base leading-8 mx-0 mb-8"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: '22px',
                            fontWeight: 400,
                            lineHeight: '33.6px',
                            letterSpacing: '0px',
                            textAlign: 'left',
                            width: '658px',
                            height: '34px'
                        }}
                    >
                        {subtitle}
                    </p>
                    <div className="w-96 h-56 mt-4 mx-auto p-8 border rounded-md bg-white">
                        <label htmlFor="sign-in" className="block mb-2 text-gray-600">Sign in As:</label>
                        <b className="block mb-2"></b>
                        <b className="block mb-2"></b>
                        <select
                            name="sign-in"
                            id="sign-in"
                            className="w-full border p-2 rounded-md"
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option value="option-1">Lecturer</option>
                            <option value="option-2">Student</option>
                        </select>
                        <br /><br /><br />
                        <Link to={selectedOption === 'option-2' ? '/SignInPage' : '/'}>
                            <button className="w-full h-10 p-2 md:p-3 mt:p-3 border-0 rounded-full text-white bg-blue-800">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full text-white">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default LaunchScreen;
