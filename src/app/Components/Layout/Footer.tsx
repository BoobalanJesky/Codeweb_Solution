import React from 'react'

const Footer = () => {
    return (
        <div className='bg-default-primary pt-[72px] px-[70px]'>
            <div className='grid grid-cols-4 gap-[70px] '>
                <div className='mx-auto'>
                    <p className='text-[27px] font-bold leading-normal text-[#fff]'>Code Web Solutions</p>
                    <p className='text-[14px] font-normal leading-[30px] text-[#fff] w-[310px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                    </p>
                </div>
                <div className='px-14'>
                    <p className='text-[27px] font-bold leading-normal text-[#fff] '>pages</p>
                    <ul className='text-[14px] font-normal leading-[30px] text-[#fff]'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Client Testimonials</li>
                        <li></li>
                        <li>Careers</li>
                        <li>Case Studies</li>
                    </ul>
                </div>
                <div>
                    <p className='text-[27px] font-bold leading-normal text-[#fff]'>Services</p>
                    <ul className='text-[14px] font-normal leading-[30px] text-[#fff]'>
                        <li>Website Development</li>
                        <li>Mobile App Development</li>
                        <li>Digital Marketing</li>
                        <li>Graphic Designing</li>
                        <li>Software Testing</li>
                        <li>UI/UX Designing</li>
                        <li>Cryptocurrency</li>
                        <li>Blockchain</li>
                    </ul>
                </div>
                <div>
                    <p className='text-[27px] font-bold leading-normal text-[#fff]'>Customer Support</p>
                    <ul className='text-[14px] font-normal leading-[30px] text-[#fff] w-[300px]'>
                        <li>Email ID: support@cws.com</li>
                        <li>Phone No: +1 1984 321 6313</li>
                        <li>Address: Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry
                            Lorem Ipsum </li>
                    </ul>
                </div>
        
           
                <div className='grid gap-[14px]'>
                    <p className='text-[27px] font-bold leading-normal text-[#fff]'>Social Profiles</p>
                    <div className='flex gap-[18px]'>
                        <img className='w-[25px] h-[25px]' src="/assets/svg/fb.svg"></img>
                        <img className='w-[25px] h-[25px]' src="/assets/svg/twit.svg"></img>
                        <img className='w-[25px] h-[25px]' src="/assets/svg/insta.svg"></img>
                        <img className='w-[25px] h-[25px]' src="/assets/svg/linkdin.svg"></img>
                        <img className='w-[25px] h-[25px]' src="/assets/svg/whatsap.svg"></img>
                        <img className='w-[25px] h-[25px]' src="/assets/svg/yt.svg"></img>
                    </div>
                </div>
                <div className='px-14'>
                    <p className='text-[27px] font-bold leading-normal text-[#fff]'>Legal</p>
                    <ul className='text-[14px] font-normal leading-[30px] text-[#fff]'>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
                </div>
            <p className='mt-[134px] pb-[30px] flex justify-center text-[#fff] text-[14px] leading-[30px] font-normal'>Copyrights 2023, Code Web Solutions, All Rights Reserved.</p>
        </div>
    )
}

export default Footer