
namespace SmartERP.Invoices {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemsGrid extends Serenity.EntityGrid<InvoiceItemsRow, any> {
        protected getColumnsKey() { return 'Invoices.InvoiceItems'; }
        protected getDialogType() { return InvoiceItemsDialog; }
        protected getIdProperty() { return InvoiceItemsRow.idProperty; }
        protected getInsertPermission() { return InvoiceItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceItemsRow.localTextPrefix; }
        protected getService() { return InvoiceItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}