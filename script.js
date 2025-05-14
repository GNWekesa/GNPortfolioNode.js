
// Show the scroll-up button when scrolled down
window.onscroll = function () {
    const scrollUpButton = document.getElementById("scroll-up");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollUpButton.classList.add("show");
    } else {
      scrollUpButton.classList.remove("show");
    }
  };
  
  // Scroll to the top of the page when the button is clicked
  document.getElementById("scroll-up").addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  

  //  JavaScript for rotating hobbies 
  document.addEventListener("DOMContentLoaded", function () {
    const hobbies = [
      { icon: "bi-mic-fill", text: "Singing" },
      { icon: "bi-headphones", text: "Listening to Music" },
      { icon: "bi-geo-alt-fill", text: "Travelling" },
      { icon: "bi-book-fill", text: "Reading" },
      { icon: "bi-egg-fried", text: "Cooking" },
      { icon: "bi-scissors", text: "Crocheting" },
      { icon: "bi-tree-fill", text: "Hiking" },
      { icon: "bi-droplet-fill", text: "Soap Making" }
    ];

    const hobbyElement = document.getElementById("hobbyText");
    let index = 0;

    setInterval(() => {
      index = (index + 1) % hobbies.length;
      const { icon, text } = hobbies[index];
      hobbyElement.innerHTML = `<i class="bi ${icon} me-2"></i>${text}`;
    }, 2500);
  });

 
////
// JS for my flipbook i tried putting in a separate js file but that did not work-->

  document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll('.page');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan = document.getElementById('totalPages');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentPage = 0;
    totalPagesSpan.textContent = pages.length;

    function showPage(index) {
      pages.forEach((page, i) => {
        page.classList.toggle('active', i === index);
      });
      currentPageSpan.textContent = index + 1;
    }

    prevBtn.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
      }
    });

    showPage(currentPage); // Show the first page on load
  });
