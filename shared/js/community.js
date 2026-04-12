const memberCount = 500;
const eventCount = 10;
const projectCount = 20;

const memberCountElement = document.getElementById('members_count');
const eventCountElement = document.getElementById('events_count');
const projectCountElement = document.getElementById('projects_count');

function animateCount() {
  for (let i = 0; i <= memberCount; i++) {
    setTimeout(() => { memberCountElement.textContent = i; }, i * 5);
  }

  for (let i = 0; i <= eventCount; i++) {
    setTimeout(() => { eventCountElement.textContent = i; }, i * 5);
  }

  for (let i = 0; i <= projectCount; i++) {
    setTimeout(() => { projectCountElement.textContent = i; }, i * 5);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  animateCount();
});
