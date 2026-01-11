import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand'>React Movies</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink to='/genre' className='nav-link'>Genres</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/movie/filter' className='nav-link'>Filter Movies</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/actor' className='nav-link'>Actors</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/movietheater' className='nav-link'>Movie Theaters</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/movie/create' className='nav-link'>Create a Movie</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;