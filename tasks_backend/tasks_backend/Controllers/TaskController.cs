using Microsoft.AspNetCore.Mvc;
using tasks_backend.Models;
using tasks_backend.Services;

namespace tasks_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        List<TaskModel> _tasks;

        ITaskCollectionService _taskCollectionService;

        public TaskController(ITaskCollectionService taskCollectionService)
        {
            _taskCollectionService = taskCollectionService ?? throw new ArgumentNullException(nameof(TaskCollectionService));
        }

        [HttpGet]
        public async Task<ActionResult<List<TaskModel>>> GetTasks()
        {
            List<TaskModel> tasks = await _taskCollectionService.GetAll();
            return Ok(tasks);
        }

        [HttpPost(Name = "CreateTask")]
        public async Task<bool> CreateTask([FromBody] TaskModel task)
        {
            return await _taskCollectionService.Create(task);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(Guid id)
        {
            var deleted = await _taskCollectionService.Delete(id);
            if (!deleted)
            {
                return NotFound(); // task not found and deleted
            }
            return NoContent(); // response for success
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(Guid id, [FromBody] TaskModel taskModel)
        {
            var updated = await _taskCollectionService.Update(id, taskModel);
            if (!updated)
            {
                return NotFound(); // task not found and updated
            }
            return Ok(); // success
        }

    }
}
