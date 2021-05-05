"use strict";

var tabs = document.querySelectorAll('.tabs-buttons__item');
var slider = document.querySelectorAll('.tabs-info__slider-item');
var avatar = document.querySelector('#main-avatar');
var namePerson = document.querySelector('#name-pers');
var job = document.querySelector('#job-pers');
var team = document.querySelector('#tab-team');
var company = document.querySelector('#tab-company');
var showroom = document.querySelector('#tab-showroom');
var sertif = document.querySelector('#tab-sertification');
var backSlide = document.querySelector('#back-arr');
var nextSlide = document.querySelector('#next-arr');
var namePersonMob = document.querySelector('#name-pers-mob');
var jobPersonMob = document.querySelector('#job-person-mob');
var specCounter = 0;
var tab_content = [team, company, showroom, sertif];
tabs[0].classList.add('tabs-buttons__item-choose');
slider[0].classList.add('choose-img');
var names = ['Сергей Лысак', 'Иван Петрович', 'Михаил Иванович', 'Никита Бобров', 'Кирил Михайлович', 'Александр Котов', 'Петр Безов', 'Лев Толстой'];
var jobs = ['Генеральный директор', 'Зам директора', 'Дизайнер', 'Web Developer', 'Сисадмин', 'Репортер', 'Ученный', 'Исследователь'];
var images = ['./style/img/MainAvatar.png', './style/img/Ellipse3.png', './style/img/Ellipse4.png', './style/img/Ellipse5.png', './style/img/Ellipse6.png', './style/img/Ellipse7.png', './style/img/Ellipse8.png', './style/img/Ellipse9.png'];

function showTab(num) {
  tab_content.forEach(function (i, index) {
    i.classList.add('tabs-hidden');
    if (index == num) i.classList.remove('tabs-hidden');
  });
}

showTab(0);
tabs.forEach(function (i, index) {
  i.addEventListener('click', function (e) {
    tabs.forEach(function (i) {
      i.classList.contains('tabs-buttons__item-choose');
      i.classList.remove('tabs-buttons__item-choose');
    });
    e.target.classList.add('tabs-buttons__item-choose');
    showTab(index);
  });
});
slider.forEach(function (item, index) {
  item.addEventListener('click', function (e) {
    slider.forEach(function (item) {
      item.classList.contains('choose-img');
      item.classList.remove('choose-img');
    });
    e.target.classList.add('choose-img');
    var spec_path = item.src;
    avatar.src = spec_path;
    namePerson.innerHTML = names[index];
    job.innerHTML = jobs[index];
  });
});
nextSlide.addEventListener('click', function () {
  var sliderImg = document.querySelector('#slider-img');
  specCounter++;

  if (specCounter >= images.length) {
    specCounter = 0;
  }

  sliderImg.src = images[specCounter];
  namePersonMob.innerHTML = names[specCounter];
  jobPersonMob.innerHTML = jobs[specCounter];
});
backSlide.addEventListener('click', function () {
  var sliderImg = document.querySelector('#slider-img');
  specCounter--;

  if (specCounter < 0) {
    specCounter = images.length - 1;
  }

  sliderImg.src = images[specCounter];
  namePersonMob.innerHTML = names[specCounter];
  jobPersonMob.innerHTML = jobs[specCounter];
}); //companies slider

var backCompany = document.querySelector('#back-arr-companies');
var nextCompany = document.querySelector('#next-arr-companies');
var companyCounter = 0;
var imagesCompanies = ['./style/img/Objects.png', './style/img/Houses.png', './style/img/Flats.png', './style/img/Basses.png', './style/img/PromObjects.png'];
var infoCompany = ['Всего объектов', 'Частных домов', 'Квартир', 'Бассейнов', 'Пром. объектов'];
nextCompany.addEventListener('click', function () {
  var compSlider = document.querySelector('#companies-slider');
  var info = document.querySelector('#companies-slider-info');
  companyCounter++;

  if (companyCounter >= imagesCompanies.length) {
    companyCounter = 0;
  }

  compSlider.src = imagesCompanies[companyCounter];
  info.innerHTML = infoCompany[companyCounter];
});
backCompany.addEventListener('click', function () {
  var compSlider = document.querySelector('#companies-slider');
  var info = document.querySelector('#companies-slider-info');
  companyCounter--;

  if (companyCounter < 0) {
    companyCounter = imagesCompanies.length - 1;
  }

  compSlider.src = imagesCompanies[companyCounter];
  info.innerHTML = infoCompany[companyCounter];
}); //showroom slider

var backShow = document.querySelector('#back-arr-showroom');
var nextShow = document.querySelector('#next-arr-showroom');
var companyShow = 0;
var imagesShow = ['./style/img/ShowRoom1.png', './style/img/ShowRoom2.png', './style/img/ShowRoom3.png'];
nextShow.addEventListener('click', function () {
  var image = document.querySelector('#showroom-slider');
  companyShow++;

  if (companyShow >= imagesShow.length) {
    companyShow = 0;
  }

  image.src = imagesShow[companyShow];
});
backShow.addEventListener('click', function () {
  var image = document.querySelector('#showroom-slider');
  companyShow--;

  if (companyShow < 0) {
    companyShow = imagesShow.length - 1;
  }

  image.src = imagesShow[companyShow];
}); //sertif clider 

var backSertif = document.querySelector('#back-arr-sertif');
var nextSertif = document.querySelector('#next-arr-sertif');
var companySertif = 0;
var imagesSertif = ['./style/img/Sertif1.png', './style/img/Sertif2.png', './style/img/Sertif3.png', './style/img/Sertif4.png', './style/img/Sertif5.png', './style/img/Sertif6.png'];
var infoSertif = ['Лицензия МЧС', 'Международный диплом Enervent', 'Монтаж и наладка VRV Daikin', 'Свидетельство СРО', 'Сертификат Trox', 'Сертификат Uponor'];
backSertif.addEventListener('click', function () {
  var image = document.querySelector('#sertif-slider');
  var info = document.querySelector('#info-sertif');
  companySertif--;

  if (companySertif < 0) {
    companySertif = imagesSertif.length - 1;
  }

  image.src = imagesSertif[companySertif];
  info.innerHTML = infoSertif[companySertif];
});
nextSertif.addEventListener('click', function () {
  var image = document.querySelector('#sertif-slider');
  var info = document.querySelector('#info-sertif');
  companySertif++;

  if (companySertif >= imagesSertif.length) {
    companySertif = 0;
  }

  image.src = imagesSertif[companySertif];
  info.innerHTML = infoSertif[companySertif];
}); //Projects slider

var backProject = document.querySelector('#backProject');
var nextProject = document.querySelector('#nextProject');
var projectCount = 0;
var projectsInfo = [{
  'titleh2': 'ЛЕОНОВО',
  'titleh3': 'Жилой дом — 2500 м2',
  'descriptp': "4 \u043F\u0440\u0438\u0442\u043E\u0447\u043D\u043E-\u0432\u044B\u0442\u044F\u0436\u043D\u044B\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 Enervent\n        \u0441 \u0440\u043E\u0442\u043E\u0440\u043D\u044B\u043C \u0440\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C <br><br>\n       \u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u0430 <br><br>\n       \u041C\u0443\u043B\u044C\u0442\u0438\u0437\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F Daikin \u0441\xA0\u043A\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C\u0438 \u0431\u043B\u043E\u043A\u0430\u043C\u0438"
}, {
  'titleh2': 'ВЫМПЕЛ',
  'titleh3': 'Жилой дом — 1800 м2',
  'descriptp': "4 \u043F\u0440\u0438\u0442\u043E\u0447\u043D\u043E-\u0432\u044B\u0442\u044F\u0436\u043D\u044B\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 Enervent \u0441\xA0\u0440\u043E\u0442\u043E\u0440\u043D\u044B\u043C \u0440\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \n        <br><br>\n        \u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u0430\n        <br><br>\n        \u041C\u0443\u043B\u044C\u0442\u0438\u0437\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F\n        Daikin \u0441\xA0\u043A\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C\u0438 \u0431\u043B\u043E\u043A\u0430\u043C\u0438<br><br>\n        \u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C"
}, {
  'titleh2': 'ПЕСТОВО',
  'titleh3': 'Жилой дом — 600 м2',
  'descriptp': "2 \u043F\u0440\u0438\u0442\u043E\u0447\u043D\u043E \u0432\u044B\u0442\u044F\u0436\u043D\u044B\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 Enervent\n        <br><br>\n        \u041C\u0443\u043B\u044C\u0442\u0438\u0437\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F\n        Mitsubishi Electric"
}, {
  'titleh2': 'НАРОФОМИНСК',
  'titleh3': 'Жилой дом — 350 м2',
  'descriptp': "\u042D\u043D\u0435\u0440\u0433\u043E\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u043E\u043C \u043A\u043B\u0430\u0441\u0441\u0430 \u0410+\n        <br><br>\n        \u041F\u0440\u0438\u0442\u043E\u0447\u043D\u043E \u0432\u044B\u0442\u044F\u0436\u043D\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 Enervent\n        c \u0433\u0435\u043E\u0442\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435\u043C"
}];
backProject.addEventListener('click', function () {
  var h2 = document.querySelector('#projectH2');
  var h3 = document.querySelector('#projectH3');
  var p = document.querySelector('#projectP');
  projectCount--;

  if (projectCount < 0) {
    projectCount = projectsInfo.length - 1;
  }

  h2.innerHTML = projectsInfo[projectCount].titleh2;
  h3.innerHTML = projectsInfo[projectCount].titleh3;
  p.innerHTML = projectsInfo[projectCount].descriptp;
});
nextProject.addEventListener('click', function () {
  var h2 = document.querySelector('#projectH2');
  var h3 = document.querySelector('#projectH3');
  var p = document.querySelector('#projectP');
  projectCount++;

  if (projectCount >= projectsInfo.length) {
    projectCount = 0;
  }

  h2.innerHTML = projectsInfo[projectCount].titleh2;
  h3.innerHTML = projectsInfo[projectCount].titleh3;
  p.innerHTML = projectsInfo[projectCount].descriptp;
});