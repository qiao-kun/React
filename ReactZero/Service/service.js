const express = require('express')
const app = express()
app.use((request, response, next) => {
    console.log('正在-请求服务器了');
    console.log('', request.get('Host'));//获取头部请求地址
    // console.log('请求的地址', request.url);
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

app.listen(5000, (err) => {
    if (!err) {
        console.log('http://localhost:5000/students');
        return
    }

})