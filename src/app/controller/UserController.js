import User from '../models/User'

class UserController{
  async store(req, res){
    const { id, name, email } = await User.create(req.body);
    return res.json({ id, name, email });
  };
  async index(req, res){
    const person = {
      name: "Camila",
      age: 21,
      email:'camila@email.com'
    }
    return res.status(200).json(person);
  }
  async delete(req, res){
    return res.status(200).json({ message: 'Isso aí psiti!'});
  }
  async update(req, res){
    return res.status(200).json({ message: 'Isso aí psiti!'});
  };
}

export default new UserController();