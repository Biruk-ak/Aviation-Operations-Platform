/**
 * Aviation Operations Platform
 * Module: FuelManagement
 * Layer: frontend/types
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
export interface FuelManagement {
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

export type FuelManagementStatus = 'draft' | 'active' | 'suspended' | 'archived' | 'pending';
export type FuelManagementPriority = 'low' | 'medium' | 'high' | 'critical';

export interface FuelManagementFilter {
  status?: FuelManagementStatus[];
  search?: string;
  organizationId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface FuelManagementCreateInput {
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

export interface FuelManagementUpdateInput extends Partial<FuelManagementCreateInput> {
  id: string;
}

export interface FuelManagementListResponse {
  items: FuelManagement[];
  total: number;
  page: number;
  pageSize: number;
}

export interface FuelManagementEvent {
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

export type FuelManagementEventStatus = 'draft' | 'active' | 'suspended' | 'archived' | 'pending';
export type FuelManagementEventPriority = 'low' | 'medium' | 'high' | 'critical';

export interface FuelManagementEventFilter {
  status?: FuelManagementEventStatus[];
  search?: string;
  organizationId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface FuelManagementEventCreateInput {
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

export interface FuelManagementEventUpdateInput extends Partial<FuelManagementEventCreateInput> {
  id: string;
}

export interface FuelManagementEventListResponse {
  items: FuelManagementEvent[];
  total: number;
  page: number;
  pageSize: number;
}

