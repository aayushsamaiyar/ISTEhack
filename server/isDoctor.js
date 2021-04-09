const isDoctor = (req, res, next) => {

    if (req.user.role == "Doctor") {
        next();
    }
    else {
        res.status(401).json({ message: "You are not a Doctor" })
    }

}

module.exports = isDoctor;