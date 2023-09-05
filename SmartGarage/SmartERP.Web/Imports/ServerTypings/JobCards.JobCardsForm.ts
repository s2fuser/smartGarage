namespace SmartERP.JobCards {
    export interface JobCardsForm {
        Customer: Serenity.LookupEditor;
        WorkOrderNo: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Vehicle: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Reference: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        ScheduleDatetime: Serenity.DateEditor;
        Website: Serenity.StringEditor;
        DeliveryDatetime: Serenity.DateTimeEditor;
        JobCardDetails: JobCardDetailsEditor;
        Details: Serenity.TextAreaEditor;
    }

    export class JobCardsForm extends Serenity.PrefixedContext {
        static formKey = 'JobCards.JobCards';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JobCardsForm.init)  {
                JobCardsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DateTimeEditor;
                var w4 = JobCardDetailsEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(JobCardsForm, [
                    'Customer', w0,
                    'WorkOrderNo', w1,
                    'Address', w1,
                    'Vehicle', w0,
                    'Phone', w1,
                    'Reference', w1,
                    'Mobile', w1,
                    'ScheduleDatetime', w2,
                    'Website', w1,
                    'DeliveryDatetime', w3,
                    'JobCardDetails', w4,
                    'Details', w5
                ]);
            }
        }
    }
}
