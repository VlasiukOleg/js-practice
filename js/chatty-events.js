const programmingTechnologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Python',
  'Django',
  'Ruby',
  'Ruby on Rails',
  'Java',
  'Spring Boot',
  'C#',
  '.NET',
  'Vue.js',
  'Angular',
];

const technologyList = document.querySelector('.technology-list');
const input = document.querySelector('.js-filter');

const makeTechnologiesListMarkUp = technologies => {
  return technologies
    .map(technology => {
      return `<li class="technology-item">${technology}</li>`;
    })
    .join('');
};

technologyList.innerHTML = makeTechnologiesListMarkUp(programmingTechnologies);

const onFilterInput = e => {
  let filteredTechnologies = [];
  const filter = e.target.value.toLowerCase();
  programmingTechnologies.forEach(item => {
    if (item.toLowerCase().includes(filter)) {
      filteredTechnologies.push(item);
    }
  });

  technologyList.innerHTML = makeTechnologiesListMarkUp(filteredTechnologies);
};

input.addEventListener('input', _.debounce(onFilterInput, 500));
