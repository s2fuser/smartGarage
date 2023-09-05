
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class VehicleTypesDialog extends Serenity.EntityDialog<VehicleTypesRow, any> {
        protected getFormKey() { return VehicleTypesForm.formKey; }
        protected getIdProperty() { return VehicleTypesRow.idProperty; }
        protected getLocalTextPrefix() { return VehicleTypesRow.localTextPrefix; }
        protected getNameProperty() { return VehicleTypesRow.nameProperty; }
        protected getService() { return VehicleTypesService.baseUrl; }
        protected getDeletePermission() { return VehicleTypesRow.deletePermission; }
        protected getInsertPermission() { return VehicleTypesRow.insertPermission; }
        protected getUpdatePermission() { return VehicleTypesRow.updatePermission; }

        protected form = new VehicleTypesForm(this.idPrefix);

    }
}