import ResponseBase from "./ResponseBase";

export default interface ApiResponse<T extends ResponseBase>{
    exec_time: number,
    response: T
}