namespace SmartERP.JobCards {
    export namespace JobCardsService {
        export const baseUrl = 'JobCards/JobCards';

        export declare function Create(request: Serenity.SaveRequest<JobCardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<JobCardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JobCardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JobCardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Email(request: Request, onSuccess?: (response: Microsoft.AspNetCore.Mvc.IActionResult) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "JobCards/JobCards/Create",
            Update = "JobCards/JobCards/Update",
            Delete = "JobCards/JobCards/Delete",
            Retrieve = "JobCards/JobCards/Retrieve",
            List = "JobCards/JobCards/List",
            Email = "JobCards/JobCards/Email"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Email'
        ].forEach(x => {
            (<any>JobCardsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
