namespace SmartERP.Invoices {
    export interface InvoicesForm {
        CustomerId: Serenity.LookupEditor;
        Jobcard: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        ScheduleDatetime: Serenity.DateEditor;
        DeliveryDatetime: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        InsuranceCoName: Serenity.StringEditor;
        InsuranceCoAdd: Serenity.StringEditor;
        InsuranceCoCit: Serenity.StringEditor;
        GstIN: Serenity.StringEditor;
        ServiceType: Serenity.StringEditor;
        Jobs: InvoiceJobItemsEditor;
        LineItems: InvoiceItemsEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        Gst: Serenity.DecimalEditor;
        CGST: Serenity.DecimalEditor;
        SGST: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
    }

    export class InvoicesForm extends Serenity.PrefixedContext {
        static formKey = 'Invoices.Invoices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoicesForm.init)  {
                InvoicesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = InvoiceJobItemsEditor;
                var w4 = InvoiceItemsEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(InvoicesForm, [
                    'CustomerId', w0,
                    'Jobcard', w0,
                    'Vehicle', w0,
                    'Date', w1,
                    'ScheduleDatetime', w1,
                    'DeliveryDatetime', w1,
                    'PaymentAccount', w0,
                    'InsuranceCoName', w2,
                    'InsuranceCoAdd', w2,
                    'InsuranceCoCit', w2,
                    'GstIN', w2,
                    'ServiceType', w2,
                    'Jobs', w3,
                    'LineItems', w4,
                    'GrandTotal', w5,
                    'Discount', w5,
                    'TotalDiscount', w5,
                    'Gst', w5,
                    'CGST', w5,
                    'SGST', w5,
                    'TotalTax', w5,
                    'ShippingCost', w5,
                    'NetTotal', w5,
                    'PaidAmount', w5,
                    'Due', w5,
                    'Change', w5
                ]);
            }
        }
    }
}
