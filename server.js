const express = require("express");
const routes = require("./controllers/");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "abc",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

app.use(session(sess));

const helpers = require("./utils/helper");
const hbs = exphbs.create({ helpers });

// var fs = require('fs');
 
// const db = require('./config/connection');

// const Image = db.images;
  
// // force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   	//Give any image name here.
// 	var imageData = fs.readFileSync(__dirname + '');
// 	Image.create({
// 		type: 'file',
// 		name: 'image',
// 		data: imageData
// 	}).then(image => {
// 		try{
// 			fs.writeFileSync(__dirname + '', image.data);		
			
// 			// exit node.js app
// 			process.exit(0);
// 		}catch(e){
// 			console.log(e);
// 		}
// 	})
// });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
