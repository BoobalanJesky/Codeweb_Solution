import React from 'react'
interface Props {
  //   href: string;
  title: string;
  description: string;
  icon: string;
  className?: string;
  imageClassName?: string;
  link?: string;
  LinkclassName?:string
  iconComponent?:ReactNode
}
function AccountCard({
  //   href,
  title, description, icon, className, imageClassName,link,iconComponent ,LinkclassName
}: Props) {
  return (
    // <Link href={href} 
    <div className={`cursor-pointer shadow-lg border rounded-xl ${className}`}>

      <img src={icon} alt={title} className={imageClassName} />
      <p className="text-base not-italic font-semibold  py-[16px] text-[14px] leading-normal">{title}</p>
      <p className="  font-normal  text-[#414141]  leading-normal">
        {description}
      </p>
      <p className={`text-[14px] text-normal ${LinkclassName} leading-normal flex gap-[3px]  text-text-color`}><span>{link}
      </span>{iconComponent} </p>
    </div>

  )
}

export default AccountCard