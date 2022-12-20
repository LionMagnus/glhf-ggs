import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TournamentDetailPage.css';

export default function TournamentDetailPage({ tournaments }) {
  
  const { tournamentTitle } = useParams();

  const tournament = tournaments.find((t) => t.title === tournamentTitle);
  
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