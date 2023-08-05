/**
 * Aviation Operations Platform
 * Module: Cargo
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useCargoList, useCargoMutations } from '../hooks/useCargo';
import { CargoTable } from '../components/CargoTable';
import { CargoFilters } from '../components/CargoFilters';
import { CargoForm } from '../components/CargoForm';
import { CargoStatsPanel } from '../components/CargoStatsPanel';

export function CargoPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useCargoList();
  const { busy, create, update, remove } = useCargoMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — Cargo (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--cargo`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <CargoFilters value={filter} onChange={setFilter} />
      <CargoStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <CargoTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <CargoForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
