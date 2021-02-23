import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <h1>My First React Application.</h1>
      </main>
      <footer className="App-footer">copyright by Me {year}</footer>
    </div>
  );
}

export default App;
