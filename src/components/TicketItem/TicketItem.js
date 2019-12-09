import React, { Component } from 'react'
import "../TicketItem/TicketItem.scss"
export default class TicketItem extends Component {
    render() {
        return (
            <div className="st_seatlayout_main_wrapper float_left">
                <div className="container container_seat">
                    <div className="st_seat_lay_heading float_left">
                        <h3>Ariesplex SL Cinemas</h3>
                    </div>
                    <div className="st_seat_full_container">
                        <div className="st_seat_lay_economy_wrapper float_left">
                            <div className="screen">
                                <img src="http://www.webstrot.com/html/moviepro/html/images/content/screen.png" />
                            </div>
                            <div className="st_seat_lay_economy_heading float_left">
                                <h3>Economy</h3>
                            </div>
                            <div className="st_seat_lay_row float_left">
                                <ul>
                                    <li className="st_seat_heading_row">D</li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c1" name="cb" />
                                        <label htmlFor="c1" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c2" name="cb" placeholder={1} />
                                        <label htmlFor="c2" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c3" name="cb" />
                                        <label htmlFor="c3" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00
                <input type="checkbox" id="c4" name="cb" />
                                        <label htmlFor="c4" />
                                    </span></li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c5" name="cb" />
                                        <label htmlFor="c5" />
                                    </li>
                                </ul>
                                <ul className="st_eco_second_row">
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c6" name="cb" />
                                        <label htmlFor="c6" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c7" name="cb" placeholder={1} />
                                        <label htmlFor="c7" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c8" name="cb" />
                                        <label htmlFor="c8" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c9" name="cb" />
                                        <label htmlFor="c9" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c10" name="cb" />
                                        <label htmlFor="c10" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c11" name="cb" />
                                        <label htmlFor="c11" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c12" name="cb" />
                                        <label htmlFor="c12" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c13" name="cb" />
                                        <label htmlFor="c13" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c14" name="cb" />
                                        <label htmlFor="c14" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c15" name="cb" />
                                        <label htmlFor="c15" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c16" name="cb" />
                                        <label htmlFor="c16" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c17" name="cb" />
                                        <label htmlFor="c17" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c18" name="cb" />
                                        <label htmlFor="c18" />
                                    </li>
                                </ul>
                                <ul className="st_eco_second_row">
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c19" name="cb" />
                                        <label htmlFor="c19" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c20" name="cb" placeholder={1} />
                                        <label htmlFor="c20" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c21" name="cb" />
                                        <label htmlFor="c21" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c22" name="cb" />
                                        <label htmlFor="c22" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c23" name="cb" />
                                        <label htmlFor="c23" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="st_seat_lay_economy_wrapper st_seat_lay_economy_wrapperexicutive float_left">
                            <div className="st_seat_lay_economy_heading float_left">
                                <h3>Executive + 3d glasss - rs 190.00</h3>
                            </div>
                            <div className="st_seat_lay_row float_left">
                                <ul>
                                    <li className="st_seat_heading_row">C</li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c24" name="cb" />
                                        <label htmlFor="c24" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c25" name="cb" placeholder={1} />
                                        <label htmlFor="c25" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c26" name="cb" />
                                        <label htmlFor="c26" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c27" name="cb" />
                                        <label htmlFor="c27" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c28" name="cb" />
                                        <label htmlFor="c28" />
                                    </li>
                                </ul>
                                <ul className="st_eco_second_row">
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c29" name="cb" />
                                        <label htmlFor="c29" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c30" name="cb" placeholder={1} />
                                        <label htmlFor="c30" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c31" name="cb" />
                                        <label htmlFor="c31" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c32" name="cb" />
                                        <label htmlFor="c32" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c33" name="cb" />
                                        <label htmlFor="c33" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c34" name="cb" />
                                        <label htmlFor="c34" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c35" name="cb" />
                                        <label htmlFor="c35" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c36" name="cb" />
                                        <label htmlFor="c36" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c37" name="cb" />
                                        <label htmlFor="c37" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c38" name="cb" />
                                        <label htmlFor="c38" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c39" name="cb" />
                                        <label htmlFor="c39" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c40" name="cb" />
                                        <label htmlFor="c40" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c41" name="cb" />
                                        <label htmlFor="c41" />
                                    </li>
                                </ul>
                                <ul className="st_eco_second_row">
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c42" name="cb" />
                                        <label htmlFor="c42" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c43" name="cb" placeholder={1} />
                                        <label htmlFor="c43" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c44" name="cb" />
                                        <label htmlFor="c44" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c45" name="cb" />
                                        <label htmlFor="c45" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c46" name="cb" />
                                        <label htmlFor="c46" />
                                    </li>
                                </ul>
                            </div>
                            <div className="st_seat_lay_row float_left">
                                <ul>
                                    <li className="st_seat_heading_row">B</li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c47" name="cb" />
                                        <label htmlFor="c47" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c48" name="cb" placeholder={1} />
                                        <label htmlFor="c48" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c49" name="cb" />
                                        <label htmlFor="c49" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c50" name="cb" />
                                        <label htmlFor="c50" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c51" name="cb" />
                                        <label htmlFor="c51" />
                                    </li>
                                </ul>
                                <ul className="st_eco_second_row">
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c52" name="cb" />
                                        <label htmlFor="c52" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c53" name="cb" placeholder={1} />
                                        <label htmlFor="c53" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c54" name="cb" />
                                        <label htmlFor="c54" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c55" name="cb" />
                                        <label htmlFor="c55" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c56" name="cb" />
                                        <label htmlFor="c56" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c57" name="cb" />
                                        <label htmlFor="c57" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c58" name="cb" />
                                        <label htmlFor="c58" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c59" name="cb" />
                                        <label htmlFor="c59" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c60" name="cb" />
                                        <label htmlFor="c60" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c61" name="cb" />
                                        <label htmlFor="c61" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c62" name="cb" />
                                        <label htmlFor="c62" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c63" name="cb" />
                                        <label htmlFor="c63" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c64" name="cb" />
                                        <label htmlFor="c64" />
                                    </li>
                                </ul>
                                <ul className="st_eco_second_row">
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c65" name="cb" />
                                        <label htmlFor="c65" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c66" name="cb" placeholder={1} />
                                        <label htmlFor="c66" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c67" name="cb" />
                                        <label htmlFor="c67" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c68" name="cb" />
                                        <label htmlFor="c68" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c69" name="cb" />
                                        <label htmlFor="c69" />
                                    </li>
                                </ul>
                            </div>
                            <div className="st_seat_lay_row float_left">
                                <ul>
                                    <li className="st_seat_heading_row">A</li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c70" name="cb" />
                                        <label htmlFor="c70" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c71" name="cb" placeholder={1} />
                                        <label htmlFor="c71" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c72" name="cb" />
                                        <label htmlFor="c72" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c73" name="cb" />
                                        <label htmlFor="c73" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c74" name="cb" />
                                        <label htmlFor="c74" />
                                    </li>
                                </ul>
                                <ul className="st_eco_second_row">
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c75" name="cb" />
                                        <label htmlFor="c75" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c76" name="cb" placeholder={1} />
                                        <label htmlFor="c76" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c77" name="cb" />
                                        <label htmlFor="c77" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c78" name="cb" />
                                        <label htmlFor="c78" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c79" name="cb" />
                                        <label htmlFor="c79" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c80" name="cb" />
                                        <label htmlFor="c80" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c81" name="cb" />
                                        <label htmlFor="c81" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c82" name="cb" />
                                        <label htmlFor="c82" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c83" name="cb" />
                                        <label htmlFor="c83" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c84" name="cb" />
                                        <label htmlFor="c84" />
                                    </li>
                                    <li className="seat_disable">
                                        <input type="checkbox" id="c85" name="cb" />
                                        <label htmlFor="c85" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c86" name="cb" />
                                        <label htmlFor="c86" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c87" name="cb" />
                                        <label htmlFor="c87" />
                                    </li>
                                </ul>
                                <ul className="st_eco_second_row">
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c88" name="cb" />
                                        <label htmlFor="c88" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c89" name="cb" placeholder={1} />
                                        <label htmlFor="c89" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c90" name="cb" />
                                        <label htmlFor="c90" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c91" name="cb" />
                                        <label htmlFor="c91" />
                                    </li>
                                    <li>	<span>Pay Rs.790.00</span>
                                        <input type="checkbox" id="c92" name="cb" />
                                        <label htmlFor="c92" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
