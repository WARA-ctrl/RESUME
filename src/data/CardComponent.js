const CardComponent = ({ name, image, url }) => {
  return (
    <a href={url} target="_blank">
      <div className="card">
        <div className="card-img">
          <img src={image} alt={name} />
        </div>
        <h2>{name}</h2>
      </div>
    </a>
  );
};

export default CardComponent;
