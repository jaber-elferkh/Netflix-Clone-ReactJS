import React from 'react';
import Banner from '../Banner';
import Navbar from '../Navbar';
import requests from '../Requests/Requests';
import Row from '../Row';
import './styles.css';

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />

      <Banner />

      <Row
        title="Latest & Trending Movies "
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaires} />
    </div>
  );
}

export default HomeScreen;
