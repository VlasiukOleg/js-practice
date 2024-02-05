const API_KEY = 'c6322f21304940edbab2fe03dda5069f';
let page = 1;
const perPage = 9;

const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-form__input'),
  searchBtn: document.querySelector('.search-form__btn'),
  newsList: document.querySelector('.news-api__list'),
  showMoreBtn: document.querySelector('.news-api__btn'),
};

//!  Fetch

// function onSubmit(e) {
//   e.preventDefault();

//   fetchNews(page, perPage)
//     .then(news => {
//       createNewsMarkup(news);
//       page += 1;

//       if (page > 1) {
//         refs.showMoreBtn.classList.remove('news-api__btn--is-hidden');
//       }
//     })
//     .catch(error => console.log(error));
// }

// function fetchNews(page, perPage) {
//   return fetch(
//     `https://newsapi.org/v2/everything?q=cat&page=${page}&pageSize=${perPage}&apiKey=${API_KEY}`
//   ).then(res => res.json());
// }

// function onShowMore() {
//   fetchNews(page, perPage).then(createNewsMarkup);
// }

// function createNewsMarkup({ articles }) {
//   console.log(articles);
//   const markUp = articles
//     .map(article => {
//       return `<li class='news-api__item'><div class='thumb'><img src='${article.urlToImage}''/></div></li>`;
//     })
//     .join('');

//   refs.newsList.insertAdjacentHTML('beforeend', markUp);
// }

// ! async await

const onSubmit = async e => {
  e.preventDefault();

  const news = await fetchNews(page, perPage);

  createNewsMarkup(news);
};

const fetchNews = async (page, perPage) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=cat&page=${page}&pageSize=${perPage}&apiKey=${API_KEY}`
  );

  return response.json();
};

function createNewsMarkup({ articles }) {
  console.log(articles);
  const markUp = articles
    .map(article => {
      return `<li class='news-api__item'><div class='thumb'><img src='${article.urlToImage}''/></div></li>`;
    })
    .join('');

  refs.newsList.insertAdjacentHTML('beforeend', markUp);
}

refs.searchForm.addEventListener('submit', onSubmit);
// refs.showMoreBtn.addEventListener('click', onShowMore);
