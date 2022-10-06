function MovieItem({
    movie
}) {
    const handleMovieClick = () => {
        console.log(`{movies.title}`)
        // dispatch movie to reducer
        // history.push to detail page

        alert(`You selected ${movie.title}`);
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