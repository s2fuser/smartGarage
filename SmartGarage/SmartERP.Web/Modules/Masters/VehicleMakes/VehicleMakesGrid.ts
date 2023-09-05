
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class VehicleMakesGrid extends Serenity.EntityGrid<VehicleMakesRow, any> {
        protected getColumnsKey() { return 'Masters.VehicleMakes'; }
        protected getDialogType() { return VehicleMakesDialog; }
        protected getIdProperty() { return VehicleMakesRow.idProperty; }
        protected getInsertPermission() { return VehicleMakesRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleMakesRow.localTextPrefix; }
        protected getService() { return VehicleMakesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}