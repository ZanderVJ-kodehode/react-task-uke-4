import React, { useState } from 'react';
import PropTypes from 'prop-types';


// her lager jeg hva emotje skal gjøre
function EmojiList({ searchTerm, emojis }) {
  const [copySuccess, setCopySuccess] = useState('');
  const filteredEmojis = emojis.filter(entry => 
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


// denne hjalp chat-gpt meg med
  const handleEmojiClick = (emoji) => {
    navigator.clipboard.writeText(emoji)
      .then(() => {
        setCopySuccess('Emoji copied!');
        setTimeout(() => setCopySuccess(''), 2000);
      })
      .catch(err => {
        console.error('Failed to copy emoji: ', err);
        setCopySuccess('Failed to copy.');
      });
  };

  // her returnere jeg tingene
  return (
    <div>
      {filteredEmojis.map(emojiEntry => (
        <span 
          key={emojiEntry.emoji} 
          className="emoji" 
          onClick={() => handleEmojiClick(emojiEntry.emoji)}
        >
          {emojiEntry.emoji}
        </span>
      ))}
      {copySuccess && <p style={{ color: 'green' }}>{copySuccess}</p>}
    </div>
  );
}

// denne er også fra chat-gpt
EmojiList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  emojis: PropTypes.arrayOf(
    PropTypes.shape({
      emoji: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default EmojiList;
