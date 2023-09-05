/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace SmartERP.Inspections {

    @Serenity.Decorators.registerClass()
    export class InspectionChecklistEditDialog extends Common.GridEditorDialog<InspectionChecklistRow> {
        protected getFormKey() { return InspectionChecklistForm.formKey; }
        //protected getNameProperty() { return InspectionChecklistRow.nameProperty; }
        protected getLocalTextPrefix() { return InspectionChecklistRow.localTextPrefix; }

        protected form: InspectionChecklistForm;

        constructor() {
            super();
            this.form = new InspectionChecklistForm(this.idPrefix);

            //this.form.ProductId.changeSelect2(e => {

            //    var productID = Q.toId(this.form.ProductId.value);
            //    if (productID != null) {
            //        this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
            //        this.form.Quantity.value = 1;
            //        this.form.Discount.value = 0;
            //        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
            //        this.form.UnitId.value = unitId;
            //    }
            //});
        }

    }
}