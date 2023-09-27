import React from 'react'
import Button from '../Reusable/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from "../../css/about.module.css";
const Navbar = () => {
    const hanldeQuote=()=>{
        console.log("Hi")
    }
  return (
    <>
    {/* linearColor */}
    <div className="relative pxPadNav    mb-10 lg:mb-[115px]  background flex justify-between gap-3  pt-[21px] items-center">
        <div className={`${styles.NavbarItem} flex items-center lg:gap-[50px]`}>
         <img src="/assets/image/logo.png"/>
         <div>
          <ul className='lg:flex gap-[25px] text-[14px] hidden   font-medium leading-normal whitespace-nowrap'>
            <li>Home</li>
            <li>Company <KeyboardArrowDownIcon/></li>
            <li>Services<KeyboardArrowDownIcon/></li>
            <li>Hire Developers <KeyboardArrowDownIcon/></li>
            <li>Contact Us</li>
          </ul>
        </div>
        </div>
      
        <div>
            <button className='bg-default-primary whitespace-nowrap text-[#fff] capitalize px-[5px] sm:px-[25px] py-[10px] rounded-[4px] text-[10px] sm:text-[14px] font-medium leading-normal'>
            Get A Free Quote
            </button>
        </div>
        {/* <div className={`${styles.boxShading} absolute border border-solid  bg-opacity-30 w-80 h-80 rounded-full top-[-219px] left-[-397px]`}> */}
  {/* Your content goes here */}
{/* </div> */}
{/* <div className={`${styles.boxShadingRight} absolute border border-solid  bg-opacity-30 w-80 h-80 rounded-full bottom right-0`}>
  </div> */}

        {/* <div className={`${styles.boxShading} border border-[#fff] p-10 `}></div> */}
        {/* <div>
            <Button
              type="button"
              onClick={hanldeQuote}
              label="Get A Free Quote"
              sx={{
                backgroundColor: '#005CFF !important', color: '#ffffff', textTransform: 'capitalize', padding: '25px 13px', borderRadius: '4px',
              }}
              value={undefined}
              endIcon={undefined}
              variant={undefined}
              disabled={false}
              />
        </div> */}
    </div>
    </>
  )
}

export default Navbar