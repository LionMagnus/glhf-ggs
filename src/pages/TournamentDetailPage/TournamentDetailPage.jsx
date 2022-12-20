import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TournamentDetailPage.css';

export default function TournamentDetailPage({ tournaments }) {
  
  const { id } = useParams();
  console.log(id);
  console.log(tournaments);

  const tournament = tournaments.find((t) => t._id === id);
  
  return(
    <>
      <div>
        <h1>{tournament.title}</h1>
        <p>Description: {tournament.description}</p>
        <p>Date: {tournament.date}</p>
        <p>Location: {tournament.location}</p>
        <p>Organizer: {tournament.user.name}</p>
        <div>
          <h5>Rules:</h5>
          <p>{tournament.rules}</p>
        </div>
        <img src={`${tournament.logoUrl}`} alt="" />
      </div>
    </>
  );
}