import Person from "./Person"
import { WorkOrderPriority } from "./WorkOrderPriority"
import { WorkOrderStatus } from "./WorkOrderStatus"

export default interface WorkOrder{
    work_order_id: number,
    description: string,
    received_date: string,
    assigned_to: Person[],
    status: WorkOrderStatus,
    priority: WorkOrderPriority
}