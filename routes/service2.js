const express = require("express");
const router = express.Router();
const fs = require("fs");

router.use(express.static('public'));
router.use('/css', express.static(__dirname + 'public/css'));
router.use('/images', express.static(__dirname + 'public/images'));
router.use('/js', express.static(__dirname + 'public/js'));

var titlearr = ['一般内科','小児科','皮膚科']

router.get("", (req, res) => {
    res.render('service', {
        layout: './layouts/service',
    })
})

router.get("/:id", (req, res) => {
    console.log("service2/X")
    var id = req.params.id;
    res.render('service2',{
        kamoku: `${titlearr[id-1]}`,
        layout: './layouts/service2',
    });
})

module.exports = router;