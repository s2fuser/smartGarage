
namespace SmartERP.JobCards {

    @Serenity.Decorators.registerClass()
    export class GatePassesGrid extends Serenity.EntityGrid<GatePassesRow, any> {
        protected getColumnsKey() { return 'JobCards.GatePasses'; }
        protected getDialogType() { return GatePassesDialog; }
        protected getIdProperty() { return GatePassesRow.idProperty; }
        protected getInsertPermission() { return GatePassesRow.insertPermission; }
        protected getLocalTextPrefix() { return GatePassesRow.localTextPrefix; }
        protected getService() { return GatePassesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}