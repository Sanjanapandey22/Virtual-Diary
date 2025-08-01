import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/homepage/Home';
import NoteForm from './Components/homepage/NoteForm';
import { NoteProvider } from './contexts/NoteContext';

function App() {
  return (
    <NoteProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/note' element={<NoteForm />} />
      </Routes>
    </NoteProvider>
  );
}



export default App;