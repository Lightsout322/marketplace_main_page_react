import { Link } from 'react-router-dom';
import './Card.css';

export const Card = ({id, title,price,address, date, img}) => {
    return(
        <Link to={`/product/${id}`} className="card">
            <div className="card--img">
                <img src={img} alt="card-img" />
            </div>
            <h5 className="card--title">
                {title}
            </h5>
            <strong className="card--price">{price}</strong>

            <div className="card--description-box">
                <span className="card--description">{address}</span>

                <span className="card--description">{date}</span>
            </div>
        </Link>
    )
}


