
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class AssemblyTypesDialog extends Serenity.EntityDialog<AssemblyTypesRow, any> {
        protected getFormKey() { return AssemblyTypesForm.formKey; }
        protected getIdProperty() { return AssemblyTypesRow.idProperty; }
        protected getLocalTextPrefix() { return AssemblyTypesRow.localTextPrefix; }
        protected getNameProperty() { return AssemblyTypesRow.nameProperty; }
        protected getService() { return AssemblyTypesService.baseUrl; }
        protected getDeletePermission() { return AssemblyTypesRow.deletePermission; }
        protected getInsertPermission() { return AssemblyTypesRow.insertPermission; }
        protected getUpdatePermission() { return AssemblyTypesRow.updatePermission; }

        protected form = new AssemblyTypesForm(this.idPrefix);

    }
}