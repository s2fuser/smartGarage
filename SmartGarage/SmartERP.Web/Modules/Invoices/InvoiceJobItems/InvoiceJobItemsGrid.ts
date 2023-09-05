
namespace SmartERP.Invoices {

    @Serenity.Decorators.registerClass()
    export class InvoiceJobItemsGrid extends Serenity.EntityGrid<InvoiceJobItemsRow, any> {
        protected getColumnsKey() { return 'Invoices.InvoiceJobItems'; }
        protected getDialogType() { return InvoiceJobItemsDialog; }
        protected getIdProperty() { return InvoiceJobItemsRow.idProperty; }
        protected getInsertPermission() { return InvoiceJobItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceJobItemsRow.localTextPrefix; }
        protected getService() { return InvoiceJobItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}