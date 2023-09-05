namespace SmartERP.Masters {
    export interface VehicleModelsForm {
        Name: Serenity.StringEditor;
    }

    export class VehicleModelsForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.VehicleModels';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleModelsForm.init)  {
                VehicleModelsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VehicleModelsForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
