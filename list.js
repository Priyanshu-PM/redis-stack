const client = require('./client');

async function init() {

    // await client.lpush("messages", "Hello from nodejs");
    // await client.lpush("messages", "2 hello");
    // await client.lpush("messages", "3 hello");

    const result = await client.lrange('messages', 0, -1);
    // const result = await client.blpop('messages', 10);

    //  different functions of redis client
    const res = await client.keys('user:*');

    console.log("res - ", res);
    console.log('result -> ', result);
}

init();