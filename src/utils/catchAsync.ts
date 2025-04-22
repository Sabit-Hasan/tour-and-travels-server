import { NextFunction, Request, RequestHandler, Response } from "express"

const catchAsync = (fun: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fun(req, res, next)).catch(err => {
            next(err)
        })
    }
}

export default catchAsync;


type TSendResponse<T> = {
    statusCode: number;
    message: string;
    data: T | T[] | null
}


const sendResponse = <T>(res: Response, data: TSendResponse<T>) => {

}