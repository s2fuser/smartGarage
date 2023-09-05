
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class AssemblyTypesGrid extends Serenity.EntityGrid<AssemblyTypesRow, any> {
        protected getColumnsKey() { return 'Masters.AssemblyTypes'; }
        protected getDialogType() { return AssemblyTypesDialog; }
        protected getIdProperty() { return AssemblyTypesRow.idProperty; }
        protected getInsertPermission() { return AssemblyTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return AssemblyTypesRow.localTextPrefix; }
        protected getService() { return AssemblyTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}