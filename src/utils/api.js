const newsApi = "http://localhost:8000/news";
const categoriesApi = "http://localhost:8000/categories";

export function getHomeData() {
  return Promise.all([getPopularNews(), getCategories("news")]).then(
    ([popularNews, newsCategories]) => {
      return {
        popularNews: popularNews,
        newsCategories: newsCategories,
      };
    }
  );
}

export function getPopularNews() {
  const popularNews = fetch(
    newsApi + "?_sort=viewCount&_order=desc&_limit=3"
  ).then((response) => response.json());
  return popularNews;
}

export function getCategories(parentCategory) {
  const categories = fetch(
    categoriesApi + "?parentCategory=" + parentCategory
  ).then((response) => response.json());
  return categories;
}
