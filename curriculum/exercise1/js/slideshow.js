const pictureBox = document.querySelector(".picture");
const images = document.querySelectorAll(".picture img");
const imgWidth = images[0].getBoundingClientRect().width + 60; // margin 已用百分比，宽度直接取 clientWidth
const dotContainer = document.querySelector(".dots");
const dots = document.querySelectorAll(".dot");
const descripeSlide = document.querySelector('.descripe-slide');


const descripeText = [
  "Thriller·New season.",
  "Drama·New season.",
  "Comedy·Winner of 13 Emmy Awards",
  "Thriller·Winner of 8 Emmy Awards",
  "Watch every club, ervery match, live-all season long.",
  "Thriller·Fammily, legacy, and a fortyne are on the line in this gripping Spike Lee Joint starring Denzel Washington.",
  "Sci-Fi·The threat has evolved.",
  "Live MLB games, evert Friday.",
  "Drama·An epic adventure about the origin of Havai'i, its people, and a dangerous fight for power.",
  "Commedy·Seth Rogen and Rose Byrne are old frends who reunite for a hilarious new chapter."
];
const buttonText = [
    "Stream now",
    "Stream now",
    "Stream now",
    "Stream now",
    "See the schedule",
    "Stream now",
    "Stream now",
    "See the schedule",
    "Stream now",
    "Stream now"
];
const links = [
    "https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o",
    "https://tv.apple.com/us/show/the-morning-show/umc.cmc.25tn3v8ku4b39tr6ccgb8nl6m",
    "https://tv.apple.com/us/show/the-studio/umc.cmc.7518algxc4lsoobtsx30dqb52",
    "https://tv.apple.com/us/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx",
    "https://tv.apple.com/us/channel/mls-season-pass/tvs.sbd.7000",
    "https://tv.apple.com/us/movie/highest-2-lowest/umc.cmc.3rbg43tt2brl2cp5wwacfrmhx",
    "https://tv.apple.com/us/show/invasion/umc.cmc.70b7z97fv7azfzn5baqnj88p6",
    "https://tv.apple.com/us/room/edt.item.62327df1-6874-470e-98b2-a5bbeac509a2",
    "https://tv.apple.com/us/show/chief-of-war/umc.cmc.6ag0zq020ielwv7m83v8r4dkw",
    "https://tv.apple.com/us/show/platonic/umc.cmc.y7bc18x7co813l8i2tlsyb4l"
];

function updateCaption(tempIndex) {
    document.querySelector(".text-slide").textContent = descripeText[tempIndex - 1];
    button = document.querySelector(".button-slide");
    button.textContent = buttonText[tempIndex - 1];
    button.href = links[tempIndex - 1];
    descripeSlide.style.animation = 'none';
    descripeSlide.offsetHeight;
    descripeSlide.style.animation = "slideUp 1s ease forwards"

}
let index = 1; // 初始显示真实第一张
pictureBox.style.transform = `translateX(-${imgWidth * index - 170}px)`;
updateActive(index);
updateCaption(index)
function nextSlide() {
  index++;
  pictureBox.style.transition = "transform 0.5s ease";
  pictureBox.style.transform = `translateX(-${imgWidth * index - 170}px)`;
  updateActive(index);
  updateCaption(index)
}
function updateActive(tempIndex) {
  updateDots();

  // 先清空所有状态
  images.forEach(img => img.classList.remove("active", "prev", "next"));

  // 当前图
  images[tempIndex].classList.add("active");

  // 上一张
  let prevIndex = tempIndex - 1;
  if (prevIndex < 0) prevIndex = images.length - 1;
  images[prevIndex].classList.add("prev");

  // 下一张
  let nextIndex = tempIndex + 1;
  if (nextIndex >= images.length) nextIndex = 0;
  images[nextIndex].classList.add("next");
}


pictureBox.addEventListener("transitionend", () => {
  // 到达克隆第一张
  if (index === images.length - 1) {
    pictureBox.style.transition = "none";
    index = 1;
    pictureBox.style.transform = `translateX(-${imgWidth * index - 170}px)`;
    updateActive(index);
    updateCaption(index)
  }
});



function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  // index 对应当前显示的真实图片（排除克隆）
  if (index >= 1 && index <= dots.length) {
    dots[index - 1].classList.add("active");
  }
}
dots.forEach( (dot, i) => {
    dot.addEventListener("click", () => {
        console.log("click")
        showIndex = i + 1;
        pictureBox.style.transition = "transform 0.5s ease";
        pictureBox.style.transform = `translateX(-${imgWidth * showIndex - 170}px)`;
        updateActive(showIndex);
        updateCaption(showIndex)
        setTimeout( () => {}, 1500);
    });
});

// 自动播放
setInterval(nextSlide, 4000);
