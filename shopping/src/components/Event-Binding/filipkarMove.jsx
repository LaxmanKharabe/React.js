import React, { useEffect, useState } from 'react'

function FilipkarMove() {
    const [mobiles,setMobile] = useState([]);
    const [prev, setPrev] = useState('images/m1.png')

    const MouseHover =(event)=>{
        setPrev(event.target.src);
    }
    useEffect(()=>{
        fetch('mobile.json').then(res=>res.json()).then(imgPath=>setMobile(imgPath))        
    },[])
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-2">
                {
                    mobiles.map(mobiImg=>
                        <div className="col">
                            <img src={mobiImg.img_src} alt="Mobile Image" width="100px" height="100px" onMouseMove={MouseHover} key={mobiImg.img_src}/>    
                        </div>
                    )
                }
            </div>
            <div className="col-10">
                <img src={prev} alt="Images" width="75" height="75"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FilipkarMove;
