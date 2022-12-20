import { Link } from 'react-router-dom';

export default function TournamentCard({ tournament, handleDeleteTournament, user }) {

  return(
    <Link to={`/tournaments/${tournament.title}`} className="tournament-link">
      <div
        style={{
          background: `url(${tournament.logoUrl}) no-repeat center center`,
          WebkitBackgroundSize: "cover"
        }}
        className="item-card"
      >
        <div className="title">
          <h1>{tournament.title}</h1>
          <h4>Date: {tournament.date}</h4>
        </div>
      </div>
    </Link>
  );
}