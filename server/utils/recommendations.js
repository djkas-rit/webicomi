// Function for getting comic recommendations based on user preferences.
// Will be replaced with a more advanced algorithm in the future.
exports.getRecommendations = (userPreferences, allComics) => {
  allComics.filter((comic) => comic.genres.some((genre) => userPreferences.includes(genre)));
};
