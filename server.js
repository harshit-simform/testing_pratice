const app = require("./app");
const PORT = process.env.PORT || 3000;

module.exports = app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
