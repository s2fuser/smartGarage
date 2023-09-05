
namespace SmartERP.Products {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()

    export class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey() { return 'Products.Products'; }
        protected getDialogType() { return ProductsDialog; }
        protected getIsActiveProperty() { return ProductsRow.isActiveProperty; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getInsertPermission() { return ProductsRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getService() { return ProductsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}