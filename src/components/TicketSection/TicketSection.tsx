import Legends from "../Legends/Legends"
import MovieScreen from "../MovieScreen/MovieScreen"
import MoviesList from "../MoviesList/MoviesList"
import SeatList from "../SeatContainer/SeatContainer"
import TicketInfo from "../TicketInfo/TicketInfo"
import React, { Component } from 'react';
import SeatContainer from "../SeatContainer/SeatContainer"

const TicketSection = () => {
    return (<>
        <MoviesList></MoviesList>
        <Legends></Legends>
        <MovieScreen></MovieScreen>
        <SeatContainer></SeatContainer>
        <TicketInfo></TicketInfo> 
    </>)
}
export default TicketSection