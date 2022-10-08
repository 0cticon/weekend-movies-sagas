import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Details() {
    const movie = useSelector(store => store.selectedMovie);
    const { movieId } = useParams();
    const dispatch = useDispatch();

    // useEffect to load details/:id on refresh
    useEffect(() => {
        dispatchEvent({ type: 'SELECTED_MOVIE', payload: movieId })
    }, [movieId])

    return (
        <div>
            <h1>{movieId}</h1>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
        </div>
    )
}







export default Details;