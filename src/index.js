import result from "./api.js";
const API_KEY = `720c0314e8b2423eb7e1ffca5a1eeeb1`;
const channel = "bbc-news";
const URL = `https://newsapi.org/v1/articles?source=${channel}&apiKey=${API_KEY}`;
const newsBtn = document.getElementById("newsBtn");
newsBtn.addEventListener("click", () => {
  result.fetchingNews(URL);
});
