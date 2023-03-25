import { Link } from "react-router-dom";

export const CatalogItem = ({
    _id,
    title,
    imageUrl,
}) => {
    return (
        <div className="recipe-card">
        <img src={imageUrl} alt="Recipe Image" />
        <h3 className="recipe-title">{title}</h3>
        <Link to={`/catalog/${_id}`} className="recipe-button">Details</Link>
      </div>
    );
}