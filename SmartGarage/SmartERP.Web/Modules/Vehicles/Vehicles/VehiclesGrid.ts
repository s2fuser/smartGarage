
namespace SmartERP.Vehicles {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class VehiclesGrid extends Serenity.EntityGrid<VehiclesRow, any> {
        protected getColumnsKey() { return 'Vehicles.Vehicles'; }
        protected getDialogType() { return VehiclesDialog; }
        protected getIdProperty() { return VehiclesRow.idProperty; }
        protected getInsertPermission() { return VehiclesRow.insertPermission; }
        protected getLocalTextPrefix() { return VehiclesRow.localTextPrefix; }
        protected getService() { return VehiclesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}