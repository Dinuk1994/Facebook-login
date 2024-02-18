
import './App.css';
import LeftPanel from './LeftPanel/LeftPanel';
import SignIn from './RightPanel/RightPanel';


function App() {
  return (
    <div className='container'>
      <div className='leftSide'><LeftPanel/></div>
      <div className='rightSide' ><SignIn/></div>
    </div>
  );
}

export default App;
