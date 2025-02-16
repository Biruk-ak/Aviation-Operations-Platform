/**
 * Aviation Operations Platform
 * Module: Ticketing
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useTicketingList, useTicketingMutations } from '../hooks/useTicketing';
import { TicketingTable } from '../components/TicketingTable';
import { TicketingFilters } from '../components/TicketingFilters';
import { TicketingForm } from '../components/TicketingForm';
import { TicketingStatsPanel } from '../components/TicketingStatsPanel';

export function TicketingPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useTicketingList();
  const { busy, create, update, remove } = useTicketingMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — Ticketing (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--ticketing`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <TicketingFilters value={filter} onChange={setFilter} />
      <TicketingStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <TicketingTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <TicketingForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
