const getParamByName = (name) => {
  return new URLSearchParams(window.location.search).get(name)
}

export { getParamByName }
