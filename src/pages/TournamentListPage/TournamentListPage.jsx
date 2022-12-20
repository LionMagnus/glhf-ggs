import TournamentCard from "../../components/TournamentCard/TournamentCard";
import "./TournamentListPage.css";

export default function TournamentListPage(tournaments) {
  return (
    <>
      <h1 className='newtitle'>Tournaments List</h1>
      <div className="container">
        {tournaments.tournaments.map((tournament, idx) => {
          return <TournamentCard tournament={tournament} key={idx} />;
        })}
      </div>
    </>
  );
}