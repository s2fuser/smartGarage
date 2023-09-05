namespace SmartERP.JobCards {
    export interface GatePassesForm {
        JobCard: Serenity.LookupEditor;
        Customer: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        VehicleOutDate: Serenity.DateEditor;
    }

    export class GatePassesForm extends Serenity.PrefixedContext {
        static formKey = 'JobCards.GatePasses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GatePassesForm.init)  {
                GatePassesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;

                Q.initFormType(GatePassesForm, [
                    'JobCard', w0,
                    'Customer', w0,
                    'Vehicle', w0,
                    'VehicleOutDate', w1
                ]);
            }
        }
    }
}
