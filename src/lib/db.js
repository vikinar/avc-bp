const {Pool}  = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'vikinar',
    host: 'localhost',
    port: 5432,
    database: 'avcbp'
})

module.exports = pool


// CREATE DATABASE BP;
// CREATE TABLE section (section_id serial PRIMARY KEY, topic_id VARCHAR(50) NOT NULL, section_title VARCHAR(255) NOT NULL, updated_on timestamp default CURRENT_TIMESTAMP, section_type VARCHAR (50), data TEXT, development smallint(1) NOT NULL DEFAULT 1, disable_array_add bit(1) DEFAULT NULL, no_additional_properties bit(1) DEFAULT NULL, disable_edit_json bit(1) DEFAULT NULL, disable_properties bit(1) DEFAULT NULL, disable_array_delete bit(1) DEFAULT NULL, disable_array_reorder bit(1) DEFAULT NULL, disable_collapse bit(1) DEFAULT NULL, disable_modify int(11) NOT NULL DEFAULT 0);
