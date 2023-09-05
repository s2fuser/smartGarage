
namespace SmartERP.Bookings {

    @Serenity.Decorators.registerClass()
    export class VehicleCourtesyBookingDialog extends Serenity.EntityDialog<VehicleCourtesyBookingRow, any> {
        protected getFormKey() { return VehicleCourtesyBookingForm.formKey; }
        protected getIdProperty() { return VehicleCourtesyBookingRow.idProperty; }
        protected getLocalTextPrefix() { return VehicleCourtesyBookingRow.localTextPrefix; }
        protected getNameProperty() { return VehicleCourtesyBookingRow.nameProperty; }
        protected getService() { return VehicleCourtesyBookingService.baseUrl; }
        protected getDeletePermission() { return VehicleCourtesyBookingRow.deletePermission; }
        protected getInsertPermission() { return VehicleCourtesyBookingRow.insertPermission; }
        protected getUpdatePermission() { return VehicleCourtesyBookingRow.updatePermission; }

        protected form = new VehicleCourtesyBookingForm(this.idPrefix);

    }
}