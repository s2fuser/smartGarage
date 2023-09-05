using MimeKit;

namespace SmartERP.Common
{
    public interface IEmailSender
    {
        void Send(MimeMessage message, bool skipQueue = false);
    }
}