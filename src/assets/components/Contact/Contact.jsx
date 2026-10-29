import Button from "../Button/Button"

export default function Contact({contact, onDelete, onEdit}) {
    return (
        <div onDoubleClick={() => onEdit(contact.id)}>
            <span>
                {contact.firstName} {contact.lastName}
            </span>
            <Button 
                name="X"
                type="button"
                onClick={() => onDelete(contact.id)}
            />
        </div>
    )
}