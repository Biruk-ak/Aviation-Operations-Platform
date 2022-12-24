/**
 * Aviation Operations Platform
 * Module: GroundOperations
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useGroundOperationsList, useGroundOperationsMutations } from '../hooks/useGroundOperations';
import { GroundOperationsTable } from '../components/GroundOperationsTable';
import { GroundOperationsFilters } from '../components/GroundOperationsFilters';
import { GroundOperationsForm } from '../components/GroundOperationsForm';
import { GroundOperationsStatsPanel } from '../components/GroundOperationsStatsPanel';

export function GroundOperationsPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useGroundOperationsList();
  const { busy, create, update, remove } = useGroundOperationsMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — GroundOperations (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--ground-operations`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <GroundOperationsFilters value={filter} onChange={setFilter} />
      <GroundOperationsStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <GroundOperationsTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <GroundOperationsForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
