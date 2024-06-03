const express = require('express')
const axios = require('axios')

const client = require('./client')

const app = express();

app.get('/', async (req, res) => {

    //  implementing redis server
    const cacheValue = await client.get('todos');

    if(cacheValue)  return res.json(JSON.parse(cacheValue));


    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

    //  setting data to redis server
    await client.set('todos', JSON.stringify(data));
    //  expire after 30 seconds for fresh data storage of users
    await client.expire('todos', 30);

    return res.json(data);
})

app.listen(9000, () => console.log("server started"));