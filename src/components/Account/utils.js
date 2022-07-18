export const getNameOfPage = (path) => {
  const splitedPath = path.split("/")
  return splitedPath[splitedPath.length - 1]
    .split("-")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ")
}
