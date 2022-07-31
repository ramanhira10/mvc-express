const express = require("express");
const app = express();
const PORT = process.env.port || 5050;

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

const server = app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}/`));