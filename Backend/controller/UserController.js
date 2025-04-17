const User = require('../model/User');

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email And Password Required!" });
    }

    User.login(email, password, (err, result) => {
        if (err) return res.status(401).json({ message: err.message });
        if (!result) return res.status(401).json({ message: "Invalid Credentials" });

        req.session.user = {
            id: result.id,
            username: result.username,
            email: result.email,
            password: result.password,
            role: result.role,
            createdBy : result.created_by
        };

        return res.status(200).json({ message: "User login Successful", user: req.session.user });
    });
};


const db = require("../config/database");
exports.register = (req, res) => {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const getMaxIdQuery = "Select MAX(id) AS maxId FROM users";
    db.query(getMaxIdQuery, (err, results) => {
        if (err) return res.status(500).json({ message: "Failed to get max id", error: err });
        
        const maxId = results[0].maxId || 0;
        const newId = maxId + 1;

        User.register(newId, username, email, password, role, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            res.status(200).json({ message: "User registered successfully", result });
        });
    });
};


exports.addUser = (req, res) => {
    const { username, email, password, role, created_by } = req.body;

    if (!username || !email || !password || !role || !created_by) {
        return res.status(400).json({ message: "All fields are required" });
    }

    User.register(username, email, password, role, created_by, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "User added successfully", result });
    });
}

exports.getAllUsers = (req, res) => {
    User.getAllUsers((err, result) => {
        if (err) return res.status(500).json({ message : "Internal Server Error!" });
        res.status(200).json({ message : "List Of Users are: ", result });   
    });
}

exports.getUserById = (req, res) => {
    const { id } = req.params;
    User.getUserById(id, (err, result) => {
        if (err) return res.status(500).json({ error : err.message });
        if( result.length === 0){
            return res.status(404).json({ message : "User not found!" });
        }
        res.status(200).json(result[0]);
    });
}

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User.deleteUser(id, (err, result) => {
        if(err) return res.status(500).json({ error : err.message });
        if( result.length === 0){
            return res.status(404).json({ message : "User not found!" });
        }
        res.status(200).json({ message : "User Deleted Sucessfully..", result });
    });
}

exports.updateUser = (req, res) => {
    const { id } = req.params;
    User.updateUser(id, req.body, (err, result) => {
        if(err) return res.status(500).json({ error:err.message });
        if( result.length === 0){
            return res.status(404).json({ message : "User not found!" });
        }
        res.status(200).json({ message : "User Updated Successfully...", result });
    });
}
