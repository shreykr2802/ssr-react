import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../index.scss';
import moment from 'moment';

const MovieDetail = () => {

    const params = useParams();
    const { id } = params;
    const [movieData, setMovieData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(res => res.json())
            .then(res => { setMovieData(res); setIsLoading(false) });
    }, []);

    return (
        <div className="MovieDetails">
            {isLoading ? 'Loading.....' : (
                <>
                    <h5>{movieData?.name}</h5>
                    <img src={movieData?.image?.medium} alt={movieData?.name} />
                    <p>{movieData?.language}</p>
                    <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                        {movieData?.genres.map(genre => <p key={genre}>{genre}</p>)}
                    </div>
                    <p>Runtime: {movieData?.runtime}</p>
                    <p>Premiered: {moment(movieData?.premiered).format('DD MMM, YYYY')}</p>
                    <p>Rating: {movieData?.rating?.average ? movieData?.rating?.average + '/' + 10 : 'Not Available'}</p>
                </>
            )}

        </div>
    )
}

export default MovieDetail;