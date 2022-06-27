export const getParamsFromFiltering = (params) => {
  const paramsArray = []
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      paramsArray.push(["category", key])
    }
  })
  return paramsArray
}

export const getParamsCustomVersion = (params, ...toBeArray) => {
  const data = {}
  params.forEach((param) => {
    const key = param[0]
    const value = param[1]
    if (toBeArray.includes(param[0])) {
      if (key in data) {
        data[key].push(value)
      } else {
        data[key] = [value]
      }
    } else {
      data[key] = value
    }
  })

  return data
}
