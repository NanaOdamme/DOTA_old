 // JavaScript for sidebar dropdown
 const menuBtn = document.getElementById('menuBtn');
 const sidebar = document.getElementById('sidebar');
 const closeBtn = document.getElementById('closeBtn');
 
 menuBtn.addEventListener('click', () => {
   sidebar.classList.toggle('hidden');
 });
 
 closeBtn.addEventListener('click', () => {
   sidebar.classList.add('hidden');
 });
 // JavaScript for search bar toggle
 const searchBtn = document.getElementById('searchBtn');
 const searchBar = document.getElementById('searchBar');
 
 searchBtn.addEventListener('click', () => {
   searchBar.classList.toggle('hidden');
 });
 
 const swiper = new Swiper(".mySwiper", {
     spaceBetween: 30,
     centeredSlides: true,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });
   
   document.addEventListener("DOMContentLoaded", function() { 
     const carousel = document.querySelector(".carousel"); 
     const arrowBtns = document.querySelectorAll(".wrapper i"); 
     const wrapper = document.querySelector(".wrapper"); 
   
     const firstCard = carousel.querySelector(".card"); 
     const firstCardWidth = firstCard.offsetWidth; 
   
     let isDragging = false, 
       startX, 
       startScrollLeft,
       timeoutId; 
   
     const dragStart = (e) => { 
       isDragging = true; 
       carousel.classList.add("dragging"); 
       startX = e.pageX; 
       startScrollLeft = carousel.scrollLeft; 
     }; 
   
     const dragging = (e) => { 
       if (!isDragging) return; 
     
       // Calculate the new scroll position 
       const newScrollLeft = startScrollLeft - (e.pageX - startX); 
     
       // Check if the new scroll position exceeds 
       // the carousel boundaries 
       if (newScrollLeft <= 0 || newScrollLeft >= 
         carousel.scrollWidth - carousel.offsetWidth) { 
         
         // If so, prevent further dragging 
         isDragging = false; 
         return; 
       } 
     
       // Otherwise, update the scroll position of the carousel 
       carousel.scrollLeft = newScrollLeft; 
     }; 
   
     const dragStop = () => { 
       isDragging = false; 
       carousel.classList.remove("dragging"); 
     }; 
   
     const autoPlay = () => { 
     
       // Return if window is smaller than 800 
       if (window.innerWidth < 800) return; 
       
       // Calculate the total width of all cards 
       const totalCardWidth = carousel.scrollWidth; 
       
       // Calculate the maximum scroll position 
       const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
       
       // If the carousel is at the end, stop autoplay 
       if (carousel.scrollLeft >= maxScrollLeft) return; 
       
       // Autoplay the carousel after every 2500ms 
       timeoutId = setTimeout(() => 
         carousel.scrollLeft += firstCardWidth, 2500); 
     }; 
   
     carousel.addEventListener("mousedown", dragStart); 
     carousel.addEventListener("mousemove", dragging); 
     document.addEventListener("mouseup", dragStop); 
     wrapper.addEventListener("mouseenter", () => 
       clearTimeout(timeoutId)); 
     wrapper.addEventListener("mouseleave", autoPlay); 
   
     // Add event listeners for the arrow buttons to 
     // scroll the carousel left and right 
     arrowBtns.forEach(btn => { 
       btn.addEventListener("click", () => { 
         carousel.scrollLeft += btn.id === "left" ? 
           -firstCardWidth : firstCardWidth; 
       }); 
     }); 
   }); 
   
 const scrollers = document.querySelectorAll('.scroller');
 
     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
         addAnimation();
     }
 
     function addAnimation() {
         scrollers.forEach((scroller) => {
             scroller.setAttribute('data-animated', true);
 
             const innerScroller = scroller.querySelector('.scroller_inner');
             const scrollerContent = Array.from(innerScroller.children);
 
             scrollerContent.forEach(item => {
                 const duplicatedItem = item.cloneNode(true);
                 duplicatedItem.setAttribute('aria-hidden', true);
                 innerScroller.appendChild(duplicatedItem);
             });
 
         });
     }
 
     const style = document.createElement('style');
     style.textContent = `
         .scroller {
             max-width: 100%;
         }
 
         .scroller[data-animated=true] {
             overflow: hidden;
             -webkit-mask: linear-gradient(
                 90deg,
                 transparent,
                 white 20%,
                 white 90%,
                 transparent);
             mask: linear-gradient(
                 90deg,
                 transparent,
                 rgb(255, 255, 255) 20%,
                 white 90%,
                 transparent);
         }
 
         .scroller[data-animated=true] .scroller_inner {
             width: max-content;
             flex-wrap: nowrap;
             animation: scroll var(--_animation-duration, 30s) var(--_animation-direction, forwards) linear infinite;
         }
 
         .scroller[data-direction="right"] {
             --_animation-direction: reverse;
         }
 
         .scroller[data-direction="left"] {
             --_animation-direction: forwards;
         }
 
         .scroller[animation-duration="slow"] {
             --_animation-duration: 40s;
         }
 
         .scroller[animation-duration="fast"] {
             --_animation-duration: 10s;
         }
 
         @keyframes scroll {
             to {
                 transform: translate(calc(-50% - 0.5rem));
             }
         }
 
         .scroller_inner {
             display: flex;
             gap: 1rem;
             padding-block: 1rem;
             flex-wrap: wrap;
         }
     `;
     document.head.appendChild(style);
 
 
     document.addEventListener("DOMContentLoaded", function () {
       const prevButton = document.getElementById("prevButton");
       const nextButton = document.getElementById("nextButton");
       const imageScroller = document.querySelector(".image-scroller");
     
       let scrollPosition = 0;
       const scrollStep = 100;
     
       prevButton.addEventListener("click", function () {
         scrollPosition = Math.max(scrollPosition - scrollStep, 0);
         imageScroller.scrollLeft = scrollPosition;
       });
     
       nextButton.addEventListener("click", function () {
         scrollPosition = Math.min(scrollPosition + scrollStep, imageScroller.scrollWidth - imageScroller.clientWidth);
         imageScroller.scrollLeft = scrollPosition;
       });
     });
     
     //filters for allproducts.
     const filterBtn = document.getElementById('filterBtn');
     const filterDropdown = document.getElementById('filterDropdown');
 
     filterBtn.addEventListener('click', () => {
       filterDropdown.classList.toggle('hidden');
     });
 
     // Close dropdown when clicking outside
     window.addEventListener('click', (e) => {
       if (!filterBtn.contains(e.target) && !filterDropdown.contains(e.target)) {
         filterDropdown.classList.add('hidden');
       }
     });