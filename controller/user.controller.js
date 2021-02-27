const userService = require('../service/user.service');

const errorMessage = require('../error/error.messages');
const errorCodes = require('../constant/errorCodes.enum');

module.exports = {
    JsonParser:(req, res) =>{
        console.log(request.body);

    try{
        if (!request.body) return response.sendStatus(errorCodes.BAD_REQUEST);
        response.json(request.body);

    } catch (e) {

        res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
},
    getAllUsers: (req,res) =>{
        try{
            const users = userService.findUsers();

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
            const {userId} = req.params;

            userService. deleteUser+(userId);

            res.status(errorCodes.DELETED).json(errorMessage.DELETE_USER [preferLang]);
        } catch (e) {
            res.status(error.BAD_REQUEST).json(e.message);
        }
    },

};
