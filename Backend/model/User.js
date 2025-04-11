const db = require("../config/database");

exports.login = (email, password, callback) => {
  try {
    const sql = "Select * from users where email = ? and password = ?";
    db.query(sql, [email, password], (err, result) => {
      if (err) return callback(err, null);
      if (result.length === 0)
        return callback(new Error("Invalid Credentials!"), null);

      callback(null, result[0]);
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

exports.register = (username, email, password, role, callback) => {
    try {
        const sql = "Insert into users (username, email, password, role) values(?,?,?,?)";
        db.query(sql, [username, email, password, role], (err, result) => {
            if (err) return callback(err, null);
            callback(null, { id: result.insertId, email });
        });
    } catch (error) {
        return res.status(500).json({ message : "Internal Server Error!" });
    }
}

exports.addUser = (username, email, password, role, callback) => {
    try {
        const sql = "Insert into users(username, email, password, role) values(?,?,?,?)";
        db.query(sql, [username, email, password, role], (err, result) => {
            if (err) return callback(err, null);
            callback(null, { id: result.insertId, email });
        });
    } catch (error) {
        return res.status(500).json({ message : "Internal Server Error!" });
    }
}

exports.getAllUsers = (callback) => {
    try {
        const sql = "Select * from users";
        db.query(sql, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        });
    } catch (error) {
        return res.status(500).json({ message : "Internal Server Error!" });
    }
}

exports.getUserById = (id, callback) => {
    try {
        const sql = "Select * from users where id = ?";
        db.query(sql, id, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        })
    } catch (error) {
        return res.status(500).json({ message : "Internal Server Error!" });
    }
}

exports.deleteUser = (id, callback) => {
    try {
        const sql = "Delete from users where id = ?";
        db.query(sql, id, callback); 
    } catch (error) {
        return res.status(500).json({ message : "Internal Server Error!" });
    }
}

exports.updateUser = (id, userData, callback) => {
    try {
        const { username, email, password } = userData;
        const sql = "Update users set username = ?, email = ?, password = ? where id = ?";
        db.query(sql,[username, email, password, id], (err, result) => {
            if (err)  return callback(err, null);
            callback(null, result);
        });
    } catch (error) {
        return res.status(500).json({ message : "Internal Server Error!" });
    }
}