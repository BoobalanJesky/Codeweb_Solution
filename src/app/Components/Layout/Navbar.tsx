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
    <section className=' relative mb-40  flex justify-between gap-3  pt-[21px] items-center'>
        <div className='flex items-center gap-[50px]'>
         <img src="/assets/image/logo.png"/>
         <div>
          <ul className='flex gap-[25px] text-[14px]  font-medium leading-normal'>
            <li>Home</li>
            <li>Company <KeyboardArrowDownIcon/></li>
            <li>Services<KeyboardArrowDownIcon/></li>
            <li>Hire Developers <KeyboardArrowDownIcon/></li>
            <li>Contact Us</li>
          </ul>
        </div>
        </div>
      
        <div>
            <button className='bg-default-primary text-[#fff] capitalize px-[25px] py-[13px] rounded-[4px] text-[14px] font-medium leading-normal'>
            Get A Free Quote
            </button>
        </div>
        <div className={`${styles.boxShading} absolute border border-solid  bg-opacity-30 w-72 h-72 rounded-full top-[-219px] left-[-397px]`}>
  {/* Your content goes here */}
</div>

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
    </section>
    </>
  )
}

export default Navbar