
namespace SmartERP.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationJobItemsGrid extends Serenity.EntityGrid<QuotationJobItemsRow, any> {
        protected getColumnsKey() { return 'Quotations.QuotationJobItems'; }
        protected getDialogType() { return QuotationJobItemsDialog; }
        protected getIdProperty() { return QuotationJobItemsRow.idProperty; }
        protected getInsertPermission() { return QuotationJobItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return QuotationJobItemsRow.localTextPrefix; }
        protected getService() { return QuotationJobItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}