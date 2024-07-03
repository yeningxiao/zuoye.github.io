//只有搜索半岛铁盒才会跳出来
window.onload = function () {
  document.getElementById('search-form').addEventListener('submit', function (event) {
    var query = document.getElementsByName('query')[0].value;
    if (query !== '半岛铁盒') {
      event.preventDefault();
      alert('只有在搜索“半岛铁盒”才会跳转到search_results.html页面');
    }
  });
};