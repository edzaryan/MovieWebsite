using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieAppApi.Entities;
using MovieAppApi.Services;

namespace MovieAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> logger;
        private readonly IRepository repository;

        public GenresController(ILogger<GenresController> logger, IRepository repository)
        {
            this.logger = logger;
            this.repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            return await repository.GetAllGenres();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Genre>> Get(int Id)
        {
            var genre = await repository.GetGenreById(Id);

            if (genre == null)
            {
                 return NotFound();
            }

            return Ok(genre);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }


        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }
    }
}
