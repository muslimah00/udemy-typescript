// Change from named imports
// import { Router, Request, Response, NextFunction } from 'express';
// To default import with type imports
import express from 'express';
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
const router = express.Router(); // ← Use express.Router() instead of Router()
// ... rest of your routes remain the same ...
router.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('Welcome to protected route, logged in user');
});
export { router };
//# sourceMappingURL=loginRoutes.js.map