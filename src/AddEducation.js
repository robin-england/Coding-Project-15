export default function AddEducation({ institution, degree, years }) {      // input for education
    return (
        <div className="education">
            <ul><li><p><b>{institution}</b></p>
            <p>{degree}</p>
            <p>{years}</p></li></ul>
            <br></br>
        </div>
    )               // Displays in html
}