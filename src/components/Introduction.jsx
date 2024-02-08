

const Introduction = () => {
    // Education information
    const education = [
        {
            institution: 'Chandigarh University',
            degree: 'Bachelor of Engineering in Computer Science & Engineering',
            graduationYear: '2024',
        },
        {
            institution: 'St. Carmel School',
            degree: 'XII Science, CBSE',
            graduationYear: '2020',
        }
    ];

    // Skills list
    const skills = [
        'JavaScript',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Rest API',
        'GraphQL',
        'AWS',
        'Azure',
        'TypeScript'
    ];

    // Short summary
    const summary = `I am a passionate backend developer with expertise in JavaScript, Node.js, and MongoDB. 
  I have a Bachelor's degree in Computer Science from University Name, graduated in 2020. 
  My goal is to build scalable and efficient backend solutions to solve real-world problems.`;

    return (
        <div className="introduction">
            <h2>Introduction</h2>
            <div className="summary">
                <h3>Summary</h3>
                <p>{summary}</p>
            </div>
            <div className="education">
                <h3>Education</h3>
                <ul>
                    {education.map((edu, index) => (
                        <li key={index}>
                            <strong>{edu.degree}</strong> - {edu.institution}, {edu.graduationYear}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Introduction;
