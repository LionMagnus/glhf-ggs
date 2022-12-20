import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
//import AboutPage from '../AboutPage/AboutPage';
import TournamentListPage from '../TournamentListPage/TournamentListPage';
import TournamentDetailPage from '../TournamentDetailPage/TournamentDetailPage';
import TournamentEditPage from '../TournamentEditPage/TournamentEditPage';
import NewTournamentPage from '../NewTournamentPage/NewTournamentPage';
import NavBar from '../../components/NavBar/NavBar';
import * as tournamentsAPI from '../../utilities/tournaments-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [tournaments, setTournaments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getTournaments() {
      const tournaments = await tournamentsAPI.index();
      setTournaments(tournaments);
    }
    getTournaments();
  }, [])

  async function addTournament(tournament) {
    const newTournament = await tournamentsAPI.create(tournament);
    setTournaments([...tournaments, newTournament]);
  }

  async function handleDeleteTournament(id) {
    await tournamentsAPI.deleteTournament(id);
    const remainingTournaments = tournaments.filter(tournament => tournament._id !== id);
    setTournaments(remainingTournaments);
  }

  async function handleUpdateTournament(tournament, id) {
    const updatedTournament = await tournamentsAPI.edit(id, tournament);
    setTournaments(updatedTournament);
    navigate('/tournaments')
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/tournaments" element={<TournamentListPage tournaments={tournaments} />} />
              <Route path="/tournaments/:id" element={<TournamentDetailPage tournaments={tournaments} handleDeleteTournament={handleDeleteTournament} />} />
              <Route path="/tournaments/edit/:id" element={<TournamentEditPage tournaments={tournaments} handleUpdateTournament={handleUpdateTournament} />} />
              <Route path="/tournaments/new" element={<NewTournamentPage tournaments={tournaments} addTournament={addTournament} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
