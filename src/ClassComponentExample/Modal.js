import React, { Component } from 'react'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isopenModal: false
        }
    }
    openModal =()=>{
        this.setState(prevState =>({
        isopenModal:!prevState.isopenModal

        }))
    }
    // openModal = () => {
    //     this.setState(prevState => {
    //         alert(`Previous state: ${JSON.stringify(prevState)}`);
    //         return {
    //             isOpenModal: !prevState.isOpenModal
    //         };
    //     });
    // };
  render() {

    const {isopenModal} = this.state

    return (
        <>
           <div>Modal</div>
           <button onClick={this.openModal}>Open modal</button>
           {isopenModal && (
          <div style={modalStyles}>
            <div style={modalContentStyles}>
              <h2>Modal Title</h2>
              <p>This is a modal content.</p>
              <button onClick={this.openModal}>Close Modal</button>
            </div>
          </div>
        )}
        </>

    )
  }
}

const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const modalContentStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  };
// this is example of a modal toggle functionality
