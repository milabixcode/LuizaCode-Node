import jwt from 'jsonwebtoken';
import { promisify } from 'util'
import authConfig from '../../config/auth.js';

export default async (req, res, next) => {
    const authHeaders = req.headers.authorization;

    if(!authHeaders){
        return res.status(401).json({ message: "Usuário não logado"})
    }

    const [ , token ] = authHeaders.split(' ');
    
    try {   //tratativa de erro
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);
      req.userId = decoded.id;
      next();
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido'});
    } 
}