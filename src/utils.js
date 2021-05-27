const paginate = (e) => {
  const peoplePerPage = 10;
  const allPages = Math.ceil(e.length / peoplePerPage);

  const newArr = Array.from({ length: peoplePerPage }, (_, index) => {
    const start = index * peoplePerPage;
    return e.slice(start, start + peoplePerPage);
  });
  return newArr;
};

export default paginate;
