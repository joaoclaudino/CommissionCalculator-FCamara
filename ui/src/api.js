export async function calculateCommission({ LocalSalesCount, ForeignSalesCount, AverageSaleAmount }) {
    const baseUrl = process.env.REACT_APP_API_URL || '';
    const url = `${baseUrl}/Commision`;
    const payload = { LocalSalesCount, ForeignSalesCount, AverageSaleAmount };

    console.log('[API] POST', url, payload);

    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({ error: res.statusText }));
        console.error('[API] ERROR', res.status, err);
        throw new Error(err.error ?? `Request failed (${res.status})`);
    }

    const data = await res.json();
    console.log('[API] OK', data);
    return data;
}
