import PaginatedResponse from "../../base/PaginatedResponse";
import WorkOrder from "../model/WorkOrder";

export default interface GetAllWorkOrderResponse extends PaginatedResponse<WorkOrder>{
}