
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class VehicleModelsGrid extends Serenity.EntityGrid<VehicleModelsRow, any> {
        protected getColumnsKey() { return 'Masters.VehicleModels'; }
        protected getDialogType() { return VehicleModelsDialog; }
        protected getIdProperty() { return VehicleModelsRow.idProperty; }
        protected getInsertPermission() { return VehicleModelsRow.insertPermission; }
        protected getLocalTextPrefix() { return VehicleModelsRow.localTextPrefix; }
        protected getService() { return VehicleModelsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}