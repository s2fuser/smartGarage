
namespace SmartERP.Bookings {

    @Serenity.Decorators.registerClass()
    export class VehicleBookingsDialog extends Serenity.EntityDialog<VehicleBookingsRow, any> {
        protected getFormKey() { return VehicleBookingsForm.formKey; }
        protected getIdProperty() { return VehicleBookingsRow.idProperty; }
        protected getLocalTextPrefix() { return VehicleBookingsRow.localTextPrefix; }
        protected getNameProperty() { return VehicleBookingsRow.nameProperty; }
        protected getService() { return VehicleBookingsService.baseUrl; }
        protected getDeletePermission() { return VehicleBookingsRow.deletePermission; }
        protected getInsertPermission() { return VehicleBookingsRow.insertPermission; }
        protected getUpdatePermission() { return VehicleBookingsRow.updatePermission; }

        protected form = new VehicleBookingsForm(this.idPrefix);

    }
}