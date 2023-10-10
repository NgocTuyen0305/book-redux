import queryString from "query-string";

export const queryParams = ({ _page, _limit, _sort, _order, _search }) => {
  const queryParams = {
    _page,
    _limit,
    _sort,
    _order,
    _search,
  };
  Object.keys(queryParams).forEach((key) => {
    if (queryParams[key] === undefined || queryParams[key] === "") {
      delete queryParams[key];
    }
  });
  return queryString.stringify(queryParams);
};
