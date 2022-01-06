const router = require('express').Router()
const tovisitCtrl = require('../controllers/tovisitCtrl')
const auth = require('../middleware/auth')

// router.route('/tovisits')
//     .post(auth, tovisitCtrl.createTovisit)
//     .get(auth, tovisitCtrl.getTovisit)

router.route('/tovisit/:id')
    .post(auth, tovisitCtrl.createTovisit)
    .patch(auth, tovisitCtrl.updateTovisit)
    .get(auth, tovisitCtrl.getTovisit)
    .delete(auth, tovisitCtrl.deleteTovisit)

module.exports = router