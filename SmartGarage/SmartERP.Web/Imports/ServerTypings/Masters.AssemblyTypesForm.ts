namespace SmartERP.Masters {
    export interface AssemblyTypesForm {
        Name: Serenity.StringEditor;
    }

    export class AssemblyTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.AssemblyTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssemblyTypesForm.init)  {
                AssemblyTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AssemblyTypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
