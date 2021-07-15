import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../index.scss';

const Search = () => {
    const [movieName, setMovieName] = useState('');
    const history = useHistory();

    const onMovieSubmit = () => {
        history.push(`/${movieName}`);
    }

    return (
        <div className="SearchContainer">
            <label>Search Movie</label>
            <input type="text" onChange={e => setMovieName(e.target.value)} value={movieName} />
            <button onClick={onMovieSubmit}>Search</button>
        </div>
    )
}

export default Search;