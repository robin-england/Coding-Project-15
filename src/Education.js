// Show your educational background including the name of the institution, degree obtained, and the years attended.

import AddEducation from "./AddEducation.js"

export default function EducationList({ education }) {
    return (
        <div className="education">
            <h3>Education</h3>
            {education.map(({ institution, degree, years }) => (
                <AddEducation
                    institution={institution}
                    degree={degree}
                    years={years}
                />
            ))}
        </div>
    );
}