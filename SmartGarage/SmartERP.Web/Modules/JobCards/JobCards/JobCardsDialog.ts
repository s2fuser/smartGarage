
namespace SmartERP.JobCards {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class JobCardsDialog extends Serenity.EntityDialog<JobCardsRow, any> {
        protected getFormKey() { return JobCardsForm.formKey; }
        protected getIdProperty() { return JobCardsRow.idProperty; }
        protected getLocalTextPrefix() { return JobCardsRow.localTextPrefix; }
        protected getNameProperty() { return JobCardsRow.nameProperty; }
        protected getService() { return JobCardsService.baseUrl; }
        protected getDeletePermission() { return JobCardsRow.deletePermission; }
        protected getInsertPermission() { return JobCardsRow.insertPermission; }
        protected getUpdatePermission() { return JobCardsRow.updatePermission; }

        protected form = new JobCardsForm(this.idPrefix);

    }
}