namespace SmartERP.Inspections {
    export namespace InspectionChecklistService {
        export const baseUrl = 'Inspections/InspectionChecklist';

        export declare function Create(request: Serenity.SaveRequest<InspectionChecklistRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InspectionChecklistRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InspectionChecklistRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InspectionChecklistRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inspections/InspectionChecklist/Create",
            Update = "Inspections/InspectionChecklist/Update",
            Delete = "Inspections/InspectionChecklist/Delete",
            Retrieve = "Inspections/InspectionChecklist/Retrieve",
            List = "Inspections/InspectionChecklist/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InspectionChecklistService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
