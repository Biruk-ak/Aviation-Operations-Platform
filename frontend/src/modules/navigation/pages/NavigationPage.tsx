/**
 * Aviation Operations Platform
 * Module: Navigation
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useNavigationList, useNavigationMutations } from '../hooks/useNavigation';
import { NavigationTable } from '../components/NavigationTable';
import { NavigationFilters } from '../components/NavigationFilters';
import { NavigationForm } from '../components/NavigationForm';
import { NavigationStatsPanel } from '../components/NavigationStatsPanel';

export function NavigationPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useNavigationList();
  const { busy, create, update, remove } = useNavigationMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — Navigation (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--navigation`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <NavigationFilters value={filter} onChange={setFilter} />
      <NavigationStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <NavigationTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <NavigationForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
