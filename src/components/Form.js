import React, {useState} from 'react'

function Form() {
    
    const [guestList, setGuestList] = useState([])
    //hook to allow guests to RSVP with their info
    const [guest, setGuest] = useState({
      id: "",
      firstName: "",
      lastName: "",
      food: "",
      song: "",
    })

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

    //doesnt work because changing controlled input to be uncontrolled, prolly need to remove one of the hooks
    const addGuest = (newGuest) => {
        setGuestList([
            ...guestList,
            newGuest
        ])
    }
    //function to add new guest to the guests array
    // Doesnt work atm, because changing controlled to uncontrolled.
    const handleSubmit = (e) => {
        e.preventDefault();

        const newGuest = {
            id: Math.random() * 100,
            firstName: guest.firstName,
            lastName: guest.lastName,
            food: guest.food,
            song: guest.song,
        }

        addGuest(newGuest)
        console.log(guestList)

        setGuest("")
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input 
            placeholder='Förnamn' 
            type="text" 
            name='firstName' 
            value={guest.firstName}
            onChange={handleFirstName} 
        />
        <input 
            placeholder='Efternamn' 
            type="text"
            name="lastName"
            value={guest.lastName}
            onChange={handleLastName}  
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