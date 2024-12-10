const express = require("express");
const router = express.Router();
const fs = require("fs");

router.use(express.static("public"));
router.use("/css", express.static(__dirname + "public/css"));
router.use("/images", express.static(__dirname + "public/images"));
router.use("/js", express.static(__dirname + "public/js"));
var titlearr = ["当院について", "初診の方へ", "院長挨拶"];

let data = {
  title: "ホーム",
  title2: "当院について",
  title3: "診療項目",
  title4: "スタッフ紹介",
  title5: "よく頂く質問",
  title6: "アクセス",
  title7: "採用情報",
  title8: "お問合せ",
};

let hospitem = {
  tel: "03-0000-0000",
  uketime: "AM10:00-PM5:00",
};

let hiduke = "2024/11/29";
let kubun = `<span class="icon-bg1">重要</span>`;
let detail = `  病院・歯科医院（クリニック）サイト向け
無料ホームページテンプレート tp_clinic6公開。`;
//診療案内のキャプション
let caption = [
  ["一般内科", "小児科", "皮膚科"],
  [
    "風邪、インフルエンザ、高血圧、糖尿病などの診療を行います。",
    "子どもの健康管理、予防接種、成長発達のチェックを行います。",
    "皮膚の健康問題、湿疹、にきび、アレルギーなどを診療します。",
  ],
];
console.log(caption);
let caption1 = {
  title1: caption[0][0],
  caption1: caption[1][0],
};
let caption2 = {
  title1: caption[0][1],
  caption1: caption[1][1],
};
let caption3 = {
  title1: caption[0][2],
  caption1: caption[1][2],
};
let ippan =
  `<h4>` +
  caption[0][0] +
  `</h4>
<p>
  ` +
  caption[1][0] +
  `
</p>`;

let hiduke2 = "2024/11/20";
let kubun2 = `<span class="icon-bg1">重要</span>`;
let detail2 = `  病院・歯科医院（クリニック）サイト向け
無料ホームページテンプレート tp_clinic6公開。`;

let osirase = {
  osirase1:
    `   <dt>` +
    hiduke +
    kubun +
    `</dt>
  <dd>
  ` +
    detail +
    `
  </dd>`,

  osirase2:
    `   <dt>` +
    hiduke2 +
    kubun2 +
    `</dt>
<dd>
` +
    detail2 +
    `
</dd>`,
};

// console.log(title);
//layout.evs上にabout.ejsレンダリング
router.get("/", (req, res) => {
  console.log("ok");
  res.render("index", {
    data,
    hospitem,
    caption1,
    caption2,
    caption3,
    osirase,
    layout: "./layouts/index",
  });
});

// router.get('/:id', (req, res) => {
//     console.log("ok?");
//     res.render('index',{
//         title:  "ホーム",
//         layout: './layouts/index2',
//     });
// });

module.exports = router;
