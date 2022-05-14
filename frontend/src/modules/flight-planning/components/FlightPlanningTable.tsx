/**
 * Aviation Operations Platform
 * Module: FlightPlanning
 * Layer: frontend/components/Table
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import React from 'react';
import type { FlightPlanning } from '../types/flight-planning.types';

export interface FlightPlanningTableProps {
  items: FlightPlanning[];
  onEdit: (row: FlightPlanning) => void;
  onDelete: (id: string) => void;
}

export function FlightPlanningTable({ items, onEdit, onDelete }: FlightPlanningTableProps) {
  return (
    <div className="aop-table-wrap">
      <table className="aop-table">
        <thead>
          <tr>
            <th>code</th>
            <th>name</th>
            <th>status</th>
            <th>region</th>
            <th>icao</th>
            <th>iata</th>
            <th>priority</th>
            <th>updatedAt</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <tr key={row.id}>
              <td>{row.code}</td>
              <td>{row.name}</td>
              <td>{row.status}</td>
              <td>{row.region}</td>
              <td>{row.icao}</td>
              <td>{row.iata}</td>
              <td>{row.priority}</td>
              <td>{row.updatedAt}</td>
              <td>
                <button type="button" onClick={() => onEdit(row)}>Edit</button>
                <button type="button" onClick={() => onDelete(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
