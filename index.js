const express = require("express");
const parser = require("body-parser");
// const mongoose = require('./db/schema.js')
const Child = require("./db/models/Child")
const User = require("./db/models/User")
const cors = require("cors");
const app = express();

app.use(cors());
// // app.set("port", process.env.PORT || 3001);
app.use(parser.json());

// app.get("/", (req, res) => {
//   res.redirect("Hello world");
// });

// Child Controllers and Routes

app.get("/patients", (req, res) => {
  Child.find()
    .then(child => {
      res.json(child);
      console.log(child)
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/patients/:id", (req, res) => {
  Child.findOne({ _id: req.params.id })
    .then(child => {
      res.json(child);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/conditions/new", (req, res) => {
    res.send("Hello World")
  });


app.post("/signup/new", (req, res) => {
  console.log("hitting the right route /signup/new")
  User.create(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/users", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
      console.log(users)
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/user/delete", (req, res) => {
  console.log("HITTING DELETE ON BACK END")
  User.findByIdAndDelete(req.body)
    .then(event => {
      // res.json(event);
      res.redirect("/")
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/user/delete/:id", (req, res) => {
  console.log("HITTING DELETE ON BACK END")
  User.findOneAndRemove({ _id: req.params.id }, req.body)
    .then(event => {
      // res.json(event);
      res.redirect("/")
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/events/delete/:id", (req, res) => {
  Event.findOneAndRemove({ _id: req.params.id }, req.body)
    .then(event => {
      // res.json(event);
      res.redirect("/")
    })
    .catch(err => {
      console.log(err);
    });
});

app.put("/events/update/:id", (req, res) => {
  Event.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      console.log(err);
    });
});

app.put("/conditions/update/:id", (req, res) => {
    console.log("hitting the right route")
    console.log("req.body is", req.body)
    Child.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(child => {
        res.json(child);
      })
      .catch(err => {
        console.log(err);
      });
  });

// Venues Controllers and Routes

app.get("/", (req, res) => {
  res.send("Hello world")
})

app.get("/user", (req, res) => {
  User.find({})
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/venues/:id", (req, res) => {
  Venue.findOne({ _id: req.params.id })
    .then(venue => {
      res.json(venue);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/venues/new", (req, res) => {
  Venue.create(req.body)
    .then(venue => {
      res.json(venue);
    })
    .catch(err => {
      console.log(err);
    });
});

// app.listen(app.get("port"), () => {
//   console.log("Locked and loaded on " + app.get("port"));
// });

app.set('port', process.env.PORT || 3001)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })