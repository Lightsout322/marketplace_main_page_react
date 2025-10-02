import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">

            <div className="container">
                <div className="header-box">
                    <Link to={`/`}  className="header-logo">
                        <img className="logo" src="/icons/Vito2.svg" alt="logo" />
                        <span>ВИТО</span>
                        
                    </Link>
              

                    <div className="header-controls">
                        <button className="btn btn-outline">Регистрация и вход</button>
                        <button className="btn btn-primary">Создать объявление</button>
                    </div>

                    <div className="btn-burger">
                        <img src="../icons/burger-menu-svgrepo-com.svg" alt="menu" />
                    </div>

                </div>
            </div>

        </header>
    )
}

