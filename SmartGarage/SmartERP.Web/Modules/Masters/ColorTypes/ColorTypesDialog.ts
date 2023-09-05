
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class ColorTypesDialog extends Serenity.EntityDialog<ColorTypesRow, any> {
        protected getFormKey() { return ColorTypesForm.formKey; }
        protected getIdProperty() { return ColorTypesRow.idProperty; }
        protected getLocalTextPrefix() { return ColorTypesRow.localTextPrefix; }
        protected getNameProperty() { return ColorTypesRow.nameProperty; }
        protected getService() { return ColorTypesService.baseUrl; }
        protected getDeletePermission() { return ColorTypesRow.deletePermission; }
        protected getInsertPermission() { return ColorTypesRow.insertPermission; }
        protected getUpdatePermission() { return ColorTypesRow.updatePermission; }

        protected form = new ColorTypesForm(this.idPrefix);

    }
}