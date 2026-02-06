using MovieAppApi.Entities;

namespace MovieAppApi.Services
{
    public interface IRepository
    {
        Task<List<Genre>> GetAllGenres();
        Task<Genre> GetGenreById(int id);
    }
}
