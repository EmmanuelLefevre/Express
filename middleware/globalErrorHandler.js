/*===============================================*/
/*============ globalErrorHandler.js ============*/
/*===============================================*/


/*============ IMPORT USED MODULES ============*/
const AccountCheckError = require('../_errors/accountCheckError');
const ArticleNotFoundError = require('../_errors/articleNotFoundError');
const BadCredentialsError = require('../_errors/badCredentialsError');
const InternalServerError = require('../_errors/internalServerError');
const InvalidRequestError = require('../_errors/invalidRequestError');
const LoginLimiterError = require('../_errors/loginLimiterError');
const NotFoundError = require('../_errors/notFoundError');
const NotAllowedMethodError = require('../_errors/notAllowedMethodError');
const PermissionDeniedError = require('../_errors/permissionDeniedError');
const PremiumCheckError = require('../_errors/premiumCheckError');
const ResponseValidationError = require('../_errors/responseValidationError');
const UnknownUserRoleError = require('../_errors/unknownUserRoleError');
const UserInfoNotFoundError = require('../_errors/userInfoNotFoundError');
const UserNotFoundError = require('../_errors/userNotFoundError');
const ValidationError = require('../_errors/validationError');


/*============ GLOBAL ERROR HANDLER ============*/
function GlobalErrorHandler(err, _req, res, _next) {

    const errorMessage = err.message;
    const statusCode = err.statusCode;

    if (err instanceof AccountCheckError ||
        err instanceof ArticleNotFoundError ||
        err instanceof BadCredentialsError ||
        err instanceof InternalServerError ||
        err instanceof InvalidRequestError ||
        err instanceof LoginLimiterError ||
        err instanceof NotAllowedMethodError ||
        err instanceof PermissionDeniedError ||
        err instanceof PremiumCheckError ||
        err instanceof ResponseValidationError ||
        err instanceof UnknownUserRoleError ||
        err instanceof UserInfoNotFoundError ||
        err instanceof UserNotFoundError) {

        return res.status(statusCode).json({ error: errorMessage });
    }
    else if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err.getErrorResponse());
    }
    else if (err instanceof NotFoundError) {
        return res.status(statusCode).send(errorMessage + '\n');
    }
    else {
        return res.status(500).json({ error: 'Unexpected error!' });
    }
}


/*============ EXPORT MODULE ============*/
module.exports = GlobalErrorHandler;