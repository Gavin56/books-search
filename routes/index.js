const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes  (initially comes here. enters the api routes when hit)
router.use("/api", apiRoutes);

// * route Will load single HTML page in client/build/index.html
// router.use("*")
//     .get()   |  * route?
//              V


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;