var idleTime = 0;

function resetIdleTime() {
  idleTime = 0;
}

function incrementIdleTime() {
  idleTime++;
  console.log(idleTime);
  if (idleTime >= 180) {
    // 3분 이상 움직임이 없을 경우 메인 페이지로 이동
    window.location.href = "/index.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("mousemove", resetIdleTime);
  document.addEventListener("keypress", resetIdleTime);

  setInterval(incrementIdleTime, 1000);
});
