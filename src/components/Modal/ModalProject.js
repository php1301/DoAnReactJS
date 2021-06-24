/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {toast} from 'react-toastify'
import {useHistory, useLocation} from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import "../Modal/Modal.scss"
import cookie from 'js-cookie'
import TicketBoxProject from '../TicketBox/TicketBoxProject';
export default function Example(props) {
    const {maRap, maLichChieu, details, thoiLuong, ngayChieu, gioChieu, giaVe, genres} = props
    const api = cookie.get('api');    let history = useHistory();
    let location = useLocation()
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false); setGheDaDat([])};
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(true);
    const [viTri, setViTri] = useState([])
    const [seatData, setSeatData] = useState([])
    const [gheDaDat, setGheDaDat] = useState([])
    const [thongTinRap, setThongTinRap] = useState({})
    const handleClick = async () => {
        if (cookie.get('id')) {
            try{
                handleShow()
                const dataGheCuaRap = await fetch(`${api || 'http://localhost:3001'}/lay-ghe-cua-rap/${maRap}`)
                const contentGheCuaRap = await dataGheCuaRap.json()
                setSeatData(contentGheCuaRap);
                const requestGheDaDat = {
                    where: {
                        maLichChieu
                    }
                }
                const dataGheDaDat = await fetch(`${api || 'http://localhost:3001'}/ghe-da-dat?filter=${JSON.stringify(requestGheDaDat)}`)
                const contentGheDaDat = await dataGheDaDat.json()
                setGheDaDat(contentGheDaDat);
                const requestRapData = {
                    fields:{
                        tenRap:true,
                        maCumRap: true,
                    }
                }
                const rapData = await fetch(`${api || 'http://localhost:3001'}/raps/${maRap}?filter=${JSON.stringify(requestRapData)}`)
                const rapContent = await rapData.json();
                const requestCumRapData = {
                    fields:{
                        tenCumRap:true,
                    }
                }
                const cumRapData = await fetch(`${api || 'http://localhost:3001'}/cum-raps/${rapContent.maCumRap}?filter=${JSON.stringify(requestCumRapData)}`)
                const cumRapContent = await cumRapData.json();

                const thongTinRapState = {
                    tenRap: rapContent.tenRap,
                    maRap,
                    maCumRap: rapContent.maCumRap,
                    tenCumRap: cumRapContent.tenCumRap
                }
                setThongTinRap(thongTinRapState)
                setLoading(false)
            }
            catch(e){
                console.log(e)
                    toast.error("Có lỗi xảy ra",{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    })
            }
        }
        else
            {
                history.push({ 
                    pathname: '/login', 
                    search:`?redirect=${location.pathname}`
                })
            }
    }
    return (
        <>
            <li><a onClick={handleClick} className="theatre_booking" data-lightbox="{&quot;type&quot;:&quot;ajax&quot;,&quot;action&quot;:&quot;omb_pt_event_ajax_requests&quot;,&quot;sub_action&quot;:&quot;get_hall&quot;,&quot;params&quot;:{&quot;show_movie&quot;:true,&quot;event_id&quot;:1472}}">{gioChieu}</a></li>


            <Modal show={show} onHide={handleClose} animation={false}>
                <TicketBoxProject 
                loading={loading} 
                setLoading={setLoading}
                maLichChieu={maLichChieu} 
                thongTinRap={thongTinRap} 
                giaVe={giaVe} 
                ngayChieu={ngayChieu} 
                gioChieu={gioChieu} 
                thoiLuong={thoiLuong} 
                details={details} 
                seatData={seatData} 
                genres={genres}
                gheDaDat={gheDaDat}/>
            </Modal>
        </>
    );
}

