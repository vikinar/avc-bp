const pool = require('../../lib/db');

export default async (req, res) => {
    try {
//         const data = {
//             title: 'Պատմություն',
//             shortDescription: String,
//             featuredImage: String,
//             sections: [
//                 {
//                     layoutStyle: `single-image`, // {singlePost, gallery, video},
//                     content: [`<strong>Հայոց պատմություն</strong> կամ հայ ժողովրդի պատմություն, հայ էթնոսի պատմություն, որը ժամանակագրական առումով բաժանվում է մի քանի դարաշրջանների։ Այդ բաժանումն անվանում են պարբերացում։ Ներկայումս Հայոց պատմության պարբերացումը կատարվում է հետևյալ սկզբունքով. <ul style="list-style: initial; list-style-position: inside">
// <li>Հնագույն շրջան - անհիշելի ժամանակներից մինչև Վանի թագավորության անկումը</li><li>Հին շրջան - Երվանդունիների թագավորության կազմավորումից մինչև քրիստոնեության հռչակումը պետական կրոն</li>
// <li>Միջնադար - քրիստոնեությունը պետական կրոն հռչակելուց մինչև հայ ազգային-ազատագրական շարժման վերելքը (վաղ, զարգացած և ուշ միջնադար)</li>
// <li>Նոր շրջան - սկսվում է հայ ազատագրական շարժումներով և հասնում մինչև Հայաստանի առաջին Հանրապետության հռչակումը։</li>
// </ul>`], // {html}
//                     images: [
//                         {
//                             src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Map_of_historical_Armenia%2C_1849.jpeg/1024px-Map_of_historical_Armenia%2C_1849.jpeg',
//                             title: 'Հայկական լեռնաշխարհ',
//                             caption: ''
//                         }
//                     ], // [urls]
//                     video: String,
//                     audio: Array,
//                 }
//             ]
//         }
//         const post = data !== '' ? await pool.query(`INSERT INTO section (data, topic_id, section_title) VALUES($1, 1, 'Պատմություն')`, [data]) : null;
        const get = await pool.query(`SELECT * FROM section`)
        res.status(200).json(get.rows.map(item => ({id: item.section_id, desc: JSON.parse(item.data)})));
        //res.status(200).json(data)
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
};
