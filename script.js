const portfolioButton = document.querySelector('.portfolio-button');
const portfolioPage = document.querySelector('.portfolio__page');
const skillsButton = document.querySelector('.skills-button');
const skillsPage = document.querySelector('.skills__page');
const changeTheme = document.querySelector('.theme__header');
const wrapper = document.querySelector('.wrapper');


portfolioButton.addEventListener('click', ()=>{
    skillsButton.classList.remove('active');
    portfolioButton.classList.add('active');
    skillsPage.classList.remove('show');
    portfolioPage.classList.add('show');
});

skillsButton.addEventListener('click', ()=>{
    skillsButton.classList.add('active');
    portfolioButton.classList.remove('active');
    skillsPage.classList.add('show');
    portfolioPage.classList.remove('show');
});

changeTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
})

