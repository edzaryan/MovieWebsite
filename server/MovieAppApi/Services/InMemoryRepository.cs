using MovieAppApi.Entities;

namespace MovieAppApi.Services
{
    public class InMemoryRepository: IRepository
    {
        private List<Genre> _genres;

        public InMemoryRepository()
        {
            _genres = new List<Genre>
            {
                new Genre { Id = 1, Name = "Action" },
                new Genre { Id = 2, Name = "Comedy" },
                new Genre { Id = 3, Name = "Drama" }
            };
        }

        public async Task<List<Genre>> GetAllGenres()
        {
            await Task.Delay(5000);
            return _genres;
        }

        public async Task<Genre> GetGenreById(int Id)
        {
            return _genres.FirstOrDefault(genre => genre.Id == Id);
        }
    }
}
