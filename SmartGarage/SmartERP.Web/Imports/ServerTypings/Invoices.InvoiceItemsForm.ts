namespace SmartERP.Invoices {
    export interface InvoiceItemsForm {
        ProductId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        HSN: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Gst: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
    }

    export class InvoiceItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Invoices.InvoiceItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceItemsForm.init)  {
                InvoiceItemsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(InvoiceItemsForm, [
                    'ProductId', w0,
                    'UnitId', w0,
                    'Quantity', w1,
                    'HSN', w2,
                    'UnitPrice', w1,
                    'Gst', w1,
                    'Discount', w1
                ]);
            }
        }
    }
}
