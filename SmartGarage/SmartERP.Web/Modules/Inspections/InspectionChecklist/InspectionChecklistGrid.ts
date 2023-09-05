
namespace SmartERP.Inspections {

    @Serenity.Decorators.registerClass()
    export class InspectionChecklistGrid extends Serenity.EntityGrid<InspectionChecklistRow, any> {
        protected getColumnsKey() { return 'Inspections.InspectionChecklist'; }
        protected getDialogType() { return InspectionChecklistDialog; }
        protected getIdProperty() { return InspectionChecklistRow.idProperty; }
        protected getInsertPermission() { return InspectionChecklistRow.insertPermission; }
        protected getLocalTextPrefix() { return InspectionChecklistRow.localTextPrefix; }
        protected getService() { return InspectionChecklistService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}