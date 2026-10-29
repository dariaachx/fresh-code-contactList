import Contact from "../Contact/Contact"

const ContactList = ({contacts, onEdit, onDelete}) => {
    return (
      <>
        {
            contacts.map((contact) => (
                <Contact 
                    key={contact.id}
                    contact={contact}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))
        }
      </>
    )
  }

export default ContactList