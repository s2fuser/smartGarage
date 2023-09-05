namespace SmartERP.Invoices {
    export interface InvoiceJobItemsForm {
        JobType: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Gst: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class InvoiceJobItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Invoices.InvoiceJobItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceJobItemsForm.init)  {
                InvoiceJobItemsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(InvoiceJobItemsForm, [
                    'JobType', w0,
                    'UnitPrice', w1,
                    'Gst', w1,
                    'Discount', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
