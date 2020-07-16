const { Router } = require('express');

const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Andrew",
        "lastNAme": "Alfaro"
    };
    res.json(data);
});

module.exports = router;