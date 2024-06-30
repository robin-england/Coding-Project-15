export default function AddWorkExp({ name, company, duration }) {     // input for work experience
    return (
        <div className="add-work-exp">
            <p><b>{company}:</b></p>
            <ul><li><p>{name}</p>
            <p>{duration}</p></li></ul>
            <br></br>
        </div>
    )               // Displays in html
}