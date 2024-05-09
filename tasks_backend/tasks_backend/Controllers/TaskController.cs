using Microsoft.AspNetCore.Mvc;
using tasks_backend.Models;

namespace tasks_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        static List<TaskModel> _tasks = new List<TaskModel> { new TaskModel { Id = Guid.NewGuid(), Title = "First Task", Description = "First Task Description" , AssignedTo = "Author_1", Status = "To do"},
                    new TaskModel { Id = Guid.NewGuid(), Title = "Second Task", Description = "Second Task Description", AssignedTo = "Author_1", Status = "To do" },
                    new TaskModel { Id = Guid.NewGuid(), Title = "Third Task", Description = "Third Task Description", AssignedTo = "Author_2", Status = "To do"  },
                    new TaskModel { Id = Guid.NewGuid(), Title = "Fourth Task", Description = "Fourth Task Description", AssignedTo = "Author_3", Status = "To do"  },
                    new TaskModel { Id = Guid.NewGuid(), Title = "Fifth Task", Description = "Fifth Task Description", AssignedTo = "Author_4", Status = "To do"  }
                    };

        [HttpGet("tasks")]
        public IActionResult GetTasks()
        {
            return Ok(_tasks);
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
