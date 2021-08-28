//jwt carrega informações, autentica o usuário e entrega um token ao usuário
import jwt from 'jsonwebtoken';
//User da minha model
import User from '../models/User';
import authConfig from '../../config/auth';


class SessionController{
    async store(req, res){
        const { email, password } = req.body;
//user local
        //vai até o banco de dados e vê se encontra o email (FindOne retorna o primeiro valor que encontrar - 
        //existe o email que estou passando? retorna booleano: true ou false)
        const user = await User.findOne({
            where: { email }
        });

        //O usuário existe no banco de dados?
        if(!user){
            return res.status(401).json({ message: 'O usuário não está cadastrado'});
        };
        
        //const tester = bcrypt.compare(bcrypt.hash(password, 10),user.password_hash).then(
        //console.log('Compare', tester))

        //Negando a função. A senha está correta?
        if(!(await user.checkPassword(password))){
           return res.status(400).json({message: 'Senha incorreta'});
        }

        const { id, name } = user;
        return res.json({
            user: { 
                id, 
                name, 
                email
            },
            token: jwt.sign({ id, name, email }, authConfig.secret, {
                expiresIn: authConfig.expiresIn, 
            })
        });
    }
}

export default new SessionController();