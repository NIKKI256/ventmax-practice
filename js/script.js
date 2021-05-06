const tabs = document.querySelectorAll('.tabs-buttons__item')
const slider = document.querySelectorAll('.tabs-info__slider-item')

const avatar = document.querySelector('#main-avatar')
const namePerson = document.querySelector('#name-pers')
const job = document.querySelector('#job-pers')

const team = document.querySelector('#tab-team')
const company = document.querySelector('#tab-company')
const showroom = document.querySelector('#tab-showroom')
const sertif = document.querySelector('#tab-sertification')

const backSlide = document.querySelector('#back-arr')
const nextSlide = document.querySelector('#next-arr')

const namePersonMob = document.querySelector('#name-pers-mob')
const jobPersonMob = document.querySelector('#job-person-mob')

var specCounter = 0

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

const images = [
    './style/img/MainAvatar.png',
    './style/img/Ellipse3.png',
    './style/img/Ellipse4.png',
    './style/img/Ellipse5.png',
    './style/img/Ellipse6.png',
    './style/img/Ellipse7.png',
    './style/img/Ellipse8.png',
    './style/img/Ellipse9.png',
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

nextSlide.addEventListener('click',() => {
    const sliderImg = document.querySelector('#slider-img')
    specCounter++
    if(specCounter >= images.length){
        specCounter=0
    }
    sliderImg.src = images[specCounter]
    namePersonMob.innerHTML = names[specCounter]
    jobPersonMob.innerHTML = jobs[specCounter]
})

backSlide.addEventListener('click',() => {
    const sliderImg = document.querySelector('#slider-img')
    specCounter--
    if(specCounter < 0){
        specCounter = images.length - 1
    }
    sliderImg.src = images[specCounter]
    namePersonMob.innerHTML = names[specCounter]
    jobPersonMob.innerHTML = jobs[specCounter]
})

//companies slider

const backCompany = document.querySelector('#back-arr-companies')
const nextCompany = document.querySelector('#next-arr-companies')
var companyCounter = 0

const imagesCompanies = [
    './style/img/Objects.png','./style/img/Houses.png',
    './style/img/Flats.png','./style/img/Basses.png',
    './style/img/PromObjects.png'
]

const infoCompany = [
    'Всего объектов','Частных домов','Квартир',
    'Бассейнов','Пром. объектов'
]

nextCompany.addEventListener('click',() => {
    const compSlider = document.querySelector('#companies-slider')
    const info = document.querySelector('#companies-slider-info')
    companyCounter++
    if(companyCounter >= imagesCompanies.length){
        companyCounter = 0
    }
    compSlider.src = imagesCompanies[companyCounter]
    info.innerHTML = infoCompany[companyCounter]
})

backCompany.addEventListener('click',() => {
    const compSlider = document.querySelector('#companies-slider')
    const info = document.querySelector('#companies-slider-info')
    companyCounter--
    if(companyCounter < 0){
        companyCounter = imagesCompanies.length - 1
    }
    compSlider.src = imagesCompanies[companyCounter]
    info.innerHTML = infoCompany[companyCounter]
})

//showroom slider

const backShow = document.querySelector('#back-arr-showroom')
const nextShow = document.querySelector('#next-arr-showroom')
var companyShow = 0

const imagesShow = [
    './style/img/ShowRoom1.png','./style/img/ShowRoom2.png','./style/img/ShowRoom3.png'
]

nextShow.addEventListener('click',()=>{
    const image = document.querySelector('#showroom-slider')
    companyShow++
    if(companyShow >= imagesShow.length){
        companyShow = 0
    }
    image.src = imagesShow[companyShow]
})

backShow.addEventListener('click',()=>{
    const image = document.querySelector('#showroom-slider')
    companyShow--
    if(companyShow < 0){
        companyShow = imagesShow.length - 1
    }
    image.src = imagesShow[companyShow]
})

//sertif clider 

const backSertif = document.querySelector('#back-arr-sertif')
const nextSertif = document.querySelector('#next-arr-sertif')
var companySertif = 0

const imagesSertif = [
    './style/img/Sertif1.png','./style/img/Sertif2.png',
    './style/img/Sertif3.png','./style/img/Sertif4.png',
    './style/img/Sertif5.png','./style/img/Sertif6.png'
]

const infoSertif = [
    'Лицензия МЧС','Международный диплом Enervent',
    'Монтаж и наладка VRV Daikin','Свидетельство СРО',
    'Сертификат Trox','Сертификат Uponor'
]

backSertif.addEventListener('click', () => {
    const image = document.querySelector('#sertif-slider')
    const info = document.querySelector('#info-sertif')
    companySertif--
    if(companySertif < 0){
        companySertif = imagesSertif.length - 1
    }
    image.src = imagesSertif[companySertif]
    info.innerHTML = infoSertif[companySertif]
})

nextSertif.addEventListener('click', () => {
    const image = document.querySelector('#sertif-slider')
    const info = document.querySelector('#info-sertif')
    companySertif++
    if(companySertif >= imagesSertif.length){
        companySertif = 0
    }
    image.src = imagesSertif[companySertif]
    info.innerHTML = infoSertif[companySertif]
})

//Projects slider

const backProject = document.querySelector('#backProject')
const nextProject = document.querySelector('#nextProject')
var projectCount = 0

const projectsInfo = [
    {
        'titleh2' : 'ЛЕОНОВО',
        'titleh3' : 'Жилой дом — 2500 м2',
        'descriptp' : `4 приточно-вытяжных установки Enervent
        с роторным рекуператором <br><br>
       Вентиляция бассейна <br><br>
       Мультизональная система кондиционирования Daikin с канальными внутренними блоками`
    },
    {
        'titleh2' : 'ВЫМПЕЛ',
        'titleh3' : 'Жилой дом — 1800 м2',
        'descriptp' : `4 приточно-вытяжных установки Enervent с роторным рекуператором 
        <br><br>
        Вентиляция бассейна
        <br><br>
        Мультизональная система ондиционирования
        Daikin с канальными внутренними блоками<br><br>
        Умный дом`
    },
    {
        'titleh2' : 'ПЕСТОВО',
        'titleh3' : 'Жилой дом — 600 м2',
        'descriptp' : `2 приточно вытяжных установки Enervent
        <br><br>
        Мультизональна система кондиционирования
        Mitsubishi Electric`
    },
    {
        'titleh2' : 'НАРОФОМИНСК',
        'titleh3' : 'Жилой дом — 350 м2',
        'descriptp' : `Энергоэффективный дом класса А+
        <br><br>
        Приточно вытяжная установка Enervent
        c геотермальным охлаждением`
    }
]

backProject.addEventListener('click', () => {
    const h2 = document.querySelector('#projectH2')
    const h3 = document.querySelector('#projectH3')
    const p = document.querySelector('#projectP')
    projectCount--
    if(projectCount < 0){
        projectCount = projectsInfo.length - 1
    }
    h2.innerHTML = projectsInfo[projectCount].titleh2
    h3.innerHTML = projectsInfo[projectCount].titleh3
    p.innerHTML = projectsInfo[projectCount].descriptp
})

nextProject.addEventListener('click', () => {
    const h2 = document.querySelector('#projectH2')
    const h3 = document.querySelector('#projectH3')
    const p = document.querySelector('#projectP')
    projectCount++
    if(projectCount >= projectsInfo.length){
        projectCount = 0
    }
    h2.innerHTML = projectsInfo[projectCount].titleh2
    h3.innerHTML = projectsInfo[projectCount].titleh3
    p.innerHTML = projectsInfo[projectCount].descriptp
})

//Brands slider

const backBrand = document.querySelector('#backBrand')
const nextBrand = document.querySelector('#nextBrand')
var countBrand = 0

const imagesBrand = [
    '/style/img/Brand1.png','/style/img/Brand2.png',
    '/style/img/Brand3.png','/style/img/Brand4.png',
    '/style/img/Brand5.png','/style/img/Brand6.png',
]

backBrand.addEventListener('click', () => {
    const image = document.querySelector('#imageBrand')
    countBrand-- 
    if(countBrand < 0){
        countBrand = imagesBrand.length - 1
    }
    image.src = imagesBrand[countBrand]
})

nextBrand.addEventListener('click', () => {
    const image = document.querySelector('#imageBrand')
    countBrand++ 
    if(countBrand >= imagesBrand.length - 1){
        countBrand = 0
    }
    image.src = imagesBrand[countBrand]
})

//Ventilations slider

const backVent = document.querySelector('#backVent')
const nextVent= document.querySelector('#nextVent')

var countVent = 0

const arrayH2Vents = [
    'Системы вентиляции в многоквартирных домах',
    'Системы для домов и коттеджей',
    'Системы для бассейнов коммерческого и частного использования',
    'Особенности проекта системы вентиляции',
    'Особенности установки вентиляционных систем в коттеджных поселках',
    'Удаленное обслуживание системы'
]

const arrayPVents = [
    `Энергоэффективные
    вентиляционные решения
    для помещений небольшой площади в агрессивной среде`,
    `Энергоэффективные
    вентиляционные решения
    для помещений с большой площадью`,
    `Энергоэффективные вентиляционные решения для помещений с повышенной влажностью`,
    `Круглосуточный сервис
    удаленно устранит 90%
    неисправночтей в течение 24 часов`,
    `Корпоративные предложения по установке 
    и обслуживанию. Особые условия на этапе
    строительства`,
    `Круглосуточный сервис
    удаленно устранит 90%
    неисправночтей в течение 24 часов`
]

backVent.addEventListener('click', () => {
    const h2Vent = document.querySelector('#h2Vent')
    const pVent = document.querySelector('#pVent')
    countVent--
    if(countVent < 0){
        countVent = arrayH2Vents.length - 1
    }
    h2Vent.innerHTML = arrayH2Vents[countVent]
    pVent.innerHTML = arrayPVents[countVent]
})

nextVent.addEventListener('click', () => {
    const h2Vent = document.querySelector('#h2Vent')
    const pVent = document.querySelector('#pVent')
    countVent++
    if(countVent >= arrayH2Vents.length - 1){
        countVent = 0
    }
    h2Vent.innerHTML = arrayH2Vents[countVent]
    pVent.innerHTML = arrayPVents[countVent]
})