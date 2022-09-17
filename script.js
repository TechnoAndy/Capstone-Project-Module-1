const hamburger = document.querySelector('.bar');
const navList = document.querySelector('.nav-list');
const navbar = document.querySelector('navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navList.classList.remove('active');
}));

const reset = () => {
  if (window.innerWidth > 768) {
    navbar.style.display = 'none';
  }
};

window.addEventListener('resize', reset);
const data = [
  {
    id: 1,
    pic: 'images/icons8-client-100.png',
    altText: 'speaker',
    nameOfSpeaker: 'Jonathan Cornelissen',
    designation: 'Chief Executive Officer',
    history: 'Talks about #edtech, #python, #datcamp, #education, and #datascientist',
  },
  {
    id: 2,
    pic: 'images/icons8-client-100.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Martjin Theuwissen',
    designation: 'Chief Operating Officer',
    history: 'Talks about #edtech, #python, #datcamp, #education, and #datascientist',
  },
  {
    id: 3,
    pic: 'images/icons8-client-100.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Diter De Mesmaeker',
    designation: 'Chief Technology Officer',
    history: 'Talks about #edtech, #python, #datcamp, #education, and #datascientist',
  },
  {
    id: 4,
    pic: 'images/icons8-client-100.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Thad Pitney',
    designation: 'General Counsel',
    history: 'Talks about #edtech, #python, #datcamp, #education, and #datascientist',
  },
  {
    id: 5,
    pic: 'images/icons8-presenter-100.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Susannah Belcher',
    designation: 'Chief Revenue Officer B2C',
    history: 'Talks about #edtech, #python, #datcamp, #education, and #datascientist',
  },
  {
    id: 6,
    pic: 'images/icons8-presenter-100.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Catalina Schveninger',
    designation: 'Chief People Officer',
    history: 'Talks about #edtech, #python, #datcamp, #education, and #datascientist',
  },
];

const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');
data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.pic);
  image.setAttribute('alt', speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h3');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const body = document.querySelector('body');
const partners = document.getElementById('partners');
body.insertBefore(speakerContainer, partners);