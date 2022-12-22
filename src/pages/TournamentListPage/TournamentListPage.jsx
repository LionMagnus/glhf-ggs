import TournamentCard from "../../components/TournamentCard/TournamentCard";
import "./TournamentListPage.css";

export default function TournamentListPage(tournaments) {
  
  return (
    <>
      <h1 className='newtitle'>Tournaments List</h1>
        <div className="container">
        {tournaments.tournaments.length ? tournaments.tournaments.map((tournament, idx) => 
            <TournamentCard tournament={tournament} key={idx} />
          )
      :
      <h3 className='newtitle'>No Tournaments Yet</h3>
      }
      </div>
    </>
  );
}