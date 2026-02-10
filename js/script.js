
function populateSkillsSet() {
     const skills =  [
        {
            iconName: ['fa-brands', 'fa-apple'],
            skillName: '-Native iOS-',
             bgImage: '/assets/images/xcode.png',
            skillsList : [
                'Swift', 'UIKit' , 'SwiftUI', 'Combine', 'Async/Await', 'CoreData', 'Unit Testing'

            ]

        },
        {
            iconName: ['fa-brands', 'fa-android'],
            skillName: '-Native Android-',
             bgImage: '/assets/images/android-studio.png',
            skillsList : [
                'Kotlin', 'Java' , 'Jetpack Compose', 'XML Layout', 'Jetpack Libraries', 'Unit Testing'

            ]

        },
        {
            iconName: ['fa-solid', 'fa-laptop-code'],
            skillName: '-Web Development-', 
             bgImage: '/assets/images/xcode.png',
            skillsList : [
                'JavaScript', 'CSS' , 'HTML5', 'React', 'Unit Testing'

            ]

        },
        {
            iconName: ['fa-solid', 'fa-screwdriver-wrench'],
            skillName: '-Tools & Automation-',
             bgImage: '/assets/images/xcode.png',
            skillsList : [
                'Xcode', 'Android Studio' , 'VS Code', 'Git', 'CI/CD(Github Actions & Fastlane)', 'Unit Testing'

            ]

        }
     ]

     skills.forEach ( (item) => {
        createDOMElementsForSkills(item)

     })

    
    

}

function createDOMElementsForSkills(skill){
    const skillGrid = document.querySelector('.skill-grid')
    const skillDiv = document.createElement('div')
    skillDiv.classList.add('skill-card')
    skillDiv.style.setProperty('--card-bg-image', `url(${skill.bgImage})`);

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('skill-img-wrapper');
    const icon = document.createElement('i');
    icon.classList.add(...skill.iconName)
    imgDiv.appendChild(icon)
    skillDiv.appendChild(imgDiv);
        

    const crdTitleH3 = document.createElement('h3');
    crdTitleH3.appendChild(document.createTextNode(skill.skillName));
    skillDiv.appendChild(crdTitleH3);


    const skilsUl = document.createElement('ul');
    skilsUl.classList.add('skill-list');
    skill.skillsList.forEach(item => {
        const skillLi = document.createElement('li');
        skillLi.appendChild(document.createTextNode(item));
        skilsUl.appendChild(skillLi);
    });
    skillDiv.appendChild(skilsUl);
    skillGrid.appendChild(skillDiv);
    
}






function init(){
    populateSkillsSet()
}

document.addEventListener('DOMContentLoaded', init)