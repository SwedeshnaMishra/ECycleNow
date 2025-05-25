import express from 'express'

const app = express()

app.get("/api/v1/test", (req, res) => {
    res.status(200).send({
        success: true,
        message: "Data fetched successfully"
    })
})

app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`)
})