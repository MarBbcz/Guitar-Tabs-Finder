import React, {Component} from 'react';
import './App.css';
import SongsList from './components/SongsList';
import Footer from './components/Footer';
import $ from 'jquery';



class App extends Component {

  state = {
    songs: [],
    type: "CHORDS"
  }

 handleTabsSearch = (e) => 
{
    e.preventDefault();
    const value = this.refs.search.value;
    fetch(`https://cors-anywhere.herokuapp.com/https://www.songsterr.com/a/ra/songs.json?pattern=${value}`)
    .then(res => {
        if (res.ok)
            return res;
        throw Error(res.status);
    })
    .then(res => res.json())
    .then (data => this.setState({
                songs: data
            }))
    .catch (err => console.log(err))
  }

  handleBtnClick = () => 
  {
    $(this.refs['search-desc']).slideToggle(100);
  }

  handleChoice = (e) =>
  {
    const value = e.target.textContent;
    $('.search-large').text(value);
    $(this.refs['search-desc']).slideToggle(100);
    this.setState({type: e.target.dataset.type});
  }
  
  render() {
      return (
            <div className="App">
              <header className="App-header">  
                <h2 className="hero-title">
                  GUITAR <span className="decorative-span">TABS</span> FINDER
                </h2>
                <form id="main-form" onSubmit={this.handleTabsSearch}>
                  <input type="text" id="search-bar" placeholder="Search" ref="search"/>
                  <button type="button" className="main-btn" onClick={this.handleBtnClick}><p className="search-small">CHOOSE TAB</p><p className="search-large">Chords</p></button>
                  <ul className="search-desc" ref="search-desc">
                    <li data-type="CHORDS" onClick={this.handleChoice}>Chords</li>
                    <li data-type="TEXT_BASS_TAB" onClick={this.handleChoice}>Bass</li>
                    <li data-type="TEXT_GUITAR_TAB" onClick={this.handleChoice}>Guitar</li>
                    <li data-type="PLAYER" onClick={this.handleChoice}>Player</li>
                  </ul>
                  <button type="button" className="submit-btn" onClick={this.handleTabsSearch}>Search</button>
                </form>
                <div className="arrow-up"></div>
                <div className="diamond-div"><div className="diamond"></div></div>
              </header>
              <SongsList songs={this.state.songs} type={this.state.type}/>
              <Footer/>
            </div>
          );
  }

}

export default App;
