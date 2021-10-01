/**
 * Aviation Operations Platform
 * Module: Aircraft
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useAircraftList, useAircraftMutations } from '../hooks/useAircraft';
import { AircraftTable } from '../components/AircraftTable';
import { AircraftFilters } from '../components/AircraftFilters';
import { AircraftForm } from '../components/AircraftForm';
import { AircraftStatsPanel } from '../components/AircraftStatsPanel';

export function AircraftPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useAircraftList();
  const { busy, create, update, remove } = useAircraftMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — Aircraft (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--aircraft`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <AircraftFilters value={filter} onChange={setFilter} />
      <AircraftStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <AircraftTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <AircraftForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
