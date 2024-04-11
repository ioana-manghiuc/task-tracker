using Microsoft.AspNetCore.Mvc;

namespace tasks_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExercisesController : ControllerBase
    {
        private static List<string> strings = new List<string> { "ana", "vasile", "gheorghe", "maria", "ion" };

        [HttpGet("HardcodedList")]
        public List<string> GetHardcodedList()
        {
            return strings;
        }

        [HttpGet("{id}", Name = "Test")]
        public string Get(string id, double queryParam1, double queryParam2)
        {
            return $"{id}: {queryParam1 + queryParam2} ";
        }

        [HttpPost("SumOfNumbers")]
        public double GetSumOfNumbers([FromBody] List<double> numbers)
        {
            double sum = 0;
            if (numbers != null && numbers.Count > 0)
            {
                foreach (double number in numbers)
                {
                    sum += number;
                }
            }
            return sum;
        }

        [HttpPut("UpdateList/{index}")]
        public IActionResult UpdateList(int index, [FromBody] string value)
        {
            if (index < 0 || index >= strings.Count)
            {
                return BadRequest("Invalid index");
            }

            if (value == null)
            {
                return BadRequest("Value cannot be null");
            }

            strings[index] = value;
            return Ok(strings);
        }

        [HttpDelete("DeleteElement/{index}")]
        public IActionResult DeleteElement(int index)
        {
            if (index < 0 || index >= strings.Count)
            {
                return BadRequest("Invalid index");
            }

            strings.RemoveAt(index);
            return Ok(strings);
        }
    }
}
