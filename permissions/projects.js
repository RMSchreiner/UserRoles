const {ROLE} = require('../data')


function canViewProject(user,project){
    return (
        user.role === ROLE.ADMIN || 
        project.userId === user.id
    )
}

function scopedProjects(user, projects){
    if(user.role === ROLE.ADMIN) return projects
    return projects.filter(project => project.userId === user.id)
}

function canDeleteProject(user, project){
    return project.userId === user.id
}
//can be linked to a button because the function is seperate from the router


module.exports = {
    canViewProject, scopedProjects, canDeleteProject
}