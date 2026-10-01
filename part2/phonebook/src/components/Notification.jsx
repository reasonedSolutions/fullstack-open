const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontStyle: 'italic',
    padding: 10,
    borderStyle: 'solid',
    borderRadius: 5,
    marginBottom: 20,
}

const Notification = ({message}) => {
    if (!message) {
        return null
    }

    else {
        return (
            <div className="notification" style={notificationStyle}>
                {message}
            </div>
        )
    }
}

export default Notification