import './TournamentCard.css';
import { Link } from 'react-router-dom';

export default function TournamentCard({ tournament, user }) {

  return(
    <>
      <Link to={`/tournaments/${tournament._id}`} className="tournament-link">
        <div
          style={{
            background: `url(${tournament.logoUrl}) no-repeat center center`,
            WebkitBackgroundSize: "cover"
          }}
          className="item-card"
        >
          <div className="title">
            <h1>{tournament.title}</h1>
            <h4>Date: {new Date(tournament.date).toLocaleDateString()}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}