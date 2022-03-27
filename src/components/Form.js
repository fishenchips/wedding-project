import React, {useState} from 'react'

// Todo: Add an optional second form so one can RSVP for their partner as well
// animations and styling
// add option kommer / inte kommer
// om man inte kommer, extra drop down där man kan skicka en hälsning till brudparet

function Form() {
    
    //hook to allow guests to RSVP with their info
    const [guest, setGuest] = useState({
      id: Math.random() * 1000,
      firstName: "",
      lastName: "",
      food: "",
      song: "",
      message: "",
    })

    const [rsvp, setRsvp] = useState("rsvp")

    //function to set firstName in guest - setGuest to whatever is in the guest object, but overwrite value for firstName
    const handleFirstName = (e) => {
        setGuest({
            ...guest,
            firstName: e.target.value
        }) 
    }

    const handleLastName = (e) => {
        setGuest({
            ...guest,
            lastName: e.target.value
        })
    } 
 
    const handleFood = (e) => {
        setGuest({
            ...guest,
            food: e.target.value
        })
    }

    const handleSong = (e) => {
        setGuest({
            ...guest,
            song: e.target.value
        })
    } 

    const handleRsvp = (e) => {
        setRsvp(e.target.value)
    }

    const handleMessage = (e) => {
        setGuest({
            ...guest,
            message: e.target.value
        })

    }

    //function to add new guest -- For now there is no array, one is only able to add an object
    //will be store somewhere later
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(guest)
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input 
            placeholder='Förnamn' 
            type="text" 
            name='firstName' 
            value={guest.firstName}
            onChange={handleFirstName}
            required={true} 
        />
        <input 
            placeholder='Efternamn' 
            type="text"
            name="lastName"
            value={guest.lastName}
            onChange={handleLastName}
            required={true}  
        />
        <input 
            placeholder='Ev. matpreferenser/allergier' 
            type="text"
            name='food'
            value={guest.food}
            onChange={handleFood}
        />
        <input 
            placeholder='Önskelåt (låt, artist) ' 
            type="text" 
            name='song'
            value={guest.song}
            onChange={handleSong}
        />
        <select onChange={handleRsvp}> 
            <option value="rsvp">
                OSA
            </option>
            <option value="attending">
                Jag kommer
            </option>
            <option value="notAttending">
                Jag kommer inte
            </option>
        </select>

        {
            //if statement if person isnt attending 
            // need to target correctly
            console.log("hello from return", rsvp)
        }
        {
            (rsvp ==="notAttending")
                ? 
                    <input 
                    placeholder='Skicka en hälsning till brudparet' 
                    type="text" 
                    name='notAttending'
                    value={guest.message}
                    onChange={handleMessage}
                    />
                : ""
        }
        
        <button
            type='submit'
        >
            X
        </button>
        <div>
            {JSON.stringify(guest)}
            {/* {
                guestList.map( newGuest => (
                    <p key={newGuest.id}> {newGuest} </p>
                ))
            } */}
        </div>
    </form>
  )
}

export default Form