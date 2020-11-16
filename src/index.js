const express = require( 'express' );
// const { uuid, isUuid } = require( 'uuidv4' );
const { v4: uuidv4} = require('uuid');
const app = express();
app.use( express.json() );
const projects = [];
app.post( '/projects', (request, response) => {
    const { title, owner } = request.body;
    const project = {
        id: uuidv4(),
        title,
        owner
    }
    projects.push(project)
    return response.json(project)
})
app.listen( 3333, () => {
    console.log('Backend Started!')
});