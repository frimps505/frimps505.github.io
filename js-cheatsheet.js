const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('pop');
  });

  btn.addEventListener('animationend', () => {
    btn.classList.remove('pop');
  });
});

const profile = document.querySelector('.brand');

profile.addEventListener('mouseenter', () => {
  profile.style.transition = 'all 0.3s ease';
});

profile.addEventListener('mouseleave', () => {
  profile.style.transition = 'all 0.3s ease';
});

const image = document.getElementById('profile-img');

image.addEventListener('mouseenter', () => {
  image.style.transform = 'scale(1.35)';
  image.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
});

image.addEventListener('mouseleave', () => {
  image.style.transition = 'all 2s ease'
  image.style.transform = 'scale(1)';
  image.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
});
