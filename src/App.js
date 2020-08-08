import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="POST" data-netlify="true">
        <ul>
          <li><input type="text" name="name" placeholder="Name"/></li>
          <li><input type="email" name="email" placeholder="email"/></li>
          <li><textarea type="message" name="message" placeholder="Message"/></li>
        </ul>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
