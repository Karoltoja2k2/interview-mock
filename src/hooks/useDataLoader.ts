import { useEffect, useState } from "react";
import { GetAllWorkOrderQuery } from "../api/query/GetAllWorkOrdersQuery";
import WorkOrder from "../model/WorkOrder/model/WorkOrder";

export default function useDataLoader(filter:string | undefined){
    const [workOrders, setWorkOrders] = useState(new Array<WorkOrder>());
  
    useEffect(() => {
      GetAllWorkOrderQuery(filter)
        .then((result => setWorkOrders(result.data)))
        .catch(error => window.alert(error))
    }, [filter])
  
    return workOrders
  }
  