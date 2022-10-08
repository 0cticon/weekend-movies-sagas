import { useDispatch, useSelector } from 'react-redux';

function Details() {
    const movie = useSelector(store => store.selectedMovie);

    return (
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
        </div>
    )
}





//here: useEffect to fetch genres 

export default Details;