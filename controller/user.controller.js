const userService = require('../service/user.service')

const errorMessage = require('../error/error.messages');
const errorCodes = require('../constant/errorCodes.enum');

module.exports = {
    JsonParser:(req, res) =>{
        console.log(request.body)

    try{
        if (!request.body) return response.sendStatus(400)
        response.json(request.body);

    } catch (e) {

        res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
},

    findOneAndDelete: (req, res) =>{
        try{
            const {preferLang = 'en'} = req.body;
            const { users } = req.params;

        } catch (e) {

           res.send(errorMessage.DELETE_USER[preferLang]);
        }
    },

    getAllUsers: async (req,res) =>{
        try{
            const users = await userService.findUsers();

            res.json(users);

        }catch(e) {

            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser:(req,res) =>{
        try {
            res.json(req.user);

        } catch (e) {

            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    createUser:(req,res)=>{
        try {
            const {preferLang = 'en'} = req.body;
            user.Service.createUser(req.body);

        } catch (e) {

            res.status(errorCodes.CREATED).json(errorMessage.CREATED_USER[preferLang]);
        }
    },
    deleteOneUser: (req, res) => {
        try {
            const {preferLang = 'en'} = req.body;

            userService. deleteUser(req.params);

            res.status(errorCodes.DELETED).json(errorMessage.DELETE_USER [preferLang]);
        } catch (e) {

            res.status(error.BAD_REQUEST).json(e.message);

        }
    },

};
