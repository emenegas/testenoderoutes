exports.post = (req, res, next)=>{
    res.status(201).send('Requisição recebida')
}

exports.put = (req, res, next) =>{
    let id = req.params.id
    res.status(201).send('Requisição recebida')

}

exports.delete = (req, res, next)=>{
    let id = req.params.id
    res.status(200).send('Requisição recebida com sucesso Del')
}