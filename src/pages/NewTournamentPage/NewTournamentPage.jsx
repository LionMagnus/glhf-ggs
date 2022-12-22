import { useState } from 'react';
import './NewTournamentPage.css';

export default function NewTournamentPage({ addTournament }) {
  const [newTournament, setNewTournament] = useState({});
  
  async function handleAddTournament(evt) {
    evt.preventDefault();
    try {
      addTournament(newTournament);
      setNewTournament({
        title: "",
        description: "",
        location: "",
        date: new Date(),
        rules: "",
        logoUrl: "",
    });
      } catch {
        this.setState({ error: 'Failed to create comment - Try again'})
    }
  }

  return (
    <>
      <h1 className='newtitle'>Add a New Tournament</h1>
      <form onSubmit={handleAddTournament}>
        <label>Title:</label>
        <input
          name="title"
          type="text"
          value={newTournament.title}
          onChange={(evt) => setNewTournament({ ...newTournament, [evt.target.name]: evt.target.value })}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={newTournament.description}
          onChange={(evt) => setNewTournament({ ...newTournament, [evt.target.name]: evt.target.value })}
          required
        />

        <label>Location:</label>
        <input
          name="location"
          type="text"
          value={newTournament.location}
          onChange={(evt) => setNewTournament({ ...newTournament, [evt.target.name]: evt.target.value })}
          required
        />

        <label>Date:</label>
        <input
          name="date"
          type="datetime-local"
          value={newTournament.date}
          onChange={(evt) => setNewTournament({ ...newTournament, [evt.target.name]: evt.target.value })}
          required
        />

        <label>Rules:</label>
        <textarea
          name="rules"
          value={newTournament.rules}
          onChange={(evt) => setNewTournament({ ...newTournament, [evt.target.name]: evt.target.value })}
          required
        />

        <label>logoUrl:</label>
        <input
          name="logoUrl"
          value={newTournament.logoUrl}
          onChange={(evt) => setNewTournament({ ...newTournament, [evt.target.name]: evt.target.value })}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}