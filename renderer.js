window.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("robot-gallery");

  fetch("robots.json")
    .then(res => res.json())
    .then(robots => {
      robots.forEach(robot => {
        const card = document.createElement("div");
        card.className = "robot-card";

        const name = document.createElement("div");
        name.className = "robot-name";
        name.textContent = robot.name;

        const desc = document.createElement("div");
        desc.className = "robot-desc";
        desc.textContent = robot.description;

        card.appendChild(name);
        card.appendChild(desc);

        gallery.appendChild(card);
      });
    })
    .catch(err => console.error(err));
});
