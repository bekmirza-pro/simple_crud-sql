const { Pool } = require('pg');
// const { POST } = require('./UserController');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'bekmirza7880',
    database: 'crud_site'
})

module.exports = {
    async GET(req, res) {

        const { id } = req.params

        const client = await pool.connect()

        const { rows } = await client.query('SELECT * FROM comments WHERE posts_id = $1', [id])

        client.release()

        res.send(rows)
    },
    async POST(req, res) {

        // const { id } = req.params
        const { comment_body, post_id } = req.body

        const client = await pool.connect()

        const { rows } = await client.query('INSERT INTO comments(comment_body, posts_id) VALUES ($1, $2)', [comment_body, post_id])

        client.release()

        res.send("Okkk")
    }
};