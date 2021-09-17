import * as Express from 'express'
import session from 'express-session'
import requestHandler from '../util/reqhandler'
export default (app: any) => {
app.use(Express.static('public'))
app.use(requestHandler)
app.engine('html', require('ejs-locals'));
app.use(session({
    secret: `fojwbowubfouwbfouwbfowuebfowuebfwouefbowfubweoufbweoufbwoefbuwoefub`,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 48 * 60 * 60 * 1000,
    },
}))
app.set('trust proxy', 1)
}
