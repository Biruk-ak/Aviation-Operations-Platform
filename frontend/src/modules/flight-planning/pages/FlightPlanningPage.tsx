/**
 * Aviation Operations Platform
 * Module: FlightPlanning
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useFlightPlanningList, useFlightPlanningMutations } from '../hooks/useFlightPlanning';
import { FlightPlanningTable } from '../components/FlightPlanningTable';
import { FlightPlanningFilters } from '../components/FlightPlanningFilters';
import { FlightPlanningForm } from '../components/FlightPlanningForm';
import { FlightPlanningStatsPanel } from '../components/FlightPlanningStatsPanel';

export function FlightPlanningPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useFlightPlanningList();
  const { busy, create, update, remove } = useFlightPlanningMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — FlightPlanning (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--flight-planning`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <FlightPlanningFilters value={filter} onChange={setFilter} />
      <FlightPlanningStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <FlightPlanningTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <FlightPlanningForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
