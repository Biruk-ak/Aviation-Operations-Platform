/**
 * Aviation Operations Platform
 * Module: Analytics
 * Layer: frontend/types
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
export interface Analytics {
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

export type AnalyticsStatus = 'draft' | 'active' | 'suspended' | 'archived' | 'pending';
export type AnalyticsPriority = 'low' | 'medium' | 'high' | 'critical';

export interface AnalyticsFilter {
  status?: AnalyticsStatus[];
  search?: string;
  organizationId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface AnalyticsCreateInput {
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

export interface AnalyticsUpdateInput extends Partial<AnalyticsCreateInput> {
  id: string;
}

export interface AnalyticsListResponse {
  items: Analytics[];
  total: number;
  page: number;
  pageSize: number;
}

export interface AnalyticsEvent {
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

export type AnalyticsEventStatus = 'draft' | 'active' | 'suspended' | 'archived' | 'pending';
export type AnalyticsEventPriority = 'low' | 'medium' | 'high' | 'critical';

export interface AnalyticsEventFilter {
  status?: AnalyticsEventStatus[];
  search?: string;
  organizationId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

export interface AnalyticsEventCreateInput {
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

export interface AnalyticsEventUpdateInput extends Partial<AnalyticsEventCreateInput> {
  id: string;
}

export interface AnalyticsEventListResponse {
  items: AnalyticsEvent[];
  total: number;
  page: number;
  pageSize: number;
}

