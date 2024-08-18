window.addEventListener("load", function () {
  // Hiển thị thanh bar
  const navbar = document.querySelector(".navbar");
  navbar.style.top = "0";

  // Lấy tất cả các mục điều hướng
  const navLinks = document.querySelectorAll(".navbar ul li");

  // Thêm hiệu ứng lần lượt cho từng mục điều hướng
  navLinks.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    }, index * 350); // Thời gian chờ để tạo hiệu ứng lần lượt
  });

  // Xử lý khi bấm vào liên kết điều hướng
  navLinks.forEach((link) => {
    link.querySelector("a").addEventListener("click", function (event) {
      event.preventDefault();

      // Cuộn đến phần nội dung tương ứng
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Xóa và thêm lớp active
      navLinks.forEach((link) =>
        link.querySelector("a").classList.remove("active")
      );
      this.classList.add("active");
    });
  });

  // Hiển thị nội dung khi cuộn đến phần tương ứng
  const sections = document.querySelectorAll("section");

  function handleScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  }
  window.addEventListener("scroll", handleScroll);
  // Kích hoạt kiểm tra cuộn ban đầu để hiển thị phần đang hoạt động
  handleScroll();
  // Hiển thị hình ảnh khi di chuột
  const homeImage = document.querySelector(".home-image img");
  homeImage.addEventListener("mouseover", function () {
    homeImage.style.transform = "scale(1.1)"; // Phóng to 10%
  });
  homeImage.addEventListener("mouseout", function () {
    homeImage.style.transform = "scale(1)"; // Trở về kích thước ban đầu
  });
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
});
