export default function AddWorkExp({ name, company, duration }) {     // input for work experience
    return (
        <div className="add-work-exp">
            <ul><li><p><b>{company}:</b></p>
            <p>{name}</p>
            <p>{duration}</p></li></ul>
            <br></br>
        </div>
    )               // Displays in html
}