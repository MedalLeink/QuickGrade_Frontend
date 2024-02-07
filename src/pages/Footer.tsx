import React from 'react';

const Footer = () => {

    return (

<div className="footer">
<footer className="bg-blue-600 text-white p-7">
    <div className="container mx-auto flex justify-between">
    <span className="mr-9 font-bold">QuickGrade</span>
    <span className='mx-auto'>QuickGrade Inc. All rights reserved</span>
    <span className='ml-10' style={{ wordSpacing: '1em' }}>Privacy     Terms</span> 
    </div>
</footer>
</div>
    )
}

export default Footer;