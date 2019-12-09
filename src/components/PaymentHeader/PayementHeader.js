import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Payment from '../Payment/Payment';
export default class PaymentHeader extends Component {

    render() {
        return (
            <Fragment>
                <div class="st_bt_top_header_wrapper float_left">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div class="st_bt_top_back_btn float_left">	<Link to={`/ticket/${this.props.match.params.id}`}><i class="fas fa-long-arrow-alt-left"></i> &nbsp;Back</Link>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="st_bt_top_center_heading float_left">
                                    <h3>Aquaman - English - (2:47)</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Payment />
            </Fragment>
        )
    }
}
