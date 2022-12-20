import TournamentCard from "../../components/TournamentCard/TournamentCard";
import { Link } from 'react-router-dom';
import "./TournamentListPage.css";

export default function TournamentListPage(tournaments) {
  console.log(tournaments);
  return (
    <>
      <h1 className='newtitle'>Tournaments List</h1>
        {tournaments.tournaments.length ? tournaments.tournaments.map((tournament, idx) => 
          <div className="container">
            <Link to={`/tournaments/${tournament._id}`}>
              <TournamentCard tournament={tournament} key={idx} />
            </Link>
          </div>)
      :
      <h3>No Tournaments Yet</h3>
      }
    </>
  );
}