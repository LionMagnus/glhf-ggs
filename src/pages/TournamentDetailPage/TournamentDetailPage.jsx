import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './TournamentDetailPage.css';
import * as tournamentsAPI from '../../utilities/tournaments-api';
import { create } from '../../utilities/comments-api';
import CommentCard from '../../components/CommentCard/CommentCard';

export default function TournamentDetailPage({ tournaments, handleDeleteTournament, setTournaments, user }) {
  const { id } = useParams();
  const tournament = tournaments.find((t) => t._id === id);

  const [comment, setComment] = useState({content:''});
  const [buttonToggle, setButtonToggle] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newComment = await create(comment, tournament._id);
    const updatedTournament = tournaments.map((t) => t._id === newComment._id ? newComment : t);
    setTournaments(updatedTournament);
  };

  function handleChange(evt) {
    const newComment = {...comment, [evt.target.name]: evt.target.value};
    setComment(newComment);
  };

  async function enterlist() {
    const entered = await tournamentsAPI.toggleAdd(tournament._id);
    const updatedTournament=tournaments.map((t) => t._id === entered._id ? entered: t);
    setTournaments(updatedTournament);
    setButtonToggle(!buttonToggle);
  };
  
  return(
    <>
      {tournament && <>
      <div className="flex">
        <div>
        <h1 className='newtitle'>{tournament.title}</h1>
        <p>Description: {tournament.description}</p>
        <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
        <p>Time: {new Date(tournament.date).toLocaleTimeString()}</p>
        <p>Location: {tournament.location}</p>
        <p>Organizer: {tournament.username}</p>
        <p>Rules:</p>
        <p>{tournament.rules}</p>
        <p>Participants: {tournament.usersArray.length}</p>
        {user._id === tournament.user ?
          <div className='detailbtn'>
          <Link to='/tournaments'>
            <button className="delete-details-btn" onClick={() => handleDeleteTournament(tournament._id)}>Delete</button>
          </Link>
          <button className='edit-details-btn' onClick={() => navigate(`/tournaments/edit/${tournament._id}`)}>Edit</button>
          </div>
        : <div></div>
        }
        <button className='EnterBtn' onClick={enterlist}>{tournament.usersArray.includes(user._id) ? 'Leave': 'Enter'}</button>
        </div>
        <img className='detailimg' src={`${tournament.logoUrl}`} alt="" />
      </div>
      <h1 className='newtitle'>Comments</h1>
      <div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>Comments:</label>
            <input type="text" name="content" placeholder='Add Comment' value={comment.content} onChange={handleChange} required />
            <button type="submit">Add Comment</button>
          </form>
        </div>
      </div>
      {tournament.comments.length === 0 ?
        <span className='newtitle'>No Comments Yet!</span>
        :
        <div>
          {tournament.comments.map((comment, idx) => (
          <div className='comments' key={idx}>
            <CommentCard comment={comment} key={idx}/>
          </div>
        ))}
        </div>
      }
    </>
    }
    </>
  );
}