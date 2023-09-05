
namespace SmartERP.JobCards {

    @Serenity.Decorators.registerClass()
    export class JobCardDetailsDialog extends Serenity.EntityDialog<JobCardDetailsRow, any> {
        protected getFormKey() { return JobCardDetailsForm.formKey; }
        protected getIdProperty() { return JobCardDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return JobCardDetailsRow.localTextPrefix; }
        protected getNameProperty() { return JobCardDetailsRow.nameProperty; }
        protected getService() { return JobCardDetailsService.baseUrl; }
        protected getDeletePermission() { return JobCardDetailsRow.deletePermission; }
        protected getInsertPermission() { return JobCardDetailsRow.insertPermission; }
        protected getUpdatePermission() { return JobCardDetailsRow.updatePermission; }

        protected form = new JobCardDetailsForm(this.idPrefix);

    }
}