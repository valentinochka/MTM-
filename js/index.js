"use strict"
//==========================================

//! ============== 1 вариант SWIPER ==============
const gallary = new Swiper('.gallary', {

    //! Основные настройки 
    direction: 'horizontal', // 'vertical', 'horizontal'
    loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
    spaceBetween: 20, // расстояние между слайдами
    slidesPerView: 4, // кол-во активных слайдов
    slidesPerGroup: 4, // кол-во пролистываемых слайдов

    //! Кнопки вперед и назад 
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    

    //! Адаптив слайдера
    breakpoints: {
        1251: {
            spaceBetween: 20,
            slidesPerView: 4,
        },

        951: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        0: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
    },
});
