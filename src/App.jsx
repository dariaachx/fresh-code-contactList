import './App.css'
import { nanoid } from 'nanoid'
import ContactList from './assets/components/ContactList/ContactList'
import CreateContact from './assets/components/CreateContact/CreateContact'
import Button from './assets/components/Button/Button'
import { useState } from 'react'


export default function App() {

  const [contacts, setContacts] = useState([])
  const [isEditing, setEditing] = useState(false)
  const [editId, setEditId] = useState('')

  const handleAddContact = (formData) => {
    const newContact = {
      id: nanoid(),
      ...formData //копирует поля firstName, lastName, email и phone в новый объект.
    }
    setContacts((previous) => [...previous, newContact]) //добавляет новый контакт в конец массива, сохраняя предыдущие контакты.
  }

  const handleEdit = (id) => {
    setEditing(true)
    setEditId(id)
  }

  const editContact = contacts.find(
    (contact) => contact.id === editId
  )

  return (
    <>
    <h1>Contact list</h1>

     <ContactList 
      contacts={contacts}
      onEdit={handleEdit}
      />
     <CreateContact 
      onAddContact={handleAddContact}
      editContact={editContact}
      isEditing={isEditing}
      />
     <Button 
      name="New" 
      onClick={() => console.log('New')}
     />
     <Button 
      name="Delete" 
      onClick={() => console.log('Del')}
     />
    </>
  )
}


