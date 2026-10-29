import { useEffect, useState } from 'react'
import Button from '../Button/Button'

const CreateContact = ({
    onAddContact,
    editContact,
    isEditing
    }) => {
    // onAddContact - props
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        if(editContact){
            setFirstName(editContact.firstName)
            setLastName(editContact.lastName)
            setEmail(editContact.email)
            setPhone(editContact.phone)
        }
    }, [editContact])

    const handleSubmit = (e) => {
        e.preventDefault()

        onAddContact({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
        })
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="inputItem">
                <input 
                    name='firstName'
                    type="text" 
                    placeholder='FirstName'
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <Button
                 name="X"
                 onClick={() => setFirstName('')}
                 />
            </div>
            
            <div className="inputItem">
                <input 
                    name='lastName'
                    type="text" 
                    placeholder='LastName'
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                <Button
                 name="X"
                 onClick={() => setLastName('')}
                 />
            </div>

            <div className="inputItem">
                <input
                    name='email' 
                    type="email" 
                    placeholder='Email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Button
                 name="X"
                 onClick={() => setEmail('')}
                 />
            </div>

            <div className="inputItem">
                <input 
                    name='tel'
                    type="tel" 
                    placeholder='Phone'
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
                <Button
                 name="X"
                 onClick={() => setPhone('')}
                 />
            </div>

            <Button 
            name="Save"
            type="submit"
            />
        </form>
        </>

    )
  }

export default CreateContact