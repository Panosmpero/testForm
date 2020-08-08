import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
        <p>
          <label>Email: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default App;
