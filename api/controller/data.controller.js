const Router = require("express").Router()


Router
    .route("/data")
    .get(async (req, res) => {
        
        return res.json({ status: "success", msg: "Routes Are Working Successfully!" })
    })

module.exports = Router