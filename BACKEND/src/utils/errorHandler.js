export const errorHandler = (err, req, res, next) => {
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            success: false,
            message: err.message
        });
    }

    console.error(err);
    res.status(500).json({
        status: 'error',
        success: false,
        message: err.message || 'Internal Server Error',
    });
};


export class AppError extends Error {
    statusCode;
    isOperational;

    constructor(message, statusCode = 500, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }

}

export class NotFoundError extends AppError {
    constructor(message = 'Resource Not Found') {
        super(message, 404);
    }
}

export class BadRequestError extends AppError {
    constructor(message = 'Bad Request') {
        super(message, 400);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = 'Unauthorized') {
        super(message, 401);
    }
}


export class ConflictError extends AppError {
    constructor(message = 'Conflict') {
        super(message, 409);
    }
}