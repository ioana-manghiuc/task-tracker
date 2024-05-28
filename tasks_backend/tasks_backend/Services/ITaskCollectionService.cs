using tasks_backend.Models;

namespace tasks_backend.Services
{
    public interface ITaskCollectionService : ICollectionService<TaskModel>
    {
        Task<List<TaskModel>> GetTasksByStatus(string status);

    }
}
