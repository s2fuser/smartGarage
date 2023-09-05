/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace SmartERP.JobCards {

    @Serenity.Decorators.registerClass()
    export class JobCardDetailsEditDialog extends Common.GridEditorDialog<JobCardDetailsRow> {
        protected getFormKey() { return JobCardDetailsForm.formKey; }
        protected getNameProperty() { return JobCardDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return JobCardDetailsRow.localTextPrefix; }

        protected form: JobCardDetailsForm;

        constructor() {
            super();
            this.form = new JobCardDetailsForm(this.idPrefix);

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