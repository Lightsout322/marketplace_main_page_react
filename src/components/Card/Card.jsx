import './Card.css';

export const Card = ({title,price,address, date, img}) => {
    return(
        <a href="./product.html" className="card">
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
        </a>
    )
}


