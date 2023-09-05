namespace SmartERP.Invoices {
    export namespace InvoicesService {
        export const baseUrl = 'Invoices/Invoices';

        export declare function Create(request: Serenity.SaveRequest<InvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Email(request: Request, onSuccess?: (response: Microsoft.AspNetCore.Mvc.IActionResult) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Invoices/Invoices/Create",
            Update = "Invoices/Invoices/Update",
            Delete = "Invoices/Invoices/Delete",
            Retrieve = "Invoices/Invoices/Retrieve",
            List = "Invoices/Invoices/List",
            Email = "Invoices/Invoices/Email"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Email'
        ].forEach(x => {
            (<any>InvoicesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
