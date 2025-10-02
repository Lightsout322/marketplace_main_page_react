import { useNavigate } from 'react-router-dom';
import './Error.css';

export const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="not-found">
            <img src="/error404/pagenotfound.jpg" alt="404" />
            <button onClick={handleClick} className="btn btn-primary">Вернуться на ВИТО</button>
        </div>
    );
};