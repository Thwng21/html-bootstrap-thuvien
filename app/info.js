const shareBtn = document.getElementById('btn-share');
const likeBtn = document.getElementById('btn-like');
const itemLike = document.getElementById('item-like');
//Nút chia sẻ
shareBtn.addEventListener('click',async () => {
  try {
    alert('Chia sẻ trang này?');
    await navigator.share({
      title: 'Gwouth Library',
      text: 'This is a library for web developers',
      url: 'https://www.facebook.com/profile.php?id=61556514457059',
    });
  } catch (err) {
    console.error('Error: ' + err);
  }
});
// Nút thích
likeBtn.addEventListener('click', () => {

    if (likeBtn.style.backgroundColor === 'gray') {
        itemLike.textContent = parseInt(itemLike.textContent) - 1;
        likeBtn.style.backgroundColor = '';
        likeBtn.disabled = false;
    } else {
        likeBtn.disabled = true;
    }
});
