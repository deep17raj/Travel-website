import React from 'react'


function DestinationCard({src,desc}) {
  return (
    <div className='bg-red-50 h-7'>
        <div className='card flex flex-col'>
            <div className="el">
                <img src={src||null} alt={"abc" || "feature image"} />
            </div>
            <div className="el">
                <p className='font-medium text-[16px] text-[#666565]'>{desc}</p>
            </div>
            <div className="el flex">
                <div className="cta ">
                    <button className='flex'>
                        <div></div>
                    <div><p>Call for Pricing</p></div>
                    </button>
                    
                </div>
                <div className="cta">
                    <button className='bg-[#872BFF]'><p className='text-[12px] font-bold'>Read More</p></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DestinationCard