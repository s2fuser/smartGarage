﻿namespace SmartERP.Sales {
    export interface SalesForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        LineItems: SalesDetailEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }

    export class SalesForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.Sales';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalesForm.init)  {
                SalesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = SalesDetailEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(SalesForm, [
                    'CustomerId', w0,
                    'Date', w1,
                    'PaymentAccount', w0,
                    'LineItems', w2,
                    'GrandTotal', w3,
                    'Discount', w3,
                    'TotalDiscount', w3,
                    'Vat', w3,
                    'TotalTax', w3,
                    'ShippingCost', w3,
                    'NetTotal', w3,
                    'PaidAmount', w3,
                    'Due', w3,
                    'Change', w3,
                    'Details', w4
                ]);
            }
        }
    }
}
