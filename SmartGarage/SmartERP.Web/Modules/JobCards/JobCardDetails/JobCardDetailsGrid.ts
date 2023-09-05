
namespace SmartERP.JobCards {

    @Serenity.Decorators.registerClass()
    export class JobCardDetailsGrid extends Serenity.EntityGrid<JobCardDetailsRow, any> {
        protected getColumnsKey() { return 'JobCards.JobCardDetails'; }
        protected getDialogType() { return JobCardDetailsDialog; }
        protected getIdProperty() { return JobCardDetailsRow.idProperty; }
        protected getInsertPermission() { return JobCardDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return JobCardDetailsRow.localTextPrefix; }
        protected getService() { return JobCardDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}