using Microsoft.AspNetCore.Mvc;

namespace tasks_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        [HttpGet(Name = "GetTasks")]
        public ObjectResult Get()
        {
            return Ok("This is a list of tasks");
        }

        [HttpDelete(Name = "DeleteTask")]
        public ObjectResult Delete()
        {
            return Ok("Task deleted");
        }

        [HttpPost(Name = "CreateTask")]
        public ObjectResult Post()
        {
            return Ok("Task created");
        }

        [HttpPut(Name = "UpdateTask")]
        public ObjectResult Put()
        {
            return Ok("Task updated");
        }
    }
}
