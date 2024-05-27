
document.addEventListener("DOMContentLoaded", function () {
    const name = "RAHUL RAJPAL";
    const typingElement = document.getElementById("name");
    let index = 0;

    function type() {
        if (index < name.length) {
            typingElement.innerHTML += name.charAt(index);
            index++;
            setTimeout(type, 150);
        } else {
            setTimeout(() => {
                typingElement.innerHTML = '';
                index = 0;
                type();
            }, 1000);
        }
    }

    type();
});
document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { name: 'HTML', level: '90%' },
        { name: 'CSS', level: '85%' },
        { name: 'JavaScript', level: '80%' },
        { name: 'React', level: '75%' },
        { name: 'Node.js', level: '70%' },
        { name: 'Python', level: '90%' },
        { name: 'Java', level: '85%' },
        { name: 'C++', level: '85%' },
        { name: 'SQL', level: '85%' },
        { name: 'MongoDB', level: '50%' },
    ];

    const skillsContainer = document.querySelector('.skills-container');

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.style.setProperty('--skill-level', skill.level);

        skillItem.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-bar">
                <div class="skill-level"></div>
            </div>
        `;

        skillsContainer.appendChild(skillItem);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        const title = project.querySelector(".project-title");
        title.addEventListener("click", () => {
            const details = project.querySelector(".project-details");
            const isVisible = details.style.display === "block";

            projects.forEach(p => p.querySelector(".project-details").style.display = "none");

            details.style.display = isVisible ? "none" : "block";
        });
    });
});
