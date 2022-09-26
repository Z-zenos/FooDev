/*
  - For Development, address of server is localhost:5000, but when we
    publish our code on a real server, it will be changed to the
    address of a real domain


*/

const BASE_URL = 'http://localhost:5000';

export const FOODS_URL = `${BASE_URL}/api/v1/foods`;
export const FOODS_TAGS_URL = `${FOODS_URL}/tags`
export const FOODS_BY_SEARCH_URL = `${FOODS_URL}/search/`;
export const FOODS_BY_TAG_URL = `${FOODS_TAGS_URL}/`;
export const FOOD_BY_ID_URL = `${FOODS_URL}/`;
