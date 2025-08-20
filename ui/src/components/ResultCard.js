export default function ResultCard({ title, amount, formatter }) {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-value">{formatter.format(amount ?? 0)}</p>
        </div>
    );
}
