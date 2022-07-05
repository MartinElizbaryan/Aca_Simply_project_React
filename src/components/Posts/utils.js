export const getParamsFromFiltering = (params) => {
  const categories = []
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      categories.push(key)
    }
  })
  return { category: categories }
}
