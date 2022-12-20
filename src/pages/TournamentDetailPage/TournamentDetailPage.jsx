import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './TournamentDetailPage.css';

export default function TournamentDetailPage({ tournaments, handleDeleteTournament }) {
  const [tournament, setTournament] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  console.log(tournaments);

  useEffect(() => {
    function getTournament() {
      const tournament = tournaments.find((t) => t._id === id);
      setTournament(tournament);
    }
    getTournament();
  }, [id, tournament])

  
  
  return(
    <>
      {tournament ? <>
      <div className="flex">
        <div>
        <h1 className='newtitle'>{tournament.title}</h1>
        <p>Description: {tournament.description}</p>
        <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
        <p>Time: {new Date(tournament.date).toLocaleTimeString()}</p>
        <p>Location: {tournament.location}</p>
        <p>Organizer: {tournament.username}</p>
        <h5 className='newtitle'>Rules:</h5>
        <p>{tournament.rules}</p>
        </div>
        <img className='detailimg' src={`${tournament.logoUrl}`} alt="" />
        <Link to='/tournaments'>
          <button className="delete-details-btn" onClick={() => handleDeleteTournament(tournament._id)}>X</button>
        </Link>
        <button className='edit-details-btn' onClick={() => navigate(`/tournaments/edit/${tournament._id}`)}>Edit</button>
      </div>
    </>
    :
    <h3>any</h3>}
    </>
  );
}