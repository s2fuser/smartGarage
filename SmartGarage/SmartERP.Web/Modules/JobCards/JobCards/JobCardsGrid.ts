
namespace SmartERP.JobCards {

    @Serenity.Decorators.registerClass()
    export class JobCardsGrid extends Serenity.EntityGrid<JobCardsRow, any> {
        protected getColumnsKey() { return 'JobCards.JobCards'; }
        protected getDialogType() { return JobCardsDialog; }
        protected getIdProperty() { return JobCardsRow.idProperty; }
        protected getInsertPermission() { return JobCardsRow.insertPermission; }
        protected getLocalTextPrefix() { return JobCardsRow.localTextPrefix; }
        protected getService() { return JobCardsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'View JobCards',
                name: '',
                format: ctx => '<a class="inline-action view-JobCards" title="View JobCards">' +
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
                if (target.hasClass('view-JobCards')) {
                    SmartERP.Common.ReportHelper.execute({
                        reportKey: 'JobCards.JobCardReport',
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