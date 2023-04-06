const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(imageContainer => {
  const image = imageContainer.querySelector('img');
  const title = imageContainer.querySelector('h2');

  image.addEventListener('mouseover', () => {
    title.style.color = 'yellow';
  });

  image.addEventListener('mouseout', () => {
    title.style.color = 'white';
  });
});
