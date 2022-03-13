var express = require('express');
const { Pool, Client } = require("pg");

const credentials = {
    user: "postgres",
    host: "localhost",
    database: "xboxdatabase",
    password: "pwd",
    port: 5432,
};

async function clientDemo() {
    const client = new Client(credentials);
    await client.connect();
    const now = await client.query("SELECT NOW()");
    await client.end();

    return now;
}

var app = express();

app.get('/products', async function (req, res) {
    const pool = new Pool(credentials);
    const q = `SELECT * FROM store`;
    const result = await pool.query(q);
    await pool.end()
    res.end(JSON.stringify({ data: result.rows }))
})

var server = app.listen(8081, async function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

    const clientResult = await clientDemo();
    console.log("Time with client: " + clientResult.rows[0]["now"]);
})