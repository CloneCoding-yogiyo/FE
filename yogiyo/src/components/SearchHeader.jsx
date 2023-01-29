import { text } from 'body-parser';
import React, { useState } from 'react';

export default function SearchHeader() {
  const [text, setText] = useState('');
  return (
    <div>
      <header>
        <form>
          ㄴㄴ
          <input
            type='text'
            placeholder='Search...'
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </form>
      </header>
    </div>
  );
}
