import React, { Component } from 'react'; 
import { v4 as uuidv4 } from 'uuid';
const SeatContainer = () =>{
  const totalRows = 10;
  const totalColumns = 10;
  const seatMap = [
    {
        id: uuidv4(),
        seatRowLabel: "A",
        seatRowIndex: 1,
        columnIndex: 1,
        state: "selected",
        className: "seat selected"
    },
    {
        id: uuidv4(),
        seatRowLabel: "A",
        seatRowIndex: 1,
        columnIndex: 2,
        state: "occupied",
        className: "seat selected"
    },
    {
        id: uuidv4(),
        seatRowLabel: "A",
        seatRowIndex: 1,
        columnIndex: 3,
        state: "occupied",
        className: "seat"
    }
    ,
    {
        id: uuidv4(),
        seatRowLabel: "A",
        seatRowIndex: 1,
        columnIndex: 4,
        state: "occupied",
        className: "seat occupied"
    },
    {
        id: uuidv4(),
        seatRowLabel: "A",
        seatRowIndex: 1,
        columnIndex: 5,
        state: "occupied",
        className: "seat occupied"
    },
    {
      id: uuidv4(),
      seatRowLabel: "A",
      seatRowIndex: 5,
      columnIndex: 10,
      state: "occupied",
      className: "seat"
  },
  {
    id: uuidv4(),
    seatRowLabel: "A",
    seatRowIndex: 6,
    columnIndex: 10,
    state: "occupied",
    className: "seat"
},
{
  id: uuidv4(),
  seatRowLabel: "A",
  seatRowIndex: 7,
  columnIndex: 10,
  state: "occupied",
  className: "seat"
},
{
  id: uuidv4(),
  seatRowLabel: "B",
  seatRowIndex: 2,
  columnIndex: 2,
  state: "occupied",
  className: "seat occupied"
},
{
  id: uuidv4(),
  seatRowLabel: "C",
  seatRowIndex:9,
  columnIndex: 10,
  state: "occupied",
  className: "seat occupied"
},
{
  id: uuidv4(),
  seatRowLabel: "D",
  seatRowIndex:7,
  columnIndex: 7,
  state: "occupied",
  className: "seat occupied"
}
]
    return<div className="container" style={{
      gridTemplateColumns: `repeat(${totalColumns},1fr)`,
      gridTemplateRows: `repeat(${totalRows},1fr)`
  }}>

      {
          seatMap.map((singleSeatData) => {
              return <div className={singleSeatData.className} style={{
                  gridRowStart: `${singleSeatData.seatRowIndex}`,
                  gridColumnStart: `${singleSeatData.columnIndex}`,
                  color: 'black',
                  fontSize: "14px",
                  textAlign: "center",
                  width : "100%",
                  height: "100%"
              }}>
                  {singleSeatData.seatRowIndex}/{singleSeatData.columnIndex}
              </div>
          })
      }

      {/* <div className="row">

          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
      </div>
      <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
      </div>
      <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
      </div>
      <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
      </div>
      <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
      </div>
      <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
      </div> */}
  </div>
}

export default SeatContainer;