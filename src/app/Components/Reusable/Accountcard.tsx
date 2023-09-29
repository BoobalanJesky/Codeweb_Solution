import React, { ReactNode, useState } from 'react'
interface Props {
  title: string;
  description: string;
  icon: string;
  className?: string;
  imageClassName?: string;
  link?: string;
  LinkclassName?:string
  iconComponent?:ReactNode
  DescclassName?:string;
}
function AccountCard({

  //   href,
  title, description, icon, className, imageClassName,link,iconComponent ,LinkclassName, DescclassName
}: Props) {
  return (
    // <Link href={href} 
    <div className={`cursor-pointer shadow-lg border rounded-xl ${className}`}>
     <img src={`${process.env.NEXT_PUBLIC_BASE_FOLDER}${icon}`} alt={title} className={imageClassName} />
      <p className="text-base not-italic font-semibold  py-[16px] text-[14px] leading-normal">{title}</p>
      <p className={`font-normal ${DescclassName}  text-[#414141] text-[14px] leading-normal`}>
        {description}
      </p>
      <p className={`text-[14px] text-normal ${LinkclassName} leading-normal flex gap-[3px]  text-text-color`}><span>{link}
      </span>{iconComponent} </p>
    </div>

  )
}

export default AccountCard

