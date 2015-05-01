function toggle(element) {
  var e = document.getElementById(element);
  if(e.style.display == "block") {
    e.style.display = "none";
  } else {
    e.style.display = "block";
  }
};

$('#name').tooltip({'trigger':'focus', 'title': "Tell me your name."});
$('#email').tooltip({'trigger':'focus', 'title': "Tell me your email address."});
$('#message').tooltip({'trigger':'focus', 'title': "Leave me a comment."});