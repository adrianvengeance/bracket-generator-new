const express = require("express");
const mysql = require("mysql");
const BodyParser = require("body-parser");

const app = express();

app.use(BodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

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
      const contests = JSON.parse(JSON.stringify(result));
      res.render("home", { title: "Bracket Generator", contests: contests });
    });
  });

  // -------------- add contest
  app.post("/add", (req, res) => {
    const insertSql = `INSERT INTO contests (name, detail, created_at, updated_at) VALUES ('${req.body.name}', '${req.body.detail}', NOW(), NOW())`;
    db.query(insertSql, (err, result) => {
      if (err) throw err;
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
  app.get("/:contest", (req, res) => {
    const getContest = `SELECT * FROM contests_detail WHERE id_contests = ${req.params.contest}`;
    res.render("not-found");
  });
});

app.listen(7000, () => {
  console.log("server ready in http://localhost:7000");
});
