import express from "express";
import cookieParser from "cookie-parser";
import ownerRouter from "./modules/ipl-ms/routes/owner.routes.js";
import teamRouter from "./modules/ipl-ms/routes/team.routes.js";
import playerRouter from "./modules/ipl-ms/routes/player.routes.js";
import sponsorRouter from "./modules/ipl-ms/routes/sponsor.routes.js";
import broadcasterRouter from "./modules/ipl-ms/routes/broadcaster.routes.js";
import matchesRouter from "./modules/ipl-ms/routes/match.routes.js";
import teamSponsorRouter from "./modules/ipl-ms/routes/team-sponsor.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//test route
app.get("/", (req, res) => {
  res.json({ message: "IPL Management API is running" });
});

app.use("/api/owners", ownerRouter);
app.use("/api/teams", teamRouter);
app.use("/api/players", playerRouter);
app.use("/api/sponsors", sponsorRouter);
app.use("/api/broadcasters", broadcasterRouter);
app.use("/api/matchs", matchesRouter);
app.use("/api/team-sponsors", teamSponsorRoter);
export default app;
