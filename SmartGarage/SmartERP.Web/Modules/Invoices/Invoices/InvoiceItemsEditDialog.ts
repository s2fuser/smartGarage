/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace SmartERP.Invoices {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemsEditDialog extends Common.GridEditorDialog<InvoiceItemsRow> {
        protected getFormKey() { return InvoiceItemsForm.formKey; }
        protected getNameProperty() { return InvoiceItemsRow.nameProperty; }
        protected getLocalTextPrefix() { return InvoiceItemsRow.localTextPrefix; }

        protected form: InvoiceItemsForm;

        constructor() {
            super();
            this.form = new InvoiceItemsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {

                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                    this.form.HSN.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].HSN;
                    this.form.Quantity.value = 1;
                    this.form.Discount.value = 0;
                    this.form.Gst.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].Gst;
                    var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                    this.form.UnitId.value = unitId;
                }
            });
        }

    }
}