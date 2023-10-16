const express = require('express')
const app = express()
app.use((request, response, next) => {
    console.log('正在-请求2服务器了');
    next()
})
app.get('/students', (request, response,) => {
    const students = [
        { id: "001", name: '崔赛豪', age: 18 },
        { id: "002", name: '那你呢', age: 18 },
        { id: "003", name: '阿斯顿', age: 18 }
    ]
    response.send(students)
})

app.listen(5001, (err) => {
    console.log(err)
    if (!err) {
        console.log('http://localhost:5001/students');
        return
    }

})