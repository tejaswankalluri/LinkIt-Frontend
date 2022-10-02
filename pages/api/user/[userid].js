import conn from '../../../util/db';

const user = async (req, res) => {
    try {
        const query = `SELECT username,email,links from "Users" WHERE username=$1`;
        const values = [req.query.userid];
        const result = await conn.query(query, values);
        // console.log('ttt', result);
        return res.send(result.rows[0]);
    } catch (error) {
        console.log(error);
    }
};
export default user;
