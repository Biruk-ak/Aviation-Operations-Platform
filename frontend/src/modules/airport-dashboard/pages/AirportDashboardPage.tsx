/**
 * Aviation Operations Platform
 * Module: AirportDashboard
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useAirportDashboardList, useAirportDashboardMutations } from '../hooks/useAirportDashboard';
import { AirportDashboardTable } from '../components/AirportDashboardTable';
import { AirportDashboardFilters } from '../components/AirportDashboardFilters';
import { AirportDashboardForm } from '../components/AirportDashboardForm';
import { AirportDashboardStatsPanel } from '../components/AirportDashboardStatsPanel';

export function AirportDashboardPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useAirportDashboardList();
  const { busy, create, update, remove } = useAirportDashboardMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — AirportDashboard (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--airport-dashboard`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <AirportDashboardFilters value={filter} onChange={setFilter} />
      <AirportDashboardStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <AirportDashboardTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <AirportDashboardForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
