const Movie = (props) => {
  return (
    <div className="Movie">
      <img src={props.img} alt={props.title} />
      <p>Title: {props.title}</p>
      <p>Year: {props.year}</p>
      <p></p>
    </div>
  );
};
export default Movie;
