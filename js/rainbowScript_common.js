// [ onclick event ] --> background_video 클릭시 paly/pause
function togglePlay() {
  var video = document.querySelector(".background_video video");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// [ onclick event ] --> modal show/hide
function openModal(url) {
  let modal = document.querySelector('.modal.' + url);
  
  function first() {
    modal.style.display = "block";
    document.body.classList.add("not-scroll");
  }
  function second() {
    document.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    })
  }
  first();
  second();
}
function closeModal() {
  let modal = document.querySelectorAll('.modal');
  for (var i = 0; i < modal.length; i++) {
    modal[i].style.display = "none";
  }
  document.body.classList.remove("not-scroll");
}

window.addEventListener("load", function () {

  // 나의강의실 tab
  const tabList = document.querySelectorAll('.tab_headerWrap .tab_header a');
  const contents = document.querySelectorAll('.tab_bodyWrap .tab_body')
  let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

  for (var i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', function (e) {
      e.preventDefault();
      for (var j = 0; j < tabList.length; j++) {
        tabList[j].parentNode.classList.remove('active');
        contents[j].style.display = 'none';
      }
      this.parentNode.classList.add('active');
      activeCont = this.getAttribute('tab');
      document.querySelector(activeCont).style.display = 'block';
    });
  }

  if(localStorage.getItem('dDay')){
    var lastData = localStorage.getItem('dDay') 
    console.log(lastData)
  }


  // 브라우저 타입 체크
  var browse = navigator.userAgent.toLowerCase(); 
        
  if( (navigator.appName == 'Netscape' && browse.indexOf('trident') != -1) || (browse.indexOf("msie") != -1) || (browse.indexOf("firefox") != -1)) {
       alert("본 사이트는 Google Chrome, Microsoft Edge에 최적화되어있습니다.");
    }
});
