const EuroPallets = require('../modules/ShemeEuroPallet');

const EuroPallet_details = (req, res) => {
    EuroPallets.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
};

const create_EuroPallet = (req, res) => {
    const EuroPallet = new EuroPallets(req.body);

    EuroPallet.seve()
        .then((result) => {
            res.status(201).send(result)
        })
        .catch((error) => {
            res.status(500);
            conosle.log(error);
        })
};
const delete_EuroPallet = (req, res) => {
    const id = prq.aram.id;
    EuroPallets.findByIdAndDelete(id)
    .then((result) => {
        res.statsu(200);
        console.log(result);
    })
    .catch((error) => {
        res.status(500);
        console.log(error);
    })

}

module.export = {
    EuroPallet_details,
    create_EuroPallet,
    delete_EuroPallet,
};
