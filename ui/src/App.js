import { useState } from 'react';
import { calculateCommission } from './api';
import ResultCard from './components/ResultCard';
import './App.css';

const gbp = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });

function App() {
    const [localSalesCount, setLocal] = useState(10);
    const [foreignSalesCount, setForeign] = useState(10);
    const [averageSaleAmount, setAvg] = useState(100);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [fcamara, setFcamara] = useState(null);
    const [competitor, setCompetitor] = useState(null);

    function parseNum(v) {
        const n = typeof v === 'number' ? v : Number(v);
        return Number.isFinite(n) ? n : 0;
    }

    async function onSubmit(e) {
        e.preventDefault();
        setError(null);
        setFcamara(null);
        setCompetitor(null);
        setLoading(true);

        try {
            const ls = parseNum(localSalesCount);
            const fs = parseNum(foreignSalesCount);
            const avg = parseNum(averageSaleAmount);

            if (ls < 0 || fs < 0 || avg < 0) {
                throw new Error('Values must be greater than or equal to 0.');
            }
            if (ls === 0 && fs === 0) {
                throw new Error('At least one sale count must be greater than 0.');
            }

            const data = await calculateCommission({
                LocalSalesCount: ls,
                ForeignSalesCount: fs,
                AverageSaleAmount: avg
            });

            // camelCase (ASP.NET default) com fallback para PascalCase
            setFcamara(data.fCamaraCommissionAmount ?? data.FCamaraCommissionAmount);
            setCompetitor(data.competitorCommissionAmount ?? data.CompetitorCommissionAmount);
        } catch (err) {
            setError(err.message || 'Unexpected error');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="page">
            <header className="header">
                <h1>Commission Calculator</h1>
                <p className="sub">Compare FCamara vs Competitor commissions</p>
            </header>

            <form className="form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Local Sales Count</label>
                    <input
                        type="number"
                        min="0"
                        value={Number.isFinite(localSalesCount) ? localSalesCount : ''}
                        onChange={e => setLocal(e.target.valueAsNumber)}
                        placeholder="e.g. 10"
                        required
                    />
                </div>

                <div className="field">
                    <label>Foreign Sales Count</label>
                    <input
                        type="number"
                        min="0"
                        value={Number.isFinite(foreignSalesCount) ? foreignSalesCount : ''}
                        onChange={e => setForeign(e.target.valueAsNumber)}
                        placeholder="e.g. 10"
                        required
                    />
                </div>

                <div className="field">
                    <label>Average Sale Amount (GBP)</label>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={Number.isFinite(averageSaleAmount) ? averageSaleAmount : ''}
                        onChange={e => setAvg(e.target.valueAsNumber)}
                        placeholder="e.g. 100.00"
                        required
                    />
                </div>

                <button className="btn" type="submit" disabled={loading}>
                    {loading ? 'Calculating…' : 'Calculate'}
                </button>

                {error && <div className="error" role="alert">{error}</div>}
            </form>

            {(fcamara != null || competitor != null) && (
                <section className="results">
                    <ResultCard title="FCamara (Total Commission)" amount={fcamara ?? 0} formatter={gbp} />
                    <ResultCard title="Competitor (Total Commission)" amount={competitor ?? 0} formatter={gbp} />
                    <div className="diff card">
                        <h3 className="card-title">Difference (FCamara - Competitor)</h3>
                        <p className="card-value">
                            {gbp.format((fcamara ?? 0) - (competitor ?? 0))}
                        </p>
                    </div>
                </section>
            )}

            <footer className="footer">
                <small>Connected to: {process.env.REACT_APP_API_URL || '(set REACT_APP_API_URL in .env)'}</small>
            </footer>
        </div>
    );
}

export default App;
