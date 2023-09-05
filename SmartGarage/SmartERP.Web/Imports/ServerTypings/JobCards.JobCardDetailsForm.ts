namespace SmartERP.JobCards {
    export interface JobCardDetailsForm {
        JobType: Serenity.LookupEditor;
        Mechanic: Serenity.LookupEditor;
        CustomerNotes: Serenity.TextAreaEditor;
    }

    export class JobCardDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'JobCards.JobCardDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JobCardDetailsForm.init)  {
                JobCardDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(JobCardDetailsForm, [
                    'JobType', w0,
                    'Mechanic', w0,
                    'CustomerNotes', w1
                ]);
            }
        }
    }
}
