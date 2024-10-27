/**
 * Aviation Operations Platform
 * Module: CrewScheduling
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useCrewSchedulingList, useCrewSchedulingMutations } from '../hooks/useCrewScheduling';
import { CrewSchedulingTable } from '../components/CrewSchedulingTable';
import { CrewSchedulingFilters } from '../components/CrewSchedulingFilters';
import { CrewSchedulingForm } from '../components/CrewSchedulingForm';
import { CrewSchedulingStatsPanel } from '../components/CrewSchedulingStatsPanel';

export function CrewSchedulingPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useCrewSchedulingList();
  const { busy, create, update, remove } = useCrewSchedulingMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — CrewScheduling (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--crew-scheduling`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <CrewSchedulingFilters value={filter} onChange={setFilter} />
      <CrewSchedulingStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <CrewSchedulingTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <CrewSchedulingForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
