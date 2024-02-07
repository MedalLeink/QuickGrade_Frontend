import React from 'react';


const SignInPage = () => {
    const title: string = 'QuickGrade';
    const subtitle: string = 'Unlock your exam potential with our management system.';

    return (
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
                    </div>
                    </div>
    );

}




export default SignInPage;