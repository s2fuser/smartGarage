namespace SmartERP.Bookings {
    export namespace VehicleCourtesyBookingService {
        export const baseUrl = 'Bookings/VehicleCourtesyBooking';

        export declare function Create(request: Serenity.SaveRequest<VehicleCourtesyBookingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VehicleCourtesyBookingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicleCourtesyBookingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicleCourtesyBookingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Bookings/VehicleCourtesyBooking/Create",
            Update = "Bookings/VehicleCourtesyBooking/Update",
            Delete = "Bookings/VehicleCourtesyBooking/Delete",
            Retrieve = "Bookings/VehicleCourtesyBooking/Retrieve",
            List = "Bookings/VehicleCourtesyBooking/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VehicleCourtesyBookingService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
