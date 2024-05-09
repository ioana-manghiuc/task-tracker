using tasks_backend.Models;

namespace tasks_backend.Services
{
    public class TaskCollectionService : ITaskCollectionService
    {
        public bool Create(TaskModel model)
        {
            throw new NotImplementedException();
        }

        public bool Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public TaskModel Get(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<TaskModel> GetAll()
        {
            throw new NotImplementedException();
        }

        public List<TaskModel> GetTasksByStatus(string status)
        {
            throw new NotImplementedException();
        }

        public bool Update(Guid id, TaskModel model)
        {
            throw new NotImplementedException();
        }
    }
}
