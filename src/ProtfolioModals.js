import React from 'react';
import Modal from './Modal';
import {
    Cabin,
    Cake,
    Circus,
    Game,
    Safe,
    Submarine
} from './assets/img/portfolio';

function ProtfolioModals() {
  return (
    <div>
        <Modal id={"portfolioModal1"} text={"Log Cabin"} image={Cabin}/>
        <Modal id={"portfolioModal2"} text={"Tasty Cake"} image={Cake}/>
        <Modal id={"portfolioModal3"} text={"Circus Tent"} image={Circus}/>
        <Modal id={"portfolioModal4"} text={"Controller"} image={Game}/>
        <Modal id={"portfolioModal5"} text={"Locked Safe"} image={Safe}/>
        <Modal id={"portfolioModal6"} text={"Submarine"} image={Submarine}/>
    </div>
  )
}

export default ProtfolioModals