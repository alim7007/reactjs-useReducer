const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');


app.use(cors())
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        res.status(200).json([
            {
                "name": "olim",
                "surname": "Fathulloev"
            },
            {
                "name": "qwe",
                "surname": "123"
            },
            {
                "name": "asd",
                "surname": "3554"
            },
            {
                "name": "zcx",
                "surname": "567"
            },
        ])
    } catch (error) {
        res.status(500).json({ err: msg.error })
    }
})

app.get("/qaz", async (req, res) => {
    try {
        res.status(200).json([
            {
                "IDI_Nakhuy": 'sam IDI nakuy'
            },
            {
                "IDI_Nakhuy": 'sam IDI nakuy'
            },
            {
                "IDI_Nakhuy": 'sam IDI nakuy'
            },
            {
                "IDI_Nakhuy": 'sam IDI nakuy'
            },
        ])
    } catch (error) {
        res.status(500).json({ err: msg.error })
    }
})

app.listen(port, () => {
    console.log(`Server started succesfully on port ${port}`)
})