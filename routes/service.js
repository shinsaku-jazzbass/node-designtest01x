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

var titlearr = ['診療科目','一般内科','小児科','皮膚科']

router.get("", (req, res) => {
    res.render('service', {
        layout: './layouts/service',
    })
})

router.get("/:id", (req, res) => {
    var id = req.params.id;
    if(id>=1 && id<=3){
        console.log(id);
        res.render('service2',{
            title: `Service page${titlearr[id-1]}`,
            layout: './layouts/subservice2',
        });
    } else {
        res.sendStatus(404);
    }

})

module.exports = router;
