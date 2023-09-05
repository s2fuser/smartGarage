
namespace SmartERP.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationJobItemsDialog extends Serenity.EntityDialog<QuotationJobItemsRow, any> {
        protected getFormKey() { return QuotationJobItemsForm.formKey; }
        protected getIdProperty() { return QuotationJobItemsRow.idProperty; }
        protected getLocalTextPrefix() { return QuotationJobItemsRow.localTextPrefix; }
        protected getNameProperty() { return QuotationJobItemsRow.nameProperty; }
        protected getService() { return QuotationJobItemsService.baseUrl; }
        protected getDeletePermission() { return QuotationJobItemsRow.deletePermission; }
        protected getInsertPermission() { return QuotationJobItemsRow.insertPermission; }
        protected getUpdatePermission() { return QuotationJobItemsRow.updatePermission; }

        protected form = new QuotationJobItemsForm(this.idPrefix);

    }
}