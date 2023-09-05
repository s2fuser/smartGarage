using Serenity.ComponentModel;
using Serenity.Services;

namespace SmartERP.Membership
{
    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow), CheckNames = true)]
    public class LoginRequest : ServiceRequest
    {
        //[Placeholder("default username is 'admin'")]
        [Placeholder("username")]
        public string Username { get; set; }
        //[PasswordEditor, Placeholder("default password for 'admin' is 'admin1234'"), Required(true)]
        [PasswordEditor, Placeholder("password"), Required(true)]
        public string Password { get; set; }
    }
}