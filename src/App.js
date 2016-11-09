import React, { Component } from 'react';

import ToxicMapCanvas from './Map.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Legend from './Legend.js';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <ToxicMapCanvas />
          <Footer />
          <Legend />
      </div>
    );
  }
}

export default App;
