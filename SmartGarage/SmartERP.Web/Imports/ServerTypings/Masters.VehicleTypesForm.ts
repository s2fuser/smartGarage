namespace SmartERP.Masters {
    export interface VehicleTypesForm {
        Name: Serenity.StringEditor;
    }

    export class VehicleTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.VehicleTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleTypesForm.init)  {
                VehicleTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VehicleTypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
