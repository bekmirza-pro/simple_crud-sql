const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'bekmirza7880',
    database: 'crud_site'
})


module.exports = {
    async GET(req, res) {

        const client = await pool.connect()

        const { rows } = await client.query('SELECT * FROM users')

        client.release()

        res.send(rows)
    },
    async POST(req, res) {

        const { username, userphone } = req.body

        const client = await pool.connect()

        const { rows } = await client.query('INSERT INTO users(user_name, user_phone) VALUES ($1, $2)', [username, userphone])

        client.release()

        res.send("Okey")
    },
    async PUT(req, res) {

        const { username } = req.body
        const { id } = req.params
            // console.log(id);

        const client = await pool.connect()

        const { rows } = await client.query(`UPDATE users SET user_name = '${username}' WHERE user_id = ${id}`)

        client.release()

        res.send("Update ...")
    },
    async DELETE(req, res) {

        const { id } = req.params

        const client = await pool.connect()

        const { rows } = await client.query(`DELETE FROM users WHERE user_id = ${id}`)

        client.release()

        res.send("Delete....")
    }
};