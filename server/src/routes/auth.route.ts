import { Router } from "express";
import { githubAuth, githubAuthCallback, googleAuth, googleAuthCallback, login, logout, me , refreshToken, register } from '@controllers/auth.controller';

const router = Router();


router.post('/register',register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh-token',refreshToken)
router.get('/me',me)
//Google Authentication routes
router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback);
//Github Authentication routes
router.get('/github', githubAuth);
router.get('/github/callback', githubAuthCallback);



export default router;