import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "lucas-dev:token",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1B0ok"],
    secure: true,
  }
});

export {
  getSession as getSessionAuth,
  commitSession as commitSessionAuth,
  destroySession as destroySessionAuth,
};