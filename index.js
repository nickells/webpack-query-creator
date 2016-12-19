function loaderWithQuery(name, object){
  return `${name}?${JSON.stringify(object)}`
}

module.exports = loaderWithQuery