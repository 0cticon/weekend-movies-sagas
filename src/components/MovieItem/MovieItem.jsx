import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({
    movie
}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const displayMovie = (movieToDisplay) => {
        console.log(movieToDisplay);
        // dispatch movie to reducer
        // dispatch({ type: 'SET_MOVIE_DETAILS', payload: movieToDisplay });
        history.push(`/detail/${movieToDisplay.id}`);

        // history.push to detail page

        // alert(`You selected ${movie.title}`);
    }
    return (
        <div onClick={(event) => displayMovie(movie)}>
            <div>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
            </div>
        </div>
    )
}

export default MovieItem;