
namespace SmartERP.Invoices {

    @Serenity.Decorators.registerClass()
    export class InvoiceJobItemsDialog extends Serenity.EntityDialog<InvoiceJobItemsRow, any> {
        protected getFormKey() { return InvoiceJobItemsForm.formKey; }
        protected getIdProperty() { return InvoiceJobItemsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceJobItemsRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceJobItemsRow.nameProperty; }
        protected getService() { return InvoiceJobItemsService.baseUrl; }
        protected getDeletePermission() { return InvoiceJobItemsRow.deletePermission; }
        protected getInsertPermission() { return InvoiceJobItemsRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceJobItemsRow.updatePermission; }

        protected form = new InvoiceJobItemsForm(this.idPrefix);

    }
}