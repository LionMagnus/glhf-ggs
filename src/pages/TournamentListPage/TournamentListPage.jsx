import TournamentCard from "../../components/TournamentCard/TournamentCard";
import "./TournamentListPage.css";

export default function TournamentListPage(tournaments) {
  return (
    <div className="container">
      {tournaments.map((tournament) => {
        return <TournamentCard key={tournament.title} tournament={tournament} />;
      })}
    </div>
  );
}