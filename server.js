const express = require("express");
const mysql = require("mysql");
const BodyParser = require("body-parser");

const app = express();

app.use(BodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname + "/src"));

const db = mysql.createConnection({
  host: "localhost",
  database: "bracket_generator",
  user: "root",
  password: "",
  // multipleStatements: true,
});

db.connect((err) => {
  if (err) throw err;
  console.log("db connected");

  // -------------- home page
  app.get("/", (req, res) => {
    const getContests = "SELECT * FROM contests WHERE deleted_at IS NULL";
    db.query(getContests, (err, result) => {
      if (err) throw err;
      const contests = JSON.parse(JSON.stringify(result));

      const getTinymce = "SELECT * FROM `key` WHERE `name` = 'tinymce'";
      db.query(getTinymce, (err, result) => {
        if (err) throw err;
        const tinymceResult = JSON.parse(JSON.stringify(result));
        const tinymce = tinymceResult[0];

        res.render("home", { title: "Bracket Generator", contests: contests, tinymce: tinymce });
      });
    });
  });

  // -------------- add contest
  app.post("/add", (req, res) => {
    const insertSql = `INSERT INTO contests (name, created_at, updated_at) VALUES ('${req.body.name}', NOW(), NOW())`;
    db.query(insertSql, (err, result) => {
      if (err) throw err;
      db.query(`INSERT INTO contests_detail (id_contests, created_at, updated_at) values ('${result.insertId}', NOW(), NOW())`, function (err, result, fields) {
        if (err) throw err;
      });
      res.redirect("/");
    });
  });

  // -------------- delete contest
  app.post("/delete", (req, res) => {
    const idContest = req.body.id;
    const checkContestDetail = `SELECT COUNT(*) AS count FROM contests_detail WHERE id_contests = ${idContest} AND deleted_at IS NULL`;

    db.query(checkContestDetail, (err, result) => {
      if (err) throw err;
      const contestDetail = JSON.parse(JSON.stringify(result));
      const exist = contestDetail[0].count > 0;

      if (exist) {
        db.query(`UPDATE contests_detail SET deleted_at = NOW() WHERE id_contests = ${idContest}`, (err, result) => {
          if (err) throw err;
        });
      }

      db.query(`UPDATE contests SET deleted_at = NOW() WHERE id = ${idContest}`, (err, result) => {
        if (err) throw err;
        res.redirect("/");
      });
    });
  });

  // -------------- contest page
  app.get("/detail/:reqid", (req, res) => {
    const id = req.params.reqid;
    const getContest = `SELECT * FROM contests WHERE id = ${id} AND deleted_at IS NULL`;

    db.query(getContest, (err, result) => {
      if (err) throw err;
      const contest = JSON.parse(JSON.stringify(result));
      console.log("🚀 ~ file: server.js:87 ~ db.query ~ contest:", contest);
      const getContestDetail = `SELECT * FROM contests_detail WHERE id_contests = ${id} AND deleted_at IS NULL`;

      db.query(getContestDetail, (err, result) => {
        if (err) throw err;
        const contestDetail = JSON.parse(JSON.stringify(result));
        const notExist = contestDetail == "";
        let contsDetail = notExist ? "" : contestDetail[0];

        res.render("bracket", { contest: contest, contestDetail: contsDetail });
        console.log("🚀 ~ file: server.js:96 ~ db.query ~ contsDetail:", contsDetail);
        console.log("🚀 ~ file: server.js:96 ~ db.query ~ contest:", contest);
      });
    });
    // res.render("not-found");
  });
});

app.listen(7000, () => {
  console.log("server ready in http://localhost:7000");
});
