class DataSource {
  static searchMealByName(query) {
    return fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.meals) {
          return Promise.resolve(jsonResponse.meals);
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(`${query} not found`);
      })
      .catch((e) => e);
  }
}

export default DataSource;
