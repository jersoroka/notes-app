import { useState } from 'react';
import { Header } from './components/Header'
import { NotesList } from './components/NotesList';
import { AddNote } from './components/AddNote';
import { GlobalProvider } from './context/GlobalState';

function App() {
  const [showAddNote, setShowAddNote] = useState(false);

  return (
    <GlobalProvider>
      <div className="container">
        <Header setShowAddNote={setShowAddNote} showAddNote={showAddNote}/>
        {showAddNote && <AddNote setShowAddNote={setShowAddNote}/>}
        <NotesList showAddNote={showAddNote}/>
      </div>
    </GlobalProvider>
  );
}

export default App;
