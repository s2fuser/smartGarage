namespace SmartERP.Masters {
    export interface ColorTypesForm {
        Name: Serenity.StringEditor;
    }

    export class ColorTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.ColorTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ColorTypesForm.init)  {
                ColorTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ColorTypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
