const normalisePath = path =>
  path
    .split('/')
    .filter((item, i) => i < 1 || item)
    .join('/')

module.exports = normalisePath
