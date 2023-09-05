using Serenity;
using Serenity.Data;
using Serenity.Services;
using SmartERP.Customers.Entities;
using SmartERP.Invoices.Forms;
using System;
using System.Data;
using System.Net.Mail;
using System.Net;
using MyRow = SmartERP.Invoices.Entities.InvoicesRow;

namespace SmartERP.Invoices.Repositories
{
    public class InvoicesRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public InvoicesRepository(IRequestContext context)
            : base(context)
        {
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        { 
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create); 
         
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> 
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                if (IsCreate)
                {
                    Row.VNo = Convert.ToInt64(DateTime.Now.ToString("yyyyMMddHHmmssffff"));
                }

            }
        }
        
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> 
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> 
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }
        }
        
        private class MyListHandler : ListRequestHandler<MyRow> 
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }
        }
    }
}