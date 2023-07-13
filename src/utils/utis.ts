const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID as string;
const DATASET = "production";
// const QUERY = encodeURIComponent('*[_type == "pet"]');
const URL = (query: string) =>
  `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${query}`;
export { URL };
