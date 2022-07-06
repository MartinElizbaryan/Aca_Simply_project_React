export const getParamsFromFiltering = (params) => {
  const p = Object.keys(params).filter((key) => params[key])
  return { category: p }
}
