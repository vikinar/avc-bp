const pool = require('../../../lib/db');

export default async (req, res) => {
    const {query: { post }} = req

    try {
        const get = await pool.query(`SELECT * FROM section WHERE section_id=${post}`)
        res.status(200).json(get ? get.rows.map(item => ({id: item.section_id, desc: JSON.parse(item.data)})) : res.status(404));
        //res.status(200).json(data)
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }

    res.end(`Post: ${post}`)
}