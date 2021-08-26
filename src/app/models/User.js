import Sequelize, { Model } from 'sequelize';
import { username } from '../../config/database';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            employee: Sequelize.BOOLEAN,    
        },
        {
            sequelize,
        });
        this.addHook('beforeSave', async user => {
            if(user.password) {
           user.password_hash = await bcrypt.hash(user.password, 10)
        }
    })
    return this;
    }

} 
    export default User