document.addEventListener('DOMContentLoaded', () => {
  if (!sessionStorage.getItem('seenAnimation')) {
      const message = document.getElementById('message');
      message.classList.add('show-message');

      function createFlower() {
          let flower = document.createElement('div');
          flower.classList.add('flower');

          // Randomly choose a flower emoji and color
          let flowerTypes = ['🌸', '🌺', '🌻', '🌼'];
          let flowerColors = ['#FF6347', '#FF4500', '#FFA500']; // Orange tones
          let selectedFlower = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
          let selectedColor = flowerColors[Math.floor(Math.random() * flowerColors.length)];

          flower.innerHTML = selectedFlower;
          flower.style.left = Math.random() * window.innerWidth + 'px';
          flower.style.animationDuration = (Math.random() * 5 + 2) + 's';
          flower.style.color = selectedColor; // Apply the random color
          
          document.getElementById('animation-container').appendChild(flower);

          setTimeout(() => flower.remove(), 5000);
      }

      let interval = setInterval(createFlower, 50); // Increased frequency of flower creation

      function removeAnimation() {
          message.classList.remove('show-message');
          document.getElementById('animation-container').style.opacity = '0';
          setTimeout(() => {
              document.getElementById('animation-container').style.display = 'none';
          }, 1000);
          clearInterval(interval);
          sessionStorage.setItem('seenAnimation', 'true');
          document.body.style.overflow = 'auto';
      }

      window.addEventListener('scroll', removeAnimation);
      setTimeout(removeAnimation, 5000);
  } else {
      document.getElementById('animation-container').style.display = 'none';
  }
});
