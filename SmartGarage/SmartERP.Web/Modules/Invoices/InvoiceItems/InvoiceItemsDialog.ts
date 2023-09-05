
namespace SmartERP.Invoices {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemsDialog extends Serenity.EntityDialog<InvoiceItemsRow, any> {
        protected getFormKey() { return InvoiceItemsForm.formKey; }
        protected getIdProperty() { return InvoiceItemsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceItemsRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceItemsRow.nameProperty; }
        protected getService() { return InvoiceItemsService.baseUrl; }
        protected getDeletePermission() { return InvoiceItemsRow.deletePermission; }
        protected getInsertPermission() { return InvoiceItemsRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceItemsRow.updatePermission; }
        //protected getProductsRow() { return InvoiceItemsRow.readPermission }
        protected form = new InvoiceItemsForm(this.idPrefix);

    }
}