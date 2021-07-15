import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../../index.scss';
import moment from 'moment';

const MovieList = () => {

    const params = useParams();
    const { name } = params;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
            .then(res => res.json())
            .then(res => setMovies(res));
    }, [name]);

    const history = useHistory();

    const onMovieClick = (id) => {
        history.push(`/details/${id}`);
    }

    return (
        <div className="MovieList" >
            {movies.map(movie => (
                <div className="MoviesCard" onClick={() => onMovieClick(movie.show.id)} key={movie.show.id}>
                    <h5>{movie.show.name}</h5>
                    <img src={movie.show?.image?.medium} alt={movie.show.name} className="MoviePoster" />
                    <p>{movie.show.language}</p>
                    <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                        {movie.show.genres.map(genre => <p key={genre}>{genre}</p>)}
                    </div>
                    <p>Runtime: {movie.show.runtime}</p>
                    <p>Premiered: {moment(movie.show.premiered).format('DD MMM, YYYY')}</p>
                    <p>Rating: {movie.show.rating?.average ? movie.show.rating?.average + '/' + 10 : 'Not Available'}</p>
                </div>
            ))}
        </div>
    );
}

export default MovieList;