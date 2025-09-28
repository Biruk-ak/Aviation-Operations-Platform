/**
 * Aviation Operations Platform
 * Module: MobileApps
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useMobileAppsList, useMobileAppsMutations } from '../hooks/useMobileApps';
import { MobileAppsTable } from '../components/MobileAppsTable';
import { MobileAppsFilters } from '../components/MobileAppsFilters';
import { MobileAppsForm } from '../components/MobileAppsForm';
import { MobileAppsStatsPanel } from '../components/MobileAppsStatsPanel';

export function MobileAppsPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useMobileAppsList();
  const { busy, create, update, remove } = useMobileAppsMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — MobileApps (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--mobile-apps`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <MobileAppsFilters value={filter} onChange={setFilter} />
      <MobileAppsStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <MobileAppsTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <MobileAppsForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
