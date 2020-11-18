import React from 'react';

//import Global Style
import GlobalStyle from './components/GlobalStyle';

// import components
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <About />
    </div>
  );
}

export default App;
