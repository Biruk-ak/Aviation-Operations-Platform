/**
 * Aviation Operations Platform
 * Module: FuelManagement
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useFuelManagementList, useFuelManagementMutations } from '../hooks/useFuelManagement';
import { FuelManagementTable } from '../components/FuelManagementTable';
import { FuelManagementFilters } from '../components/FuelManagementFilters';
import { FuelManagementForm } from '../components/FuelManagementForm';
import { FuelManagementStatsPanel } from '../components/FuelManagementStatsPanel';

export function FuelManagementPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useFuelManagementList();
  const { busy, create, update, remove } = useFuelManagementMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — FuelManagement (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--fuel-management`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <FuelManagementFilters value={filter} onChange={setFilter} />
      <FuelManagementStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <FuelManagementTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <FuelManagementForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
