require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

app.listen(4700, () => {
    console.log('Server is running on port 4700');
});

const Watch = mongoose.model('watch', new mongoose.Schema({
    title: String,
    episodes: Number,
    seasons: Number,
    description: String,
    status: String,
}));

app.get('/api/watch', async (req, res) => {
    const watch = await Watch.find();
    res.send(watch);
});

app.post('/api/watch', async (req, res) => {
    const watch = new Watch(req.body);
    await watch.save();
    res.send(watch);
});

//Delete
app.delete('/api/watch/:id', async (req, res) => {
    await Watch.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

//Update
app.put('/api/watch/:id', async (req, res) => {
    const updateWatch = await Watch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updateWatch);
})