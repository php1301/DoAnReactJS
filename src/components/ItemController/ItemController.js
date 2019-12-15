import React, { Component } from 'react';
import "../ItemController/ItemController.scss";
import setItemType from '../../actions/setItemType';
import { connect } from 'react-redux'
class ItemController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderItem: this.props.renderItem
        }
    }
    componentDidMount() {
        document.querySelector('.button1').onmousemove = (e) => {

            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop
        
            e.target.style.setProperty('--x', `${ x }px`)
            e.target.style.setProperty('--y', `${ y }px`)
            
        }
        document.querySelector('.button2').onmousemove = (e) => {

            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop
        
            e.target.style.setProperty('--x', `${ x }px`)
            e.target.style.setProperty('--y', `${ y }px`)
            
        }
    }
    tab1 = () => {
        this.setState(prevState => ({
            renderItem: true

        }), () => this.props.handleRender(this.state.renderItem))

    }
    tab2 = () => {
        this.setState(prevState => ({
            renderItem: false

        }), () => this.props.handleRender(this.state.renderItem))
    }
    render() {
        return (
            <div className="item-controller-content">
                <button
                    onClick={() => {
                        this.tab1();
                    }}
                    className=" wow fadeInDown button1 "
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.5s",
                        animationName: "fadeInDown"
                    }}>Movies</button>
                <button
                    onClick={() => {
                        this.tab2();
                    }}
                    className=" wow fadeInDown button2 "
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.5s",
                        animationName: "fadeInDown"
                    }}>Showing Nearby</button>
            </div >
        );
    }
}
const mapStateToProps = state => ({
    itemType: state.setItemType.itemType,
})
const mapDispatchToProps = dispatch => ({
    setItemType: type => dispatch(setItemType(type)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemController)