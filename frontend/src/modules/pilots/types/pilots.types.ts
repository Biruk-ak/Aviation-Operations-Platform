/**
 * Aviation Operations Platform
 * Module: Pilots
 * Layer: frontend/types
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
export interface Pilots {
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

export type PilotsStatus = 'draft' | 'active' | 'suspended' | 'archived' | 'pending';
export type PilotsPriority = 'low' | 'medium' | 'high' | 'critical';

export interface PilotsFilter {
  status?: PilotsStatus[];
  search?: string;
  organizationId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface PilotsCreateInput {
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

export interface PilotsUpdateInput extends Partial<PilotsCreateInput> {
  id: string;
}

export interface PilotsListResponse {
  items: Pilots[];
  total: number;
  page: number;
  pageSize: number;
}

export interface PilotsEvent {
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

export type PilotsEventStatus = 'draft' | 'active' | 'suspended' | 'archived' | 'pending';
export type PilotsEventPriority = 'low' | 'medium' | 'high' | 'critical';

export interface PilotsEventFilter {
  status?: PilotsEventStatus[];
  search?: string;
  organizationId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface PilotsEventCreateInput {
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

export interface PilotsEventUpdateInput extends Partial<PilotsEventCreateInput> {
  id: string;
}

export interface PilotsEventListResponse {
  items: PilotsEvent[];
  total: number;
  page: number;
  pageSize: number;
}

