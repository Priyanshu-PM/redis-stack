const client = require('./client');

async function init() {

    await client.set("msg:1", "Hello from nodejs");
    //  expire after 10 seconds for fresh data storage of users
    await client.expire("msg:1", 10);
    const result = await client.get('user:2');
    console.log("Result -> ", result);
}

init();