export default function AddSkill({name, proficiencyLevel}){     // input for name of skill and profiency level
    return (
        <div className="add-skill">
            <p>{name}: {proficiencyLevel}</p>
        </div>
    )               // Displays in html
}