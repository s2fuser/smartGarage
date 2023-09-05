/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace SmartERP.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationJobItemsEditDialog extends Common.GridEditorDialog<QuotationJobItemsRow> {
        protected getFormKey() { return QuotationJobItemsForm.formKey; }
        protected getNameProperty() { return QuotationJobItemsRow.nameProperty; }
        protected getLocalTextPrefix() { return QuotationJobItemsRow.localTextPrefix; }

        protected form: QuotationJobItemsForm;

        constructor() {
            super();
            this.form = new QuotationJobItemsForm(this.idPrefix);

            this.form.JobType.changeSelect2(e => {

                var JobTypeID = Q.toId(this.form.JobType.value);
                if (JobTypeID != null) {
                    this.form.UnitPrice.value = SmartERP.Masters.JobTypesRow.getLookup().itemById[JobTypeID].Rate;                    
                    this.form.Discount.value = 0;                   
                }
            });
        }

    }
}