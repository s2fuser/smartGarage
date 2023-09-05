
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class JobCategoriesDialog extends Serenity.EntityDialog<JobCategoriesRow, any> {
        protected getFormKey() { return JobCategoriesForm.formKey; }
        protected getIdProperty() { return JobCategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return JobCategoriesRow.localTextPrefix; }
        protected getNameProperty() { return JobCategoriesRow.nameProperty; }
        protected getService() { return JobCategoriesService.baseUrl; }
        protected getDeletePermission() { return JobCategoriesRow.deletePermission; }
        protected getInsertPermission() { return JobCategoriesRow.insertPermission; }
        protected getUpdatePermission() { return JobCategoriesRow.updatePermission; }

        protected form = new JobCategoriesForm(this.idPrefix);

    }
}