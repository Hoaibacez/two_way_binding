function Label(Props) {
    return (
            <label htmlFor={Props.id}>{Props.children}</label>
    )
}

export default Label