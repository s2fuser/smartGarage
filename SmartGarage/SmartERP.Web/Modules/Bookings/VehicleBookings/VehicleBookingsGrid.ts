
namespace SmartERP.Bookings {

    @Serenity.Decorators.registerClass()
    export class VehicleBookingsGrid extends Serenity.EntityGrid<VehicleBookingsRow, any> {
        protected getColumnsKey() { return 'Bookings.VehicleBookings'; }
        protected getDialogType() { return VehicleBookingsDialog; }
        protected getIdProperty() { return VehicleBookingsRow.idProperty; }
        protected getInsertPermission() { return VehicleBookingsRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleBookingsRow.localTextPrefix; }
        protected getService() { return VehicleBookingsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}