
async function populateSkillsSet() {
     const res =  await fetch('./js/skills.json');
     const skills = await res.json()

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

async function populateProjectDeatils(){
    const res =  await fetch('./js/project.json');
    const projects = await res.json()
    projects.forEach(project =>{
        createProjectElement(project)
    })
}

function createProjectElement(project){
    const cardHolder = document.querySelector('.proj-card-holder');
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    const projDiv = document.createElement('div');
    projDiv.classList.add('project-content');

    const h2 = document.createElement('h2');
    h2.classList.add('gradient')
    h2.appendChild(document.createTextNode(project.title))
    projDiv.appendChild(h2);

    const h5 = document.createElement('h5');
    h5.appendChild(document.createTextNode(`~ ${project.platform} ~`))
    projDiv.appendChild(h5);

    const p = document.createElement('p');
    p.innerHTML = project.desc;
    projDiv.appendChild(p);

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('console-btn');

    const appStoreBtn = createBtnWithIcon(['fa-brands', 'fa-app-store-ios'], ' View on AppStore') /**space on icon not possible on js hence array on icon classname */
    const playStoreBtn = createBtnWithIcon(['fa-brands', 'fa-google-play'], ' View on PlayStore')
    const gitHubBtn = createBtnWithIcon(['fa-brands', 'fa-github'], ' View on Github')
    if(project.isBothPlatform){
        btnDiv.appendChild(appStoreBtn);
        btnDiv.appendChild(playStoreBtn);
    }else {

        btnDiv.appendChild(project.isGitHub ? gitHubBtn : appStoreBtn);
    }
    projDiv.appendChild(btnDiv);

    /**Images */
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('project-images');

    [project.images.img1, project.images.img2].forEach((src, index) => {
        const img = document.createElement('img');
        img.classList.add(project.images.imgClassList)
        img.src = src;
        img.alt = `${project.title} screen ${index + 1}`;
        img.loading = 'lazy';
        imgDiv.appendChild(img);
    });

    if(project.isOdd) {
        projectCard.appendChild(projDiv);
        projectCard.appendChild(imgDiv);
    }else {
        projectCard.appendChild(imgDiv);
        projectCard.appendChild(projDiv);
        
    }
    
    
    cardHolder.appendChild(projectCard);
}

function createBtnWithIcon(iconName, btnText){
    const button = document.createElement('button');

    const btnIcon = document.createElement('i')
    btnIcon.classList.add(...iconName)
    button.appendChild(btnIcon);
    button.appendChild(document.createTextNode(btnText))
    return button
}





function init(){
    populateSkillsSet()
    populateProjectDeatils();
}

document.addEventListener('DOMContentLoaded', init)