const Mock = require("mockjs")
const list = Mock.mock({
    "list|10": [
        {
            "title": "@ctitle"
            , "img": "@image(80x80,@color)"
            , "num|100-10": 0
        }
    ]
})


module.exports = {
    list: list.list
}