exports.isAuthenticated = (req, res, next) => {
    if(req.session && req.session.user){
        return next();
    }
    return res.status(401).json({ message : "Unauthorized. Please log in..."});
};

exports.isSuperAdmin = (req, res, next) => {
    if(req.session.user.role === 'Superadmin'){
        return next();
    }
    return res.status(401).json({ message : "Access Denied! Super Admin only..."});
}

exports.isAdmin = (req, res, next) => {
    const role = req.session.user.role; 
    if(role === 'Admin' || role === 'Superadmin'){
        return next();
    }
    return res.status(401).json({ message : "Access Denied! Admins only..."});
}

exports.isUser = (req, res, next) => {
    const role = req.session.user.role;
    if(role === 'User' || role === 'Admin' || role === 'Superadmin'){
        return next();
    }
    return res.status(401).json({ message : "Access Denied! Users only..."})
}