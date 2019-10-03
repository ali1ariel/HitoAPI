const Pessoa = require('../models/Person');

module.exports = {

  async index(req, res) {
    const pessoas = await Pessoa.find()
    return res.json(pessoas);
  },


  async show(req, res) {

    const pessoaVer = await Pessoa.findOne({
      CPF: req.params.CPF
    })

    return res.json(pessoaVer);

  },



  async store(req, res) {

    const { nome, CPF, email, CEP, numero } = req.body;

    const userExists = await Pessoa.findOne({
      CPF: CPF
    });
    // Se o já existe um usuario com o CPF, retorna o usuário existente.
    if (userExists) {
      return res.json(userExists);
    }

    const pessoa = await Pessoa.create({
      nome,
      CPF,
      email,
      CEP,
      numero
    })

    return res.json(pessoa);
  },

  async remove(req, res) {

    pessoaParaDeletar = await Pessoa.findOne({
      CPF: req.params.CPF
    });

    await Pessoa.deleteOne( pessoaParaDeletar, (err) => {
      if (err) {
        console.log(err)
      }
    });

    return res.json(pessoaParaDeletar)

  },

  async edit(req, res) {

    const { nome, CPF, email, CEP, numero } = req.body;

    const pessoaExistente = await Pessoa.findOne({
      CPF: CPF
    });

    if (!pessoaExistente) {
      return res.json({
        'erro': 'usuario não existe'
      });
    }

    const pessoa = await Pessoa.updateOne(pessoaExistente, {
      nome,
      CPF,
      email,
      CEP,
      numero
    }, (err) => {
      if (err) {
        console.log(err)
      }
    });

    return res.json(pessoa);
  }
};