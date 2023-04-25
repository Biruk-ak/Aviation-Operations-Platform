/**
 * Aviation Operations Platform
 * Module: AirportDashboard
 * Layer: frontend/types
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
export interface AirportDashboard {
  id: string;
  code: string;
  name: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  organizationId: string;
  notes: string;
  priority: number;
  isActive: boolean;
  region: string;
  icao: string;
  iata: string;
  latitude: number;
  longitude: number;
  timezone: string;
  version: number;
  metadata: Record<string, unknown>;
  customField1?: string | number | boolean | null;
  customField2?: string | number | boolean | null;
  customField3?: string | number | boolean | null;
  customField4?: string | number | boolean | null;
  customField5?: string | number | boolean | null;
  customField6?: string | number | boolean | null;
  customField7?: string | number | boolean | null;
  customField8?: string | number | boolean | null;
  customField9?: string | number | boolean | null;
  customField10?: string | number | boolean | null;
  customField11?: string | number | boolean | null;
  customField12?: string | number | boolean | null;
}

export type AirportDashboardStatus = 'draft' | 'active' | 'suspended' | 'archived' | 'pending';
export type AirportDashboardPriority = 'low' | 'medium' | 'high' | 'critical';

export interface AirportDashboardFilter {
  status?: AirportDashboardStatus[];
  search?: string;
  organizationId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface AirportDashboardCreateInput {
  code?: string;
  name?: string;
  status?: string;
  organizationId?: string;
  notes?: string;
  priority?: number;
  isActive?: boolean;
  region?: string;
  icao?: string;
  iata?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  metadata?: Record<string, unknown>;
}

export interface AirportDashboardUpdateInput extends Partial<AirportDashboardCreateInput> {
  id: string;
}

export interface AirportDashboardListResponse {
  items: AirportDashboard[];
  total: number;
  page: number;
  pageSize: number;
}

export interface AirportDashboardEvent {
  id: string;
  code: string;
  name: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  organizationId: string;
  notes: string;
  priority: number;
  isActive: boolean;
  region: string;
  icao: string;
  iata: string;
  latitude: number;
  longitude: number;
  timezone: string;
  version: number;
  metadata: Record<string, unknown>;
  eventType: string;
  severity: unknown;
  customField1?: string | number | boolean | null;
  customField2?: string | number | boolean | null;
  customField3?: string | number | boolean | null;
  customField4?: string | number | boolean | null;
  customField5?: string | number | boolean | null;
  customField6?: string | number | boolean | null;
  customField7?: string | number | boolean | null;
  customField8?: string | number | boolean | null;
  customField9?: string | number | boolean | null;
  customField10?: string | number | boolean | null;
  customField11?: string | number | boolean | null;
  customField12?: string | number | boolean | null;
}

export type AirportDashboardEventStatus = 'draft' | 'active' | 'suspended' | 'archived' | 'pending';
export type AirportDashboardEventPriority = 'low' | 'medium' | 'high' | 'critical';

export interface AirportDashboardEventFilter {
  status?: AirportDashboardEventStatus[];
  search?: string;
  organizationId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface AirportDashboardEventCreateInput {
  code?: string;
  name?: string;
  status?: string;
  organizationId?: string;
  notes?: string;
  priority?: number;
  isActive?: boolean;
  region?: string;
  icao?: string;
  iata?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  metadata?: Record<string, unknown>;
  eventType?: string;
  severity?: unknown;
}

export interface AirportDashboardEventUpdateInput extends Partial<AirportDashboardEventCreateInput> {
  id: string;
}

export interface AirportDashboardEventListResponse {
  items: AirportDashboardEvent[];
  total: number;
  page: number;
  pageSize: number;
}

