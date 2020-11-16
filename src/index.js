const express = require( 'express' );
// const { uuid, isUuid } = require( 'uuidv4' );
const { v4: uuidv4} = require('uuid');
const app = express();
app.use( express.json() );
const projects = [];
app.get( '/', (request, response) => {
    return response.json(projects)
})
app.get( '/projects', (request, response) => {
    const { title, owner } = request.query;
    const project = title ? 
        projects.filter( project => project.title.includes(title)) :
        owner ?
        projects.filter( project => project.owner.includes(owner)) :
        projects
    return response.json(project)
})
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