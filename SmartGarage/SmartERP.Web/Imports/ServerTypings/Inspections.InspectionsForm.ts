namespace SmartERP.Inspections {
    export interface InspectionsForm {
        Name: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        StandardTiming: Serenity.StringEditor;
        IsInspectionList: Serenity.BooleanEditor;
        Checklist: InspectionChecklistEditor;
    }

    export class InspectionsForm extends Serenity.PrefixedContext {
        static formKey = 'Inspections.Inspections';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InspectionsForm.init)  {
                InspectionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.BooleanEditor;
                var w3 = InspectionChecklistEditor;

                Q.initFormType(InspectionsForm, [
                    'Name', w0,
                    'Rate', w1,
                    'StandardTiming', w0,
                    'IsInspectionList', w2,
                    'Checklist', w3
                ]);
            }
        }
    }
}
