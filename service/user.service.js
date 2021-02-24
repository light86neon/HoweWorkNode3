const fsExtra = require('fs-extra');
const path = require('path')
const fs = require('fs');
const {promisify} = require('util');
const usersPath = path.join(process.cwd(), 'dataBase', 'users.json')

const writeFile = promisify(fs.writeFile);


module.exports = {
    findUsers: async () => {
        const users = await fsExtra.readFile(usersPath);

        return JSON.parse(users.toString());
    },

    findUserById: async (userId)=>{
        const users = await fsExtra.readFile(usersPath);

        return JSON.parse(users.toString())[userId];
    },

    createUser: async (userObject) => {
        users.push(userObject);

        return await writeFile(usersPath, JSON.stringify(users));
    },
    deleteUser: async (userId) => {
        let users = await fsExtra.readJson(usersPath);
        const parse = JSON.parse(users.toString());
        users.splice(userId, 1);

        fsExtra.writeFile(usersPath, JSON.stringify(parse))
        // fsExtra.writeFile(usersPath, users);
    }
}
