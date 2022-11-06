import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'
function FavoritesPage(){
    const favoriteContext = useContext(FavoritesContext)

    let content
    if(favoriteContext.totalFavorites === 0){
        content = <p>You have no favorites yet</p>
    } else{
        content = <MeetupList meetups={favoriteContext.favorites} />
    }
    return (
        <section>
            <h1>My Favorties</h1>
            {content}
        </section>
    )
}

export default FavoritesPage