using Microsoft.AspNetCore.Mvc;

namespace FCamara.CommissionCalculator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CommisionController : ControllerBase
    {
        [ProducesResponseType(typeof(CommissionCalculationResponse), 200)]
        [HttpPost]
        public IActionResult Calculate(CommissionCalculationRequest calculationRequest)
        {
            if (calculationRequest == null)
                return BadRequest(new { error = "Mandatory body." });

            if (calculationRequest.LocalSalesCount < 0 || calculationRequest.ForeignSalesCount < 0)
                return BadRequest(new { error = "Sales counts must be >= 0." });

            if (calculationRequest.AverageSaleAmount < 0)
                return BadRequest(new { error = "AverageSaleAmount must be >= 0." });

            if (calculationRequest.LocalSalesCount == 0 && calculationRequest.ForeignSalesCount == 0)
                return BadRequest(new { error = "At least one sale count must be > 0." });

            const decimal FCamaraLocalRate = 0.20m;
            const decimal FCamaraForeignRate = 0.35m;
            const decimal CompetitorLocalRate = 0.02m;
            const decimal CompetitorForeignRate = 0.0755m;

            decimal localAmount = calculationRequest.LocalSalesCount * calculationRequest.AverageSaleAmount;
            decimal foreignAmount = calculationRequest.ForeignSalesCount * calculationRequest.AverageSaleAmount;

            decimal fcamara = Math.Round(localAmount * FCamaraLocalRate + foreignAmount * FCamaraForeignRate, 2, MidpointRounding.AwayFromZero);
            decimal competitor = Math.Round(localAmount * CompetitorLocalRate + foreignAmount * CompetitorForeignRate, 2, MidpointRounding.AwayFromZero);

            return Ok(new CommissionCalculationResponse()
            {
                FCamaraCommissionAmount = fcamara,
                CompetitorCommissionAmount = competitor
            });
        }
    }

    public class CommissionCalculationRequest
    {
        public int LocalSalesCount { get; set; }
        public int ForeignSalesCount { get; set; }
        public decimal AverageSaleAmount { get; set; }
    }

    public class CommissionCalculationResponse
    {
        public decimal FCamaraCommissionAmount { get; set; }
        public decimal CompetitorCommissionAmount { get; set; }
    }
}
