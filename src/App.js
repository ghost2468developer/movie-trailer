import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Banner />
      <Row title="New Trending" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
