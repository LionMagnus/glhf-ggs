import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TournamentEditPage.css';

export default function TournamentEditPage({ tournaments, handleUpdateTournament }) {
  const [updateTournament, setUpdateTournament] = useState({});
  const { id } = useParams();
  let updatedTournament = tournaments.find((t) => t._id === id);
  if (!updatedTournament) return null

  function handleChangeTournament(evt) {
    setUpdateTournament({ ...updateTournament, [evt.target.name]: evt.target.value })
  }

  function handleSubmitTournament(evt) {
    evt.preventDefault();
    handleUpdateTournament(updateTournament, id)
  }


  return (
    <>
      <h1 className='newtitle'>Update Tournament</h1>
      <form onSubmit={handleSubmitTournament}>
        <label>Title:</label>
        <input
          name="title"
          type="text"
          value={updateTournament.title}
          onChange={handleChangeTournament}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={updateTournament.description}
          onChange={handleChangeTournament}
          required
        />

        <label>Location:</label>
        <input
          name="location"
          type="text"
          value={updateTournament.location}
          onChange={handleChangeTournament}
          required
        />

        <label>Date:</label>
        <input
          name="date"
          type="datetime-local"
          value={updateTournament.date}
          onChange={handleChangeTournament}
          required
        />

        <label>Rules:</label>
        <textarea
          name="rules"
          value={updateTournament.rules}
          onChange={handleChangeTournament}
          required
        />

        <label>logoUrl:</label>
        <input
          name="logoUrl"
          value={updateTournament.logoUrl}
          onChange={handleChangeTournament}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}