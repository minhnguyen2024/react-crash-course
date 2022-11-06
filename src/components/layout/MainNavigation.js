import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'

function MainNavigation(){
    const favoriteContext = useContext(FavoritesContext)
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites {favoriteContext.totalFavorites})</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation