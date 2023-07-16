import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            whoOpenModal: 0,
        }
    }

    openModal = () => {
        this.setState(() => ({isModalOpen: true}));   // console.log('btn adding to cart clicked >> open Modal');
    }

    whoOpen = (id) => {
        this.setState(() => ({whoOpenModal: id}));
    }

    closeModal = () => {
        this.setState(() => ({isModalOpen: false}));   // console.log('>> close Modal');
    }


    render() {
        const {isModalOpen, whoOpenModal} = this.state;
        return (
            <>
                <Header />

                <Body
                    isModalOpen={isModalOpen}
                    toOpenModal={this.openModal}
                    whoOpenModal={whoOpenModal}
                    whoOpen={this.whoOpen}
                    toCloseModal={this.closeModal}
                />

                <Footer />
            </>
        );
    }

}

export default App;
