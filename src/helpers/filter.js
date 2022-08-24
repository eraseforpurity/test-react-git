const callbackFilter = (buyer, query) => {
  if (query === "") {
    return buyer;
  } else if (buyer.name.toLowerCase().includes(query.toLowerCase())) {
    return buyer;
  }
};

export const filterBuyers = (query, buyers) => {
  const filtered = buyers.filter((buyer) => callbackFilter(buyer, query));

  return filtered;
};
