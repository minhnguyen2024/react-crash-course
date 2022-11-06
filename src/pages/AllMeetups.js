import MeetupList from "../components/meetups/MeetupList"
import { useState, useEffect } from "react"

function AllMeetupsPage(){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedMeetups, setLoadedMeeteups] = useState([])

    useEffect(() =>{
        setIsLoading(true)
        fetch('https://react-getting-started-c5b27-default-rtdb.firebaseio.com/meetups.json')
        .then(res => {
            return res.json() //return json as another promise => another then to get resData
        })
        .then(resData =>{
            const meetups = []
            for(const key in resData){
                const meetup = {
                    id: key,
                    ...resData[key]
                }
                meetups.push(meetup )
            }
            setIsLoading(false)
            setLoadedMeeteups(meetups)
        })
    }, [])
    
    // function componentDidMount(){

    // }
    if (isLoading){
        return (
            <div>
                <p>Is Loading...</p>
            </div>
        )
    }
    return (
        <div>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadedMeetups} />
        </div>

    )
}

export default AllMeetupsPage