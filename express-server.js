const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.get('/prayer-requests', (req, res) => {
    res.send([
        {
            id: 1,
            title: 'The Struggle Is Real',
            request: 'My kids will eat their dinner',
        },
        {
            id: 2,
            title: 'A Real First-World Problem',
            request: 'The grocery store would receive a shipment of toilet paper',
        },
        ]);
});

app.listen(8000, () => console.log('server started'));