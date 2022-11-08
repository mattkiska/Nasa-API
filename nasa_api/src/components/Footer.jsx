import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      <Link color="inherit" href="/">
        NASA API
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          <ul className="links">
            <li className="nasalogo" id="footerlinks">
              <a href="/">
                <img
                  src="https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg"
                  alt="nasa"
                  width="55px"
                  height="55px"
                />
              </a>
            </li>
            <li className="github" id="footerlinks">
              <a href="https://github.com/mattkiska">
                <img
                  src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                  height="55"
                  width="55"
                />
              </a>
            </li>
            <li className="linkedin" id="footerlinks">
              <a href="https://www.linkedin.com/in/matt-kiska">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/49/49408.png"
                  height="55"
                  width="55"
                />
              </a>
            </li>
          </ul>
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
