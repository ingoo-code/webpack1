const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

// http://localhost:3000/api
app.get('/api',(req,res)=>{
    // DB -> table select -> 객체로 만들어서 응답을 주면
    // insert
    // update
    // delete
    res.json(
        [
            {userid:'web7722',content:'안녕하세요123123',date:'2021-07-15'},
            {userid:'web7722',content:'안녕하세요123123123',date:'2021-07-15'},
            {userid:'web7722',content:'안녕하세요12312312',date:'2021-07-15'},
            {userid:'web7722',content:'안녕하세요12312312312',date:'2021-07-15'},
            {userid:'web7722',content:'안녕하세요3123123123123',date:'2021-07-15'},
            {userid:'web7722',content:'안녕하세요12312312312',date:'2021-07-15'}
        ]
    )
})

app.listen(3000,()=>{
    console.log('server start port 3000')
})