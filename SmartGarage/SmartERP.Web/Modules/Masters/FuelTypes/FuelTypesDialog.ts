
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class FuelTypesDialog extends Serenity.EntityDialog<FuelTypesRow, any> {
        protected getFormKey() { return FuelTypesForm.formKey; }
        protected getIdProperty() { return FuelTypesRow.idProperty; }
        protected getLocalTextPrefix() { return FuelTypesRow.localTextPrefix; }
        protected getNameProperty() { return FuelTypesRow.nameProperty; }
        protected getService() { return FuelTypesService.baseUrl; }
        protected getDeletePermission() { return FuelTypesRow.deletePermission; }
        protected getInsertPermission() { return FuelTypesRow.insertPermission; }
        protected getUpdatePermission() { return FuelTypesRow.updatePermission; }

        protected form = new FuelTypesForm(this.idPrefix);

    }
}