
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class VehicleTypesGrid extends Serenity.EntityGrid<VehicleTypesRow, any> {
        protected getColumnsKey() { return 'Masters.VehicleTypes'; }
        protected getDialogType() { return VehicleTypesDialog; }
        protected getIdProperty() { return VehicleTypesRow.idProperty; }
        protected getInsertPermission() { return VehicleTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleTypesRow.localTextPrefix; }
        protected getService() { return VehicleTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}