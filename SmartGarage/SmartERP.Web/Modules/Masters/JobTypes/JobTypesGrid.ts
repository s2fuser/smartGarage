
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class JobTypesGrid extends Serenity.EntityGrid<JobTypesRow, any> {
        protected getColumnsKey() { return 'Masters.JobTypes'; }
        protected getDialogType() { return JobTypesDialog; }
        protected getIdProperty() { return JobTypesRow.idProperty; }
        protected getInsertPermission() { return JobTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return JobTypesRow.localTextPrefix; }
        protected getService() { return JobTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}