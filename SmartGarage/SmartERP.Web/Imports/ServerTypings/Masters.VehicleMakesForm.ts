namespace SmartERP.Masters {
    export interface VehicleMakesForm {
        Name: Serenity.StringEditor;
    }

    export class VehicleMakesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.VehicleMakes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleMakesForm.init)  {
                VehicleMakesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VehicleMakesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
