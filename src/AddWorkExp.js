export default function AddWorkExp({name, company, duration}){     // input for work experience
    return (
        <div className="add-work-exp">
            <p>{name}</p>
            <p>{company}</p>
            <p>{duration}</p>
        </div>
    )               // Displays in html
}