
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class FuelTypesGrid extends Serenity.EntityGrid<FuelTypesRow, any> {
        protected getColumnsKey() { return 'Masters.FuelTypes'; }
        protected getDialogType() { return FuelTypesDialog; }
        protected getIdProperty() { return FuelTypesRow.idProperty; }
        protected getInsertPermission() { return FuelTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return FuelTypesRow.localTextPrefix; }
        protected getService() { return FuelTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}