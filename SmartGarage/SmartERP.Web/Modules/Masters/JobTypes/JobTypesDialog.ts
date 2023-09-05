
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class JobTypesDialog extends Serenity.EntityDialog<JobTypesRow, any> {
        protected getFormKey() { return JobTypesForm.formKey; }
        protected getIdProperty() { return JobTypesRow.idProperty; }
        protected getLocalTextPrefix() { return JobTypesRow.localTextPrefix; }
        protected getNameProperty() { return JobTypesRow.nameProperty; }
        protected getService() { return JobTypesService.baseUrl; }
        protected getDeletePermission() { return JobTypesRow.deletePermission; }
        protected getInsertPermission() { return JobTypesRow.insertPermission; }
        protected getUpdatePermission() { return JobTypesRow.updatePermission; }

        protected form = new JobTypesForm(this.idPrefix);

    }
}