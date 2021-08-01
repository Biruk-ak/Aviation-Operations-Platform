import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AircraftPage } from './modules/aircraft/pages/AircraftPage';
import { PilotsPage } from './modules/pilots/pages/PilotsPage';
import { FlightPlanningPage } from './modules/flight-planning/pages/FlightPlanningPage';
import { MaintenancePage } from './modules/maintenance/pages/MaintenancePage';
import { GroundOperationsPage } from './modules/ground-operations/pages/GroundOperationsPage';
import { AirportDashboardPage } from './modules/airport-dashboard/pages/AirportDashboardPage';
import { CargoPage } from './modules/cargo/pages/CargoPage';
import { WeatherPage } from './modules/weather/pages/WeatherPage';
import { NavigationPage } from './modules/navigation/pages/NavigationPage';
import { FuelManagementPage } from './modules/fuel-management/pages/FuelManagementPage';
import { CrewSchedulingPage } from './modules/crew-scheduling/pages/CrewSchedulingPage';
import { TicketingPage } from './modules/ticketing/pages/TicketingPage';
import { AnalyticsPage } from './modules/analytics/pages/AnalyticsPage';
import { MobileAppsPage } from './modules/mobile-apps/pages/MobileAppsPage';

const links = [
  { to: '/aircraft', label: 'Aircraft' },
  { to: '/pilots', label: 'Pilots' },
  { to: '/flight-planning', label: 'FlightPlanning' },
  { to: '/maintenance', label: 'Maintenance' },
  { to: '/ground-operations', label: 'GroundOperations' },
  { to: '/airport-dashboard', label: 'AirportDashboard' },
  { to: '/cargo', label: 'Cargo' },
  { to: '/weather', label: 'Weather' },
  { to: '/navigation', label: 'Navigation' },
  { to: '/fuel-management', label: 'FuelManagement' },
  { to: '/crew-scheduling', label: 'CrewScheduling' },
  { to: '/ticketing', label: 'Ticketing' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/mobile-apps', label: 'MobileApps' },
];

export function App() {
  return (
    <div className="aop-shell">
      <nav className="aop-nav">
        <h1>Aviation Operations Platform</h1>
        {links.map((l) => (
          <Link key={l.to} to={l.to}>{l.label}</Link>
        ))}
      </nav>
      <main className="aop-main">
        <Routes>
          <Route path="/" element={<div><h2>Enterprise aviation management</h2><p>Select a module to begin.</p></div>} />
          <Route path="/aircraft" element={<AircraftPage />} />
          <Route path="/pilots" element={<PilotsPage />} />
          <Route path="/flight-planning" element={<FlightPlanningPage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/ground-operations" element={<GroundOperationsPage />} />
          <Route path="/airport-dashboard" element={<AirportDashboardPage />} />
          <Route path="/cargo" element={<CargoPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/navigation" element={<NavigationPage />} />
          <Route path="/fuel-management" element={<FuelManagementPage />} />
          <Route path="/crew-scheduling" element={<CrewSchedulingPage />} />
          <Route path="/ticketing" element={<TicketingPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/mobile-apps" element={<MobileAppsPage />} />
        </Routes>
      </main>
    </div>
  );
}
