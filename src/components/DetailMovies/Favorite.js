import React, { Component, Fragment } from 'react'
import firestore from "../../firestore"
import firebase from 'firebase'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
export default class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            added: false,
            id: null,
            heart: false
        }
    }
    componentWillMount() {
        if (localStorage.getItem('uid') !== null) {
            let uid = localStorage.getItem('uid')
            const db = firebase.firestore();
            db.collection("user").doc(uid).collection("favorite").get().then((querySnapshot) => {
                let index = querySnapshot.docs.findIndex((item) => { return item.id === `${this.props.details.id}` })
                console.log(index)
                if (index !== -1) {
                    this.setState({
                        heart: true
                    })
                }
                if (index === -1) {
                    this.setState({
                        heart: false
                    })
                }
            }
            )
        }
        

    }
    handleDeleteFirebase = async () => {
        let uid = localStorage.getItem('uid')
        const db = await firebase.firestore();
        db.collection("user").doc(uid).collection("favorite").doc(`${this.props.details.id}`).delete().then(function () {
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }
    handlePostFirebase = async (data) => {
        let uid = localStorage.getItem('uid')
        let id
        const db = await firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        // console.log(db.collection("user").doc(uid).collection("favorite").doc(`${this.props.details.id}`))
        const docRef = await db.collection("user").doc(uid).collection("favorite").doc(`${this.props.details.id}`).set(data)
        // {
        //     this.setState({
        //         id: await docRef.id
        //     })
        // }

    }
    handleRender = async () => {
        let uid = localStorage.getItem('uid')
        const db = await firebase.firestore();
        db.collection("user").doc(uid).collection("favorite").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
            });
        });
    }
    handleFavorite = async () => {
        if (localStorage.getItem('uid') === null) {
            document.querySelector('.item-details-header-info-container-account-warning').classList.remove('item-details-header-info-container-account-warning--hide');
            setTimeout(() => {
                document.querySelector('.item-details-header-info-container-account-warning').classList.add('item-details-header-info-container-account-warning--hide');
            }, 3000);
            store.addNotification({
                title: "Login required",
                message: "Login to Add to Wishlist",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: false
                }
            })
        }
        const dataToAdd = {
            id: this.props.details.id,
            tenPhim: this.props.details.title,
            ngayChieu: this.props.details.release_date,
            photo: this.props.details.backdrop_path,
            bio: this.props.details.overview,
            doDai: this.props.details.runtime,
            genres: this.props.genres,

        }

        if (localStorage.getItem('uid') !== null) {
            let uid = localStorage.getItem('uid')
            const db = await firebase.firestore();
            db.collection("user").doc(uid).collection("favorite").get().then((querySnapshot) => {
                let index = querySnapshot.docs.findIndex((item) => { return item.id === `${this.props.details.id}` })
                querySnapshot.forEach((doc) => {

                });
                if ( index === -1) {
                    this.handlePostFirebase(dataToAdd)
                    this.setState({
                        added: true,
                        heart: true
                    })
                    store.addNotification({
                        title: "Success",
                        message: "Added to Favorite category",
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: false
                        }
                    })
                }
                if (index !== -1) {
                    this.setState({
                        added: false,
                        heart: false
                    })
                    this.handleDeleteFirebase()
                    store.addNotification({
                        title: "Removed from Favorite",
                        message: "Removed successfully from favorite ",
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: false
                        }
                    })
                }
            });

        }
    }
    render() {

        return (
            <Fragment>
                <ReactNotification />
                <svg onClick={this.handleFavorite}

                    className={this.state.heart === false ? "item-details-header-info-container-content__favorite wow pulse" : "item-details-header-info-container-content__favorite__ok wow pulse"}
                    // className={status}
                    data-wow-delay=".5s"
                    data-wow-duration="2s"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style={{
                        visibility: "visible",
                        animationDuration: "2s",
                        animationDelay: "0.5s",
                        animationName: "pulse"
                    }}
                >
                    <path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z" />
                </svg>
            </Fragment>
        )
    }
}
