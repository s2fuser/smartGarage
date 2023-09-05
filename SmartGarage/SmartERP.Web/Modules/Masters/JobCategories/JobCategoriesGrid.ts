
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class JobCategoriesGrid extends Serenity.EntityGrid<JobCategoriesRow, any> {
        protected getColumnsKey() { return 'Masters.JobCategories'; }
        protected getDialogType() { return JobCategoriesDialog; }
        protected getIdProperty() { return JobCategoriesRow.idProperty; }
        protected getInsertPermission() { return JobCategoriesRow.insertPermission; }
        protected getLocalTextPrefix() { return JobCategoriesRow.localTextPrefix; }
        protected getService() { return JobCategoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}