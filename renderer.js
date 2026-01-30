// renderer.js
// Make sure robots.js is loaded before this script

const gallery = document.getElementById('robot-gallery');

robots.forEach(robot => {
  const card = document.createElement('div');
  card.className = 'robot-card';
  card.innerHTML = `<h2>${robot.name}</h2><p>${robot.description}</p>`;
  gallery.appendChild(card);
});
