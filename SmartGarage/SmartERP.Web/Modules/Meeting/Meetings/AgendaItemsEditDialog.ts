/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace SmartERP.Meeting {

    @Serenity.Decorators.registerClass()
    export class AgendaItemsEditDialog extends Common.GridEditorDialog<AgendaItemsRow> {
        protected getFormKey() { return AgendaItemsForm.formKey; }
        protected getNameProperty() { return AgendaItemsRow.nameProperty; }
        protected getLocalTextPrefix() { return AgendaItemsRow.localTextPrefix; }

        protected form: AgendaItemsForm;

        constructor() {
            super();
            this.form = new AgendaItemsForm(this.idPrefix);
            
        }

    }
}