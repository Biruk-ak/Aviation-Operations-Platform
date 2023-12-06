/**
 * Aviation Operations Platform
 * Module: Weather
 * Layer: frontend/types
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
export interface Weather {
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

export type WeatherStatus = 'draft' | 'active' | 'suspended' | 'archived' | 'pending';
export type WeatherPriority = 'low' | 'medium' | 'high' | 'critical';

export interface WeatherFilter {
  status?: WeatherStatus[];
  search?: string;
  organizationId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface WeatherCreateInput {
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

export interface WeatherUpdateInput extends Partial<WeatherCreateInput> {
  id: string;
}

export interface WeatherListResponse {
  items: Weather[];
  total: number;
  page: number;
  pageSize: number;
}

export interface WeatherEvent {
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

export type WeatherEventStatus = 'draft' | 'active' | 'suspended' | 'archived' | 'pending';
export type WeatherEventPriority = 'low' | 'medium' | 'high' | 'critical';

export interface WeatherEventFilter {
  status?: WeatherEventStatus[];
  search?: string;
  organizationId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface WeatherEventCreateInput {
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

export interface WeatherEventUpdateInput extends Partial<WeatherEventCreateInput> {
  id: string;
}

export interface WeatherEventListResponse {
  items: WeatherEvent[];
  total: number;
  page: number;
  pageSize: number;
}

