// 댓글 작성
function addComment() {
  var commentInput = document.querySelector(".input input");
  var comment = commentInput.value;

  if (comment.trim() !== "") {
    var comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));

    commentInput.value = "";
    loadComments(); // 이 부분을 주석 처리하여 새로운 댓글만 화면에 표시되도록 수정
  }
}

// 댓글 로딩
function loadComments() {
  var comments = JSON.parse(localStorage.getItem("comments")) || [];
  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML = "";

  for (var i = 0; i < comments.length; i++) {
    var comment = comments[i];
    var commentBox = document.createElement("div");
    commentBox.className = "comment";
    commentBox.innerText = comment;
    commentsDiv.appendChild(commentBox);
  }
}

// 페이지 로드 시 댓글 로딩
window.onload = function () {
  loadComments();
};

// 폼 제출 시 댓글 작성
document.querySelector(".input button").addEventListener("click", function (e) {
  e.preventDefault();
  addComment();
});
