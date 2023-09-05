
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class VehicleMakesDialog extends Serenity.EntityDialog<VehicleMakesRow, any> {
        protected getFormKey() { return VehicleMakesForm.formKey; }
        protected getIdProperty() { return VehicleMakesRow.idProperty; }
        protected getLocalTextPrefix() { return VehicleMakesRow.localTextPrefix; }
        protected getNameProperty() { return VehicleMakesRow.nameProperty; }
        protected getService() { return VehicleMakesService.baseUrl; }
        protected getDeletePermission() { return VehicleMakesRow.deletePermission; }
        protected getInsertPermission() { return VehicleMakesRow.insertPermission; }
        protected getUpdatePermission() { return VehicleMakesRow.updatePermission; }

        protected form = new VehicleMakesForm(this.idPrefix);

    }
}