/**
 * Aviation Operations Platform
 * Module: Maintenance
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useMaintenanceList, useMaintenanceMutations } from '../hooks/useMaintenance';
import { MaintenanceTable } from '../components/MaintenanceTable';
import { MaintenanceFilters } from '../components/MaintenanceFilters';
import { MaintenanceForm } from '../components/MaintenanceForm';
import { MaintenanceStatsPanel } from '../components/MaintenanceStatsPanel';

export function MaintenancePage() {
  const { items, total, loading, error, filter, setFilter, reload } = useMaintenanceList();
  const { busy, create, update, remove } = useMaintenanceMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — Maintenance (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--maintenance`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <MaintenanceFilters value={filter} onChange={setFilter} />
      <MaintenanceStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <MaintenanceTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <MaintenanceForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
