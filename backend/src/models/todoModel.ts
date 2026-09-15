import pool from '../config/db.js';

export const TodoModel = {
    getByUserId: async (userId: number) => {
        const [rows] = await pool.query('SELECT * FROM todos WHERE user_id = ?', [userId]);
        return rows;
    },

    create: async (userId: number, task: string) => {
        const [result]: any = await pool.query(
            'INSERT INTO todos (user_id, task) VALUES (?, ?)',
            [userId, task]
        );
        return result.insertId;
    },

    delete: async (userId: number, id: number) => {
        const [result]: any = await pool.query(
            'DELETE FROM todos WHERE id = ? AND user_id = ?',
            [id, userId]
        );
        return result.affectedRows;
    }
};