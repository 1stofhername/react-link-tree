import LinkTree from './LinkTree';
import ProfileImage from './ProfileImage';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>A Tiny Life On Wheels</h2>
      </div>
      <LinkTree />
      <ProfileImage />
    </div>
  );
}

export default App;
