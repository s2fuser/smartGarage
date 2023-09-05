namespace SmartERP.Masters {
    export interface JobTypesForm {
        JobCategory: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        Gst: Serenity.DecimalEditor;
        StandardTiming: Serenity.StringEditor;
        IsInspectionList: Serenity.BooleanEditor;
    }

    export class JobTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.JobTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JobTypesForm.init)  {
                JobTypesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(JobTypesForm, [
                    'JobCategory', w0,
                    'Name', w1,
                    'Rate', w2,
                    'Gst', w2,
                    'StandardTiming', w1,
                    'IsInspectionList', w3
                ]);
            }
        }
    }
}
