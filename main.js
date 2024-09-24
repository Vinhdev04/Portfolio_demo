// Xử lý sự kiện click vào các nút điều hướng (nextPrev-btn)
const pageOnBtn = document.querySelectorAll(".nextPrev-btn");

pageOnBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    const pageOnID = element.getAttribute("data-page");
    const pageBtn = document.getElementById(pageOnID);

    if (pageBtn.classList.contains("turn")) {
      pageBtn.classList.remove("turn");
      setTimeout(() => {
        pageBtn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageBtn.classList.add("turn");
      setTimeout(() => {
        pageBtn.style.zIndex = 20 + index;
      }, 500);
    }
  });
});

// Di chuyển tới trang Contact me khi người dùng click vào button
const pages = document.querySelectorAll(".book-page.page-right");
const contactBtn = document.querySelectorAll(".btn.contact-me");

contactBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    pages.forEach((element, pageIndex) => {
      setTimeout(() => {
        element.classList.add("turn");
        setTimeout(() => {
          element.style.zIndex = 20 + pageIndex;
        }, 500);
      }, (pageIndex + 1) * 200 + 100);
    });
  });
});

// Hàm để lùi lại index của trang
let numberPages = pages.length;
let countPage = 0;

function reverseIndex() {
  countPage--;
  if (countPage < 0) {
    countPage = numberPages - 1;
  }
}

// Quay trở lại trang profile khi click biểu tượng user
const backProfile = document.querySelector(".back-profile");

backProfile.addEventListener("click", () => {
  pages.forEach((_, pageIndex) => {
    setTimeout(() => {
      reverseIndex();
      pages[countPage].classList.remove("turn");

      setTimeout(() => {
        pages[countPage].style.zIndex = 10 + pageIndex;
      }, 500);
    }, (pageIndex + 1) * 200 + 100);
  });
});
// Mở animation của coverRight (page-right)
const coverRight = document.querySelector(".cover.cover-right");

setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

// Mở animation của pageLeft (page-left) hoặc profile page
const pageLeft = document.querySelector(".book-page.page-left");

// setTimeout(() => {
//   pageLeft.style.zIndex = 20;
// }, 3200);

// Mở toàn bộ animation của các page-right
pages.forEach((_, pageIndex) => {
  setTimeout(() => {
    reverseIndex();
    pages[countPage].classList.remove("turn");

    setTimeout(() => {
      pages[countPage].style.zIndex = 10 + pageIndex;
    }, 500);
  }, (pageIndex + 1) * 2100 + 100);
});
