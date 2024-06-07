// Je vais importer mon client de connexion à PG
const client = require("../client");
const dataMapper = require("../dataMapper");

const adminController = {
  addStudent: async (req, res, next) => {
    try {
      const promoList = await dataMapper.getAllPromos();
      res.render("addStudent", { promoList });
    } catch (error) {
      console.log(error);
      res.status(500).send("Erreur lors de la récupération des promos");
      client.end();
    }
  },
};

module.exports = adminController;
