// her importe jeg hva som trengs og for å få det til og vises på skjermen. Også her jeg sette alt sammen.

import { useState } from 'react'
import './App.css'

import SearchBar from '../public/SearchBar';
import EmojiList from '../public/EmojiList ';

import { emojiWithNames } from '../public/emojis';



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className='App'>
      <h1>Emoji Search App</h1>
      <SearchBar setSearchTerm={setSearchTerm} setHasSearched={setHasSearched} />
      {hasSearched && <EmojiList searchTerm={searchTerm} emojis={emojiWithNames} />}
    </div>
  );
}

export default App;


