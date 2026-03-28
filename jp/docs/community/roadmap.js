const roadmaps = [
  {
    id: 'quarter-1',
    title: '第1四半期',
    description: '第1四半期の計画はまだありません。',
    q: 0,
    i: 0
  },
  {
    id: 'target-1',
    title: 'コミュニティの立ち上げ',
    description: 'コミュニティを立ち上げ、初期の存在感を確立します。',
    q: 1,
    i: 0
  },
  {
    id: 'target-2',
    title: 'プロジェクト1の発表と開発開始',
    description: 'このコミュニティで最初のプロジェクトの開始を発表し、その開発を開始します。',
    q: 1,
    i: 1
  },
  {
    id: 'target-3',
    title: 'プロジェクト2の発表と開発開始',
    description: 'このコミュニティで2番目のプロジェクトの開始を発表し、その開発を開始します。',
    q: 1,
    i: 2
  },
  {
    id: 'target-4',
    title: 'プロジェクト3の発表と開発開始',
    description: 'このコミュニティで3番目のプロジェクトの開始を発表し、その開発を開始します。',
    q: 1,
    i: 3
  },
  {
    id: 'target-5',
    title: 'プロジェクト4の発表と開発開始',
    description: 'このコミュニティで4番目のプロジェクトの開始を発表し、その開発を開始します。',
    q: 1,
    i: 4
  },
  {
    id: 'target-6',
    title: '第1回テストイベント',
    description: 'このコミュニティで第1回のテストイベントを実施します。',
    q: 2,
    i: 0
  },
  {
    id: 'target-7',
    title: 'プロジェクト開発の継続',
    description: 'このコミュニティで進行中のプロジェクトの開発を継続します。',
    q: 2,
    i: 1
  },
  {
    id: 'target-8',
    title: '第2回テストイベント',
    description: 'このコミュニティで第2回のテストイベントを実施します。',
    q: 3,
    i: 0
  },
  {
    id: 'target-9',
    title: 'プロジェクト開発の継続',
    description: 'このコミュニティで進行中のプロジェクトの開発を継続します。',
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
