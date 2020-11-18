let url = location.href;
let bookName = url.substr(url.lastIndexOf("?name=")+6);
bookName = bookName.replaceAll('%20', ' '); 
bookName = bookName.replaceAll('%22', '\"');
bookName = bookName.replaceAll('%27', "\'")
document.getElementById("search").value = bookName;

function findBook() {
  window.location.href = "search.html?name=" + document.getElementById("search").value
}