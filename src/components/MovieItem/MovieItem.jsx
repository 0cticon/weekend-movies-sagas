function MovieItem({
    setSelectedMovie
}) {
    const handleMovieClick = () => {
        setSelectedMovie(movies.description);
        console.log(`{movies.id}`)
        alert(`You selected ${movies.title}`);
    }
    return(
        <div onClick={handleMovieClick}>{movies.id}</div>
    )
}

export default MovieItem;