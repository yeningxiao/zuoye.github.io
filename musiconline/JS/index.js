//点击它会向下平滑滚动
document.getElementById('scroll-down').addEventListener('click', function () {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});