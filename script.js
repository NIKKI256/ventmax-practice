const tabs = document.querySelectorAll('.tabs-buttons__item')
const slider = document.querySelectorAll('.tabs-info__slider-item')

const avatar = document.querySelector('#main-avatar')
const namePerson = document.querySelector('#name-pers')
const job = document.querySelector('#job-pers')

const team = document.querySelector('#tab-team')
const company = document.querySelector('#tab-company')
const showroom = document.querySelector('#tab-showroom')
const sertif = document.querySelector('#tab-sertification')

const tab_content = [
    team,company,showroom,sertif
]

tabs[0].classList.add('tabs-buttons__item-choose')
slider[0].classList.add('choose-img')

const names = [
    'Сергей Лысак','Иван Петрович',
    'Михаил Иванович','Никита Бобров',
    'Кирил Михайлович','Александр Котов',
    'Петр Безов','Лев Толстой'
]

const jobs = [
    'Генеральный директор','Зам директора',
    'Дизайнер','Web Developer',
    'Сисадмин','Репортер',
    'Ученный','Исследователь'
]

function showTab(num){
    tab_content.forEach((i,index) => {
        i.classList.add('tabs-hidden')
        if(index == num)i.classList.remove('tabs-hidden')
    })
}

showTab(0)

tabs.forEach((i,index) => {
    i.addEventListener('click',(e) => {
        tabs.forEach(i => {
            i.classList.contains('tabs-buttons__item-choose')
            i.classList.remove('tabs-buttons__item-choose')
        })
        e.target.classList.add('tabs-buttons__item-choose')
        showTab(index)
    })
})

slider.forEach((item,index) => {
    item.addEventListener('click',(e) => {
        slider.forEach(item => {
            item.classList.contains('choose-img')
            item.classList.remove('choose-img')
        })
        e.target.classList.add('choose-img')
        const spec_path = item.src
        avatar.src = spec_path
        
        namePerson.innerHTML = names[index]
        job.innerHTML = jobs[index]
    })
})