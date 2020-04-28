export function normalizedData(items) {
  if (!items || items.length < 1) return [];
  return items.reverse().map(item => {
    return {
      id: item._id,
      title: item.title,
      done: item.done
    };
  })
}

export function filterItems (arr, status, search) {
  function filterItemsByStatus(items, status) {
    if (items.length < 1) return items;
    if (status === 'all') {
      return items;
    } else if (status === 'active') {
      return items.filter((item) => (!item.done));
    } else if (status === 'done') {
      return items.filter((item) => item.done);
    }
  }
  function filterItemsBySearch(items, search) {
    if (search.length === 0 || items.length < 1) return items;
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
  return filterItemsBySearch(filterItemsByStatus(arr, status), search)
}
