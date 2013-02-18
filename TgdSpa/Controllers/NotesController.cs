namespace TgdSpa.Controllers
{
    using System.Linq;
    using System.Web.Http;
    using Breeze.WebApi;
    using Newtonsoft.Json.Linq;
    using TgdSpa.Models;

    [BreezeController]
    public class NotesController : ApiController
    {
        private readonly EFContextProvider<NotesDbContext> contextProvider = new EFContextProvider<NotesDbContext>();

        [HttpGet]
        public string Metadata()
        {
            return contextProvider.Metadata();
        }

        [HttpGet]
        public IQueryable<Note> Notes()
        {
            return contextProvider.Context.Notes;
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return contextProvider.SaveChanges(saveBundle);
        }
    }
}
