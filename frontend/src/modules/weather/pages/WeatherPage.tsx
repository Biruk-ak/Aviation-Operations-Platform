/**
 * Aviation Operations Platform
 * Module: Weather
 * Layer: frontend/pages
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React, { useMemo, useState } from 'react';
import { useWeatherList, useWeatherMutations } from '../hooks/useWeather';
import { WeatherTable } from '../components/WeatherTable';
import { WeatherFilters } from '../components/WeatherFilters';
import { WeatherForm } from '../components/WeatherForm';
import { WeatherStatsPanel } from '../components/WeatherStatsPanel';

export function WeatherPage() {
  const { items, total, loading, error, filter, setFilter, reload } = useWeatherList();
  const { busy, create, update, remove } = useWeatherMutations();
  const [showForm, setShowForm] = useState(false);

  const titleText = useMemo(() => `Aviation Operations — Weather (${total})`, [total]);

  return (
    <section className={`aop-module aop-module--weather`}>
      <header className="aop-module__header">
        <h1>{titleText}</h1>
        <p>Enterprise aviation management module for operational control.</p>
        <button type="button" disabled={busy} onClick={() => setShowForm(true)}>Create</button>
        <button type="button" onClick={() => void reload()}>Refresh</button>
      </header>
      <WeatherFilters value={filter} onChange={setFilter} />
      <WeatherStatsPanel />
      {error ? <div className="aop-error">{error}</div> : null}
      {loading ? <div className="aop-loading">Loading…</div> : null}
      <WeatherTable items={items} onEdit={(row) => void update(row)} onDelete={(id) => void remove(id)} />
      {showForm ? <WeatherForm onSubmit={async (v) => { await create(v); setShowForm(false); await reload(); }} onCancel={() => setShowForm(false)} /> : null}
    </section>
  );
}
