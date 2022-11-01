import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import TopBuyer from './components/TopBuyer/TopBuyer';
import Bid from './components/Bids/Bid';
import Collection from './components/Collection/Collection';
import Featured from './components/Featured/Featured';
import Explore from './components/Explore/Explore';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <TopBuyer />
        <Bid />
        <Collection />
        <Featured />
        <Explore />
    </div>
  );
}

export default App;
