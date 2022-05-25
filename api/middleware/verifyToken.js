import jwt from 'jsonwebtoken'

export const verifyToken =(req,res,next)=>{
    //const authHeader =  req.header("Authorization");
   const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token , process.env.JWT_SECRET , (err,user)=>{
            if(err) return res.status(403).json('token is not valid');
            req.user=user;
            next();
        })
    } else{
        return res.status(401).json('you are not authenticated')
    }
}

export const verifyTokenAndAuth =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else{
            res.status(403).json('you are not alowed to that !');
        }
    });
}

export const verifyTokenAndAdmin =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        } else{
            res.status(403).json('you are not alowed to that !');
        }
    });
}