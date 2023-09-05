namespace SmartERP.Inspections {
    export interface InspectionChecklistForm {
        JobCategory: Serenity.LookupEditor;
        JobTypes: Serenity.LookupEditor;
    }

    export class InspectionChecklistForm extends Serenity.PrefixedContext {
        static formKey = 'Inspections.InspectionChecklist';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InspectionChecklistForm.init)  {
                InspectionChecklistForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(InspectionChecklistForm, [
                    'JobCategory', w0,
                    'JobTypes', w0
                ]);
            }
        }
    }
}
