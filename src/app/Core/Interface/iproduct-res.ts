export interface IResponse  {

    message:string;
    status:string;
}



export interface IResponseOf<TResult>  extends IResponse{

    products:TResult;
}
