import React, {useState} from 'react'

function Form() {
   
/*     const [guests, setGuests] = useState([])
 */    //hook to allow guests to RSVP with their info
    const [guest, setGuest] = useState({
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
  
  return (
    <form>
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
        />
        <input 
            placeholder='Önskelåt' 
            type="text" 
        />

        <button
            type='submit'
        >
            X
        </button>
        <div>
            {JSON.stringify(guest)}
        </div>
    </form>
  )
}

export default Form