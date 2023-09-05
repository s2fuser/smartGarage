
namespace SmartERP.Masters {

    @Serenity.Decorators.registerClass()
    export class ColorTypesGrid extends Serenity.EntityGrid<ColorTypesRow, any> {
        protected getColumnsKey() { return 'Masters.ColorTypes'; }
        protected getDialogType() { return ColorTypesDialog; }
        protected getIdProperty() { return ColorTypesRow.idProperty; }
        protected getInsertPermission() { return ColorTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return ColorTypesRow.localTextPrefix; }
        protected getService() { return ColorTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}