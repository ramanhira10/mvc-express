const express = require("express");
const app = express();
const PORT = process.env.port || 80;
const HOST = process.env.host || '0.0.0.0';

/* const userRoutes = require("./src/routes/user");
app.use("/user", userRoutes);
 */

app.get('/', (req, res) => res.json({"message": "Hello restfule api"}));

app.listen(PORT, HOST, () => console.log(`Server is running on http://${HOST}:${PORT}/`));
