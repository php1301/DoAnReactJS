/* eslint-disable react/prop-types */
import React, {useState} from 'react'
// className={'omb-taken omb-check'} 

export default function ProjectSeatItem({ maGhe, indexGhe, tenGhe, viTriGhe, daDat, setDat, maLoaiGhe }) {
    const [status, setStatus] = useState(indexGhe === -1)
    const handleClick = () =>{
        console.log(indexGhe)
        console.log(status)
        if(indexGhe === -1 && status){
            const data = {
                maGhe,
                maLoaiGhe,
                viTriGhe: maLoaiGhe === 2 ? viTriGhe + 'V' : viTriGhe,
            }
        setDat((prev)=>({
            ...prev, list: [...prev.list, data]
        }))
        setStatus(!status)
        }
        if(indexGhe === -1 && !status){
            const arr = daDat.list.filter(d=> maLoaiGhe===1 ? d.viTriGhe!==viTriGhe : d.viTriGhe!==viTriGhe+'V')
            setDat((prev)=>({
                ...prev, list: arr
            }))
            setStatus(!status)
        }
        console.log(daDat)
    }
    return (
        <li 
        onClick={()=>{handleClick(tenGhe)}}
        className={`${indexGhe === -1 ? (status ? 'omb-available' : 'omb-reserved') : 'omb-taken omb-check'}`} 
        style={{ width: '40.23529411764706px', 
        height: '40.23529411764706px', 
        lineHeight: '40.23529411764706px' }}>
            {`${tenGhe}${maLoaiGhe === 2 ? "-V" : ""}`}
        </li>
    )
}
