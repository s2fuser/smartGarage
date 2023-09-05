
namespace SmartERP.Bookings {

    @Serenity.Decorators.registerClass()
    export class VehicleCourtesyBookingGrid extends Serenity.EntityGrid<VehicleCourtesyBookingRow, any> {
        protected getColumnsKey() { return 'Bookings.VehicleCourtesyBooking'; }
        protected getDialogType() { return VehicleCourtesyBookingDialog; }
        protected getIdProperty() { return VehicleCourtesyBookingRow.idProperty; }
        protected getInsertPermission() { return VehicleCourtesyBookingRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleCourtesyBookingRow.localTextPrefix; }
        protected getService() { return VehicleCourtesyBookingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}