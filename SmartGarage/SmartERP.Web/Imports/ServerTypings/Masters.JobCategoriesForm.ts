namespace SmartERP.Masters {
    export interface JobCategoriesForm {
        Name: Serenity.StringEditor;
    }

    export class JobCategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.JobCategories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JobCategoriesForm.init)  {
                JobCategoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(JobCategoriesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
