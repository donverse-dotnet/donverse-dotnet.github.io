const roadmaps = [
  {
    id: 'quarter-1',
    title: 'Nothing in quarter 1',
    description: 'No plans for quarter 1 yet.',
    q: 0,
    i: 0
  },
  {
    id: 'target-1',
    title: 'Community launch',
    description: 'Launch the community and establish initial presence.',
    q: 1,
    i: 0
  },
  {
    id: 'target-2',
    title: 'Announce the Project 1 and start development',
    description: 'Announce the launch of our first project in this community and begin its development.',
    q: 1,
    i: 1
  },
  {
    id: 'target-3',
    title: 'Announce the Project 2 and start development',
    description: 'Announce the launch of our second project in this community and begin its development.',
    q: 1,
    i: 2
  },
  {
    id: 'target-4',
    title: 'Announce the Project 3 and start development',
    description: 'Announce the launch of our third project in this community and begin its development.',
    q: 1,
    i: 3
  },
  {
    id: 'target-5',
    title: 'Announce the Project 4 and start development',
    description: 'Announce the launch of our fourth project in this community and begin its development.',
    q: 1,
    i: 4
  },
  {
    id: 'target-6',
    title: '1st test event',
    description: 'Conduct the first test event in this community.',
    q: 2,
    i: 0
  },
  {
    id: 'target-7',
    title: 'Continue project developments',
    description: 'Continue the development of ongoing projects in this community.',
    q: 2,
    i: 1
  },
  {
    id: 'target-8',
    title: '2nd test event',
    description: 'Conduct the second test event in this community.',
    q: 3,
    i: 0
  },
  {
    id: 'target-9',
    title: 'Continue project developments',
    description: 'Continue the development of ongoing projects in this community.',
    q: 3,
    i: 1
  },
]

// Implementation
const roadmapQuarterOneDot = document.getElementById('roadmap-quarter-1-dot');
const roadmapQuarterTwoDot = document.getElementById('roadmap-quarter-2-dot');
const roadmapQuarterThreeDot = document.getElementById('roadmap-quarter-3-dot');
const roadmapQuarterFourDot = document.getElementById('roadmap-quarter-4-dot');
const roadmapDotPlaceholder = document.getElementsByClassName('roadmap-branch-dot-t-wrapper')[0];
const roadmapLinePlaceholder = document.getElementsByClassName('roadmap-branch-dot-tt-line-wrapper')[0];
const roadmapTargetPlaceholder = document.getElementsByClassName('roadmap-targets')[0];
const roadmapDescriptionPlaceholder = document.getElementsByClassName('roadmap-descriptions')[0];

roadmaps.forEach(roadmap => {
  // Calculate dot position
  let elTop = 0;
  switch (roadmap.q) {
    case 0:
      elTop = 0;
      break;
    case 1:
      elTop = 270;
      break;
    case 2:
      elTop = 270 * 2;
      break;
    case 3:
      elTop = 270 * 3;
      break;
    default:
      elTop = 0;
  }
  elTop += (roadmap.i + 1) * 40;

  // Create dot
  const dot = document.createElement('div');
  dot.className = 'roadmap-branch-dot-t';
  dot.style.position = 'absolute';
  dot.style.top = `${elTop}px`;
  dot.style.width = '20px';
  dot.style.height = '20px';
  dot.style.backgroundColor = 'yellow';
  dot.style.borderRadius = '20px';
  roadmapDotPlaceholder.appendChild(dot);

  // Create line
  const line = document.createElement('div');
  line.style.position = 'absolute';
  line.style.top = `${elTop + 10}px`;
  line.style.left = '40px';
  line.style.transform = 'translateX(-50%)';
  line.style.width = '80px';
  line.style.height = '2px';
  line.style.backgroundColor = 'yellow';
  roadmapLinePlaceholder.appendChild(line);

  // Create target title
  const targetTitle = document.createElement('div');
  targetTitle.className = 'roadmap-target';
  targetTitle.style.position = 'absolute';
  targetTitle.style.top = `${elTop}px`;
  targetTitle.style.left = '0';
  targetTitle.style.display = 'flex';
  targetTitle.style.flexDirection = 'column';
  targetTitle.style.alignItems = 'flex-start';
  targetTitle.style.justifyContent = 'center';
  targetTitle.style.gap = '10px';
  targetTitle.setAttribute('data-dnvs-multiple-target', 'false');
  targetTitle.textContent = roadmap.title;
  roadmapTargetPlaceholder.appendChild(targetTitle);

  // Create description
  const description = document.createElement('div');
  description.className = 'roadmap-description';
  description.style.maxWidth = '360px';
  description.style.display = 'none';
  description.style.flexDirection = 'column';
  description.style.alignItems = 'flex-start';
  description.style.justifyContent = 'flex-start';
  description.style.gap = '10px';

  const descriptionTitle = document.createElement('div');
  descriptionTitle.className = 'roadmap-description-title';
  descriptionTitle.style.fontSize = '20px';
  descriptionTitle.textContent = roadmap.title;

  const descriptionDetail = document.createElement('div');
  descriptionDetail.className = 'roadmap-description-detail';
  descriptionDetail.style.color = 'gray';
  descriptionDetail.textContent = roadmap.description;

  description.appendChild(descriptionTitle);
  description.appendChild(descriptionDetail);
  roadmapDescriptionPlaceholder.appendChild(description);

  // Add click event listener to target title
  targetTitle.addEventListener('click', () => {
    // Hide all descriptions
    const allDescriptions = document.getElementsByClassName('roadmap-description');
    for (let i = 0; i < allDescriptions.length; i++) {
      allDescriptions[i].style.display = 'none';
    }

    // Show element
    const isVisible = description.style.display === 'flex';
    description.style.display = isVisible ? 'none' : 'flex';
  });
});
