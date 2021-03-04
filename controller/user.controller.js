const userService = require('../service/user.service');

const errorMessage = require('../error/error.messages');
const errorCodes = require('../constant/errorCodes.enum');

module.exports = {
    JsonParser: (req, res) =>{
       console.log(req.body);

    try{
        if (!req.body) return res.sendStatus(errorCodes.BAD_REQUEST);
       res.json(request.body);

    } catch (e) {

        res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
},
    getAllUsers: async (req, res) =>{
        try{
            const users = await userService.findUsers();

            res.json(users);

        }catch(e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req,res) =>{
        try {
           res.json(req.user);

        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req,res)=>{
        try {
            const {preferLang = 'en'} = req.body;
           await user.Service.createUser(req.body);

        } catch (e) {
            res.status(errorCodes.CREATED).json(errorMessage.CREATED_USER[preferLang]);
        }
    },
    deleteOneUser: async (req, res) => {
        try {
            const {preferLang = 'en'} = req.body;
            const {userId} = req.params;

          await userService. deleteUser+(userId);

            res.status(errorCodes.DELETED).json(errorMessage.DELETE_USER [preferLang]);
        } catch (e) {
            res.status(error.BAD_REQUEST).json(e.message);
        }
    },

};
