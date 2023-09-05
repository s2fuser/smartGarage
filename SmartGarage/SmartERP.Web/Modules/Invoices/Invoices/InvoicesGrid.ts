

namespace SmartERP.Invoices {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class InvoicesGrid extends Serenity.EntityGrid<InvoicesRow, any> {
        protected getColumnsKey() { return 'Invoices.Invoices'; }
        protected getDialogType() { return InvoicesDialog; }
        protected getIdProperty() { return InvoicesRow.idProperty; }
        protected getInsertPermission() { return InvoicesRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoicesRow.localTextPrefix; }
        protected getService() { return InvoicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }



        protected getColumns() {
            var columns = super.getColumns();
         
            columns.splice(1, 0, {
                field: 'View Invoice',
                name: '',
                format: ctx => '<a class="inline-action view-invoice" title="View Invoice">' +
                    '<i class="fa fa-eye text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }



        protected onClick(e: JQueryEventObject, row: number, cell: number) {

            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())


                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();
                if (target.hasClass('view-invoice')) {
                    SmartERP.Common.ReportHelper.execute({
                        reportKey: 'Invoices.InvoiceReport',
                        extension: 'html',
                        params: {
                            OrderID: item.Id
                        }
                    });
                }
               

            }



        }
    }
}