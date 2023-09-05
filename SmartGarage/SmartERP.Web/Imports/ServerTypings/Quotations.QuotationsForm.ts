namespace SmartERP.Quotations {
    export interface QuotationsForm {
        CustomerId: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        ExpiryDate: Serenity.DateEditor;
        Jobs: QuotationJobItemsEditor;
        LineItems: QuotationsDetailEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }

    export class QuotationsForm extends Serenity.PrefixedContext {
        static formKey = 'Quotations.Quotations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!QuotationsForm.init)  {
                QuotationsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = QuotationJobItemsEditor;
                var w3 = QuotationsDetailEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(QuotationsForm, [
                    'CustomerId', w0,
                    'Vehicle', w0,
                    'Date', w1,
                    'ExpiryDate', w1,
                    'Jobs', w2,
                    'LineItems', w3,
                    'GrandTotal', w4,
                    'Discount', w4,
                    'TotalDiscount', w4,
                    'Vat', w4,
                    'TotalTax', w4,
                    'ShippingCost', w4,
                    'NetTotal', w4,
                    'Details', w5
                ]);
            }
        }
    }
}
