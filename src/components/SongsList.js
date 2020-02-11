import React from 'react';
import music from '../images/music-record.png';
import $ from 'jquery';

function SongsList(props) {
    const songs = props.songs;
    const type = props.type;
    const songList = songs.filter(song => {
        if (song.tabTypes.includes(type))
            return true;
        else
        return false;
    }).map((song, index) => {
        var tabTypes = song.tabTypes.map(function(val) {
            return <a href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${song.title}&a=${song.artist.name}&track=${val}`} target="_blank" rel="noopener noreferrer" alt="Link to tabulature" className="tab-type-link">{val} </a>});
        return (
                    <li key={`song-${song.id}`} className="single-song">
                        <img src={`${music}`} alt="" className="song-img"></img>
                        <div>
                            <p className="song-title"><b>#{index + 1} {song.title}</b></p>
                            <p className="song-artist"> by {song.artist.name}</p>
                            <p>Tab types: <span className="tabTypes">{tabTypes}</span></p> 
                        </div>
                     </li>
                                )
    });

     if (songList.length !== 0)
     {
        $('.search-results').fadeIn();
     }
    else
        $('.search-results').hide();

    return (
        <div className ="search-results">
            <ul className="song-list"> {songList}</ul>
        </div> 
    );
  }

  export default SongsList;