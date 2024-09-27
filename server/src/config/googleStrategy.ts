import prisma from "@lib/prisma";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

export const setupGoogleStrategy = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await prisma.user.findUnique({
            where: { email: profile.emails![0].value },
          });

          if (user) {
            user = await prisma.user.update({
              where: { id: user.id },
              data: { googleId: profile.id },
            });
          } else {
            user = await prisma.user.create({
              data: {
                email: profile.emails![0].value,
                firstName: profile.name?.givenName ?? "",
                lastName: profile.name?.familyName ?? "",
                username: "",
                googleId: profile.id,
                phoneNumber: "",
                avatar: profile.photos?.[0].value,
                city: "",
                country: "",
                password: "",
              },
            });
          }

          return done(null, user);
        } catch (error) {
          return done(error as Error);
        }
      }
    )
  );
};
