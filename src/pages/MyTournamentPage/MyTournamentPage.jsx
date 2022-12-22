import { useState, useEffect } from 'react';
import TournamentCard from "../../components/TournamentCard/TournamentCard";
import * as tournamentsAPI from '../../utilities/tournaments-api';
import "./MyTournamentPage.css";

export default function MyTournamentPage(tournaments) {
  const [myTournaments, setMyTournaments] = useState([]);

  useEffect(() => {
    async function getMyTournament() {
      const tournaments = await tournamentsAPI.myIndex();
      setMyTournaments(tournaments);
    }
    getMyTournament();
  },[])
  
  return (
    <>
      <h1 className='newtitle'>Tournaments List</h1>
        <div className="container">
        {myTournaments.length ? myTournaments.map((tournament, idx) => 
            <TournamentCard tournament={tournament} key={idx} />
          )
      :
      <h3 className='newtitle'>No Tournaments Yet</h3>
      }
      </div>
    </>
  );
}