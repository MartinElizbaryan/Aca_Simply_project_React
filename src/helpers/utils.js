export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

export const getFirstLetters = (user) => {
  if (user && user.name) return `${user.name[0]}${user.surname[0]}`
}

export const getUserFullName = (user) => {
  if (user && user.name) return `${user.name} ${user.surname}`
}
