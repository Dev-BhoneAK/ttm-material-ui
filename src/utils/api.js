const newsApi = "http://localhost:8000/news";
const categoriesApi = "http://localhost:8000/categories";
const novelsApi = "http://localhost:8000/novels";
const videosApi = "http://localhost:8000/videos";

export function getHomeData() {
  return Promise.all([
    getPopularNews(),
    getCategories("news"),
    getNovels(),
    getVideos(),
  ]).then(
    ([popularNews, newsCategories, novels, videos]) => {
      return {
        popularNews,
        newsCategories,
        novels,
        videos,
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

export function getLatestNewsByCategories(categoryId) {
  const latestNewsByCategories = fetch(
    newsApi +
      "?_sort=publishedDate&_order=desc&_limit=4&categoryId=" +
      categoryId
  ).then((response) => response.json());
  return latestNewsByCategories;
}

export function getNovels() {
  const novels = fetch(novelsApi + "?_limit=4").then((response) =>
    response.json()
  );
  return novels;
}

export function getVideos() {
  const videos = fetch(videosApi + "?_limit=4").then((response) =>
    response.json()
  );
  return videos;
}

export function getNewsDetail(postId) {
  const newsDetail = fetch(newsApi + "?id=" + postId)
    .then((response) => response.json())
    .then((data) => data[0]);
  return newsDetail;
}
