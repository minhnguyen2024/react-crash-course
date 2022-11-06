import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useNavigate } from "react-router-dom";



function NewMeetupsPage(){
    const history = useNavigate()
    function addMeetupHandler(meetupData){
        fetch('https://react-getting-started-c5b27-default-rtdb.firebaseio.com/meetups.json', {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(() =>{
            history('/')
        })
    }
    return (
        <section>
            <h1>Add New Meetups Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupsPage