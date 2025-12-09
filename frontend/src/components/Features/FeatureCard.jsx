import React from 'react'

function FeatureCard({Src,Title,Desc}) {
  return (
    <div>
        <div className="card flex flex-col justify-center items-center text-center h-90 w-80 p-10 gap-4 bg-[#ffffff] rounded-4xl border-2 border-[#ffffff]">
            {Src && (
        <div className="el">
          <img src={Src||null} alt={Title || "feature image"} />
        </div>
      )}
            <div className="el"><h4>{Title}</h4></div>
            <div className="el font-medium text-[#666565] text-[16px]"><p>{Desc}</p></div>
        </div>
    </div>
  )
}

export default FeatureCard