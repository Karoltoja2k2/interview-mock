import ResponseBase from './ResponseBase';

export default interface PaginatedResponse<T extends object> extends ResponseBase{
    current_page : number,
    from : number,
    last_page: number,
    per_page: number,
    to: number,
    total: number,
    data: T[]
}