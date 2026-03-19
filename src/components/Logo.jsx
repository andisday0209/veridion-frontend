function Logo() {
    return (
        <img alt="Veridion logo"
             src={`${import.meta.env.BASE_URL}Logo.png`}
             style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'cover' }}
        />
    )
}

export default Logo