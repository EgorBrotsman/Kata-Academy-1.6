import Swiper, { Navigation, Pagination } from 'swiper'
// import Swiper and modules styles
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  direction: 'horizontal',
  loop: true,
  observer: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },

  breakpoints: {
    // when window width is >= 320px
    768: {
      enabled: false
    }
  }
})

import '../scss/style.scss'

const bodyScroll = document.querySelector('body')

// Aside Menu
const btnShowMenuAside = document.querySelector('.button--show-aside-menu')
const asideMenu = document.querySelector('.aside-menu')
const btnCloseAsideMenu = asideMenu.querySelector('.button--close--aside-menu')
const overflow = document.querySelector('.overflow')

btnShowMenuAside.addEventListener('click', function (evt) {
  evt.preventDefault()
  asideMenu.style.transform = 'translateX(0)'
  overflow.style.display = 'block'
  bodyScroll.style.overflow ='hidden'
})

btnCloseAsideMenu.addEventListener('click', function (evt) {
  evt.preventDefault()

  asideMenu.style.transform = 'translateX(-150%)'
  overflow.style.display = 'none'
  bodyScroll.style.overflow = 'auto'
})

overflow.addEventListener('click', function () {
  asideMenu.style.transform = 'translateX(-150%)'
  overflow.style.display = 'none'
  bodyScroll.style.overflow = 'auto'
})

//Modal
const buttonShowModalFeedback = document.querySelectorAll(
  '.button--show--modal-feedback'
)
const modalFeedback = document.querySelector('.modal--feedback')
const buttonCloseModalFeedback = modalFeedback.querySelector(
  '.button--close--modal'
)

const buttonShowModalOrderColl = document.querySelectorAll(
  '.button--show--modal-order-coll'
)
const modalOrderColl = document.querySelector('.modal--modal-order-coll')
const buttonCloseModalOrderColl = modalOrderColl.querySelector(
  '.button--close--modal'
)

buttonCloseModalFeedback.addEventListener('click', function (evt) {
  evt.preventDefault()
  modalFeedback.style.transform = 'translateY(-300%)'
  bodyScroll.style.overflowY = 'auto'
})

buttonCloseModalOrderColl.addEventListener('click', function (evt) {
  evt.preventDefault()
  modalOrderColl.style.transform = 'translateY(-300%)'
  bodyScroll.style.overflowY = 'auto'
})

for (let i = 0; i < buttonShowModalFeedback.length; i++) {
  buttonShowModalFeedback[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    modalFeedback.style.transform = 'translateY(0)'
    bodyScroll.style.overflowY = 'hidden'
  })
}

for (let i = 0; i < buttonShowModalOrderColl.length; i++) {
  buttonShowModalOrderColl[i].addEventListener('click', function () {
    modalOrderColl.style.transform = 'translateY(0)'
    bodyScroll.style.overflowY = 'hidden'
  })
}

//Read continue

const buttonReadContinue = document.querySelector('.button--read-continue')
const sectionTopText = document.querySelector('.section--top__text')

buttonReadContinue.addEventListener('click', function (evt) {
  evt.preventDefault()
  sectionTopText.style.height = 'auto'
});


//Show More Card

const brendList = document.querySelector('.section--brend__swiper');
const showMoreBrend = document.querySelector('.section--brend__btn-show');

showMoreBrend.addEventListener('click', function (evt) {
  evt.preventDefault();
  brendList.style.height = 'auto'
});

const technicList = document.querySelector('.section--technic__swiper')
const showMoretechnic = document.querySelector('.section--technic__btn-show')

showMoretechnic.addEventListener('click', function (evt) {
  evt.preventDefault()
  technicList.style.height = 'auto'
});