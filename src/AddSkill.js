export default function AddSkill({ name, proficiencyLevel }) {     // input for name of skill and profiency level
    return (
        <div className="add-skill">
            <p><uL><li>{name}: {proficiencyLevel}</li></uL></p>
        </div>
    )               // Displays in html
}