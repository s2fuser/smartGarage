namespace SmartERP.Quotations {
    export interface QuotationJobItemsForm {
        JobType: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class QuotationJobItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Quotations.QuotationJobItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!QuotationJobItemsForm.init)  {
                QuotationJobItemsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(QuotationJobItemsForm, [
                    'JobType', w0,
                    'UnitPrice', w1,
                    'Discount', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
