const gallery = document.getElementById('robot-gallery');

async function loadRobots() {
  try {
    const response = await fetch('robots.json'); // relative path
    const robots = await response.json();

    robots.forEach(robot => {
      const card = document.createElement('div');
      card.className = 'robot-card';
      card.innerHTML = `<h2>${robot.name}</h2><p>${robot.description}</p>`;
      gallery.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load robots.json:', err);
  }
}

loadRobots();
