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

        [HttpGet("tasks")]
        public IActionResult GetTasks()
        {
            List<TaskModel> tasks = _taskCollectionService.GetAll();
            return Ok(tasks);

        }

        [HttpGet("server-error")]
        public IActionResult ServerError()
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "Error in processing the Task");
        }

        [HttpDelete("{id}", Name = "DeleteTask")]
        public IActionResult Delete(Guid id)
        {
            var task = _tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound();
            }

            _tasks.Remove(task);
            return Ok("Task deleted");
        }

        [HttpPost(Name = "CreateTask")]
        public IActionResult CreateTask([FromBody] TaskModel task)
        {
            if (task == null)
            {
                return BadRequest("Task cannot be null");
            }

            task.Id = Guid.NewGuid();
            _tasks.Add(task);
            return Ok(task);
        }

        [HttpPut("{id}", Name = "UpdateTask")]
        public IActionResult UpdateTask(Guid id, [FromBody] TaskModel updatedTask)
        {
            if (updatedTask == null)
            {
                return BadRequest("Task is required");
            }

            var task = _tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound();
            }

            updatedTask.Id = id;
            int index = _tasks.IndexOf(task);
            _tasks[index] = updatedTask;

            return Ok("Task updated");
        }
    }
}
