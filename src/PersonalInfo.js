// Create a component to display your name, a brief biography, and contact information such as email and LinkedIn.

export default function PersonalInfo({ name, bio, contactInfo }) {
    return (
        <div className="personal-info">
            <h3>{name}</h3>
            <p>{bio}</p>
            <p>{contactInfo}</p>
            <br></br>
        </div>
    )
}