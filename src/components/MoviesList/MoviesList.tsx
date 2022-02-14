import React, { Component } from 'react';
const MoviesList = () => {

    return<>
        <div className="movie-container">
      <label>Pick a movie:</label>
      <select id="movie">
        <option value="10">Pushpa ($10)</option>
        <option value="12">RRR ($12)</option>
        <option value="8">Rade Shyam ($8)</option>
        <option value="9">KGF2 ($9)</option>
      </select>
    </div> 

    </>
}

export default MoviesList;