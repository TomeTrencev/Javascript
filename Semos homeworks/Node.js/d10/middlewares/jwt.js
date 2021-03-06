const jwt = require("jsonwebtoken");


const createToken = (username, id) =>{
    return jwt.sign({username, id}, process.env.JWT_SECRET, {
        expiresIn:'3h',
    })
}

const tokenVerifier = (token) =>{
    return jwt.verify(token, process.env.JWT_SECRET);
}

const authMiddleware = async (req,res,next)=>{
    const auth = req.headers.authorization; 
  if (!auth) {
    return res.status(401).json('Unauthenticated!'); 
  }
  const [bearer, token] = auth.split(' ');

  try {
      tokenVerifier(token);
      return next();
  } catch (error) {
      return res.status(500).json(error)
  }

}

module.exports = {
    createToken,
    tokenVerifier,
    authMiddleware
}