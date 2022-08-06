import ApiResponse from "../../model/base/ApiResponse";
import GetAllWorkOrderResponse from "../../model/WorkOrder/query/GetAllWorkOrderResponse";

export const GetAllWorkOrderQuery = async (descriptionFilter: string | undefined) : Promise<GetAllWorkOrderResponse> => {
    let response: GetAllWorkOrderResponse = await fetch(`./example.json`)
        .then(response => response.json())
        .then((apiResponse: ApiResponse<GetAllWorkOrderResponse>) => {
            let filter = descriptionFilter?.toLowerCase();
            if (filter !== undefined){
                apiResponse.response.data = apiResponse.response.data.filter(x => x.description.toLowerCase().includes(filter!));
            }

            return apiResponse.response;
        });

    return response;
}