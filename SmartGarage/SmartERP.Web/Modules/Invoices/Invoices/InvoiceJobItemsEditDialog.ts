///<reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace SmartERP.Invoices {

    @Serenity.Decorators.registerClass()
    export class InvoiceJobItemsEditDialog extends Common.GridEditorDialog<InvoiceJobItemsRow> {
        protected getFormKey() { return InvoiceJobItemsForm.formKey; }
        protected getNameProperty() { return InvoiceJobItemsRow.nameProperty; }
        protected getLocalTextPrefix() { return InvoiceJobItemsRow.localTextPrefix; }

        protected form: InvoiceJobItemsForm;

        constructor() {
            super();
            this.form = new InvoiceJobItemsForm(this.idPrefix);

            this.form.JobType.changeSelect2(e => {

                var JobTypeID = Q.toId(this.form.JobType.value);
                if (JobTypeID != null) {
                    this.form.UnitPrice.value = SmartERP.Masters.JobTypesRow.getLookup().itemById[JobTypeID].Rate;                    
                    this.form.Discount.value = 0;      
                    this.form.Gst.value = SmartERP.Masters.JobTypesRow.getLookup().itemById[JobTypeID].Gst;
                }
            });
        }

    }
}