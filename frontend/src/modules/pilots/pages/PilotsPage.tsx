/**
 * Aviation Operations Platform
 * Module: Pilots
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { usePilotsList, usePilotsMutations } from '../hooks/usePilots';
import { PilotsTable } from '../components/PilotsTable';
import { PilotsFilters } from '../components/PilotsFilters';
import { PilotsForm } from '../components/PilotsForm';
import { PilotsStatsPanel } from '../components/PilotsStatsPanel';

export function PilotsPage() {
  const { items, total, loading, error, filter, setFilter, reload } = usePilotsList();
  const { busy, create, update, remove } = usePilotsMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — Pilots (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--pilots`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <PilotsFilters value={filter} onChange={setFilter} />
      <PilotsStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <PilotsTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <PilotsForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
