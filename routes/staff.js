const express = require("express");
const router = express.Router();
const fs = require("fs");

// router.use(express.static('../public'));
// router.use('/images', express.static(__dirname + 'public/images'));

//layout.evs上にabout.ejsレンダリング
// router.get('/', (req, res) => {
//     res.render('info',{
//         title: "当院について",
//         layout: './layouts/info',
//     });
// });

var staffarr = ['小林新作','工藤和基地','南山冬馬','田中太朗']

router.get("", (req, res) => {
    res.render('staff', {
        staffname: staffarr,
        layout: './layouts/staff',
    })
})

router.get("/:id", (req, res) => {
    var id = req.params.id;
    res.render('staff',{
        title: '',
        layout: './layouts/staff',
    });
})

module.exports = router;