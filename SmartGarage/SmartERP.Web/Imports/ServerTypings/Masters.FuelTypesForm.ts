namespace SmartERP.Masters {
    export interface FuelTypesForm {
        Name: Serenity.StringEditor;
    }

    export class FuelTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.FuelTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FuelTypesForm.init)  {
                FuelTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(FuelTypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
