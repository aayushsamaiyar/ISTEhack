const isPatient = (req,res,next) => {
    if (req.User.role == "Patient"){
        next();
    }
    else{
        res.status(401).json({message: "you are not a Patient!! please REGISTER."});
    }
}

module.exports = isPatient;
