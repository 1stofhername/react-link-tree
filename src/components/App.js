import LinkTree from './LinkTree';
import ProfileImage from './ProfileImage';
import Header from './Header';
import '../App.css';

//Add get in touch button - email
//Add subscribe button to capture emails.
//Setup database
function App() {
  return (
    <div className="App">
      <Header />
      <LinkTree />
      <ProfileImage />
    </div>
  );
}

export default App;
