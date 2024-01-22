import jwt  from "jsonwebtoken";

const authJwt = {
    verifyToken: (req, res, next) => {
        let token = req.cookies?.token;

        if (!token) {
            return res.status(403).send({
                message: "No token provided",
            });
        }

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized"
                });
            }

            req.isAdmin = decoded.adminId || false;
            next();
        });
    },

    isAdmin : (req, res, next) => {
        if (req.isAdmin) {
            return next();
        } else {
            return res.status(403).send({
                message: "Require Admin Role!"
            });
        }
    }
}

export default authJwt;