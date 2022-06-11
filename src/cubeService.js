const cubes = require(`./db.json`)
const Cube = require('./models/Cube')

exports.create = (data) => Cube.create(data)

exports.getAll = (queryString) => {
    let { search, from, to } = queryString
    from = Number(from) || 0
    to = Number(to) || 7
    if (search == undefined) {
        search = ""
    }
    let result = cubes
        .filter(x =>
            x.name.toLowerCase().includes(search.toLowerCase())
            && x.difficultyLevel >= from
            && x.difficultyLevel <= to)
    return [result, search, from, to]
}