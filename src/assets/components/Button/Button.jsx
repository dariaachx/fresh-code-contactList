const Button = ({name, onClick, type = "button"}) => {
    return (
        <button type={type} onClick={onClick}>{name}</button>
    )
}

export default Button