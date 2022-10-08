import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({
    movie
}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleMovieClick = () => {
        console.log(`{movies.title}`)
        // dispatch movie to reducer
        dispatch({ type: 'SELECTED_MOVIE', payload: movie });
        history.push('/detail');

        // history.push to detail page

        // alert(`You selected ${movie.title}`);
    }
    return (
        <div onClick={handleMovieClick}>
            <div>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
            </div>
        </div>
    )
}

export default MovieItem;