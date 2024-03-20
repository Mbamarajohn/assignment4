const express = require('express');
const controller = require ('./controller')

const authorsRouter = express.Router();


authorsRouter.get('/',controller.getAuthors);

authorsRouter.post('/',controller.postAuthor);

authorsRouter.put('/',controller.updateAuthors);

authorsRouter.delete('/',controller.deleteAuthors);



module.exports = authorsRouter