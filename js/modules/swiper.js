export const heroSwiperInit=()=>{new Swiper(".hero-swiper",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})};export const saleSwiperInit=()=>{new Swiper(".sale-swiper",{loop:!1,pagination:{el:".sale-swiper-pagination",clickable:!0,renderBullet:function(e,i){return`<span class="${i}">${["Кольца","Серьги","Браслеты","Часы"][e]}</span>`}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})};export const sliderCardSwiper=()=>{new Swiper(".slider-card-swiper",{loop:!0,pagination:{el:".swiper-pagination"},nested:!0})};export const dailySwiperInner=()=>{new Swiper(".daily-swiper-inner",{loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},nested:!0})};export const dailySwiper=()=>{new Swiper(".daily-swiper",{loop:!1,navigation:{nextEl:".daily-swiper-next",prevEl:".daily-swiper-prev"}})};