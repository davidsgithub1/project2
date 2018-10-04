import express from "express";

import renderer from '../middleware/renderer';
import storeFactory from '../../src/store/storeFactory';

const router = express.Router();
const path = require("path");

const actionIndex = (req, res, next) => {
    const store = storeFactory(localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    renderer(store);
};

router.use('*', actionIndex);

router.use(express.static(
    path.resolve(__dirname, '..', '..', 'build')
));

export default router;