/**
 * Aviation Operations Platform
 * Module: FlightPlanning
 * Layer: frontend/selectors/7
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */


import type { FlightPlanning } from '../types/flight-planning.types';

export function selectFlightPlanningView7_1(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 1 + idx,
      bucket: ((x.priority || 0) + 1) % 7,
      tag1: `${x.region || 'NA'}-1-1`,
      tag2: `${x.region || 'NA'}-2-1`,
      tag3: `${x.region || 'NA'}-3-1`,
      tag4: `${x.region || 'NA'}-4-1`,
      tag5: `${x.region || 'NA'}-5-1`,
      tag6: `${x.region || 'NA'}-6-1`,
      tag7: `${x.region || 'NA'}-7-1`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_2(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 2 + idx,
      bucket: ((x.priority || 0) + 2) % 7,
      tag1: `${x.region || 'NA'}-1-2`,
      tag2: `${x.region || 'NA'}-2-2`,
      tag3: `${x.region || 'NA'}-3-2`,
      tag4: `${x.region || 'NA'}-4-2`,
      tag5: `${x.region || 'NA'}-5-2`,
      tag6: `${x.region || 'NA'}-6-2`,
      tag7: `${x.region || 'NA'}-7-2`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_3(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 3 + idx,
      bucket: ((x.priority || 0) + 3) % 7,
      tag1: `${x.region || 'NA'}-1-3`,
      tag2: `${x.region || 'NA'}-2-3`,
      tag3: `${x.region || 'NA'}-3-3`,
      tag4: `${x.region || 'NA'}-4-3`,
      tag5: `${x.region || 'NA'}-5-3`,
      tag6: `${x.region || 'NA'}-6-3`,
      tag7: `${x.region || 'NA'}-7-3`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_4(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 4 + idx,
      bucket: ((x.priority || 0) + 4) % 7,
      tag1: `${x.region || 'NA'}-1-4`,
      tag2: `${x.region || 'NA'}-2-4`,
      tag3: `${x.region || 'NA'}-3-4`,
      tag4: `${x.region || 'NA'}-4-4`,
      tag5: `${x.region || 'NA'}-5-4`,
      tag6: `${x.region || 'NA'}-6-4`,
      tag7: `${x.region || 'NA'}-7-4`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_5(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 5 + idx,
      bucket: ((x.priority || 0) + 5) % 7,
      tag1: `${x.region || 'NA'}-1-5`,
      tag2: `${x.region || 'NA'}-2-5`,
      tag3: `${x.region || 'NA'}-3-5`,
      tag4: `${x.region || 'NA'}-4-5`,
      tag5: `${x.region || 'NA'}-5-5`,
      tag6: `${x.region || 'NA'}-6-5`,
      tag7: `${x.region || 'NA'}-7-5`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_6(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 6 + idx,
      bucket: ((x.priority || 0) + 6) % 7,
      tag1: `${x.region || 'NA'}-1-6`,
      tag2: `${x.region || 'NA'}-2-6`,
      tag3: `${x.region || 'NA'}-3-6`,
      tag4: `${x.region || 'NA'}-4-6`,
      tag5: `${x.region || 'NA'}-5-6`,
      tag6: `${x.region || 'NA'}-6-6`,
      tag7: `${x.region || 'NA'}-7-6`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_7(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 7 + idx,
      bucket: ((x.priority || 0) + 7) % 7,
      tag1: `${x.region || 'NA'}-1-7`,
      tag2: `${x.region || 'NA'}-2-7`,
      tag3: `${x.region || 'NA'}-3-7`,
      tag4: `${x.region || 'NA'}-4-7`,
      tag5: `${x.region || 'NA'}-5-7`,
      tag6: `${x.region || 'NA'}-6-7`,
      tag7: `${x.region || 'NA'}-7-7`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_8(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 8 + idx,
      bucket: ((x.priority || 0) + 8) % 7,
      tag1: `${x.region || 'NA'}-1-8`,
      tag2: `${x.region || 'NA'}-2-8`,
      tag3: `${x.region || 'NA'}-3-8`,
      tag4: `${x.region || 'NA'}-4-8`,
      tag5: `${x.region || 'NA'}-5-8`,
      tag6: `${x.region || 'NA'}-6-8`,
      tag7: `${x.region || 'NA'}-7-8`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_9(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 9 + idx,
      bucket: ((x.priority || 0) + 9) % 7,
      tag1: `${x.region || 'NA'}-1-9`,
      tag2: `${x.region || 'NA'}-2-9`,
      tag3: `${x.region || 'NA'}-3-9`,
      tag4: `${x.region || 'NA'}-4-9`,
      tag5: `${x.region || 'NA'}-5-9`,
      tag6: `${x.region || 'NA'}-6-9`,
      tag7: `${x.region || 'NA'}-7-9`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_10(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 10 + idx,
      bucket: ((x.priority || 0) + 10) % 7,
      tag1: `${x.region || 'NA'}-1-10`,
      tag2: `${x.region || 'NA'}-2-10`,
      tag3: `${x.region || 'NA'}-3-10`,
      tag4: `${x.region || 'NA'}-4-10`,
      tag5: `${x.region || 'NA'}-5-10`,
      tag6: `${x.region || 'NA'}-6-10`,
      tag7: `${x.region || 'NA'}-7-10`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_11(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 11 + idx,
      bucket: ((x.priority || 0) + 11) % 7,
      tag1: `${x.region || 'NA'}-1-11`,
      tag2: `${x.region || 'NA'}-2-11`,
      tag3: `${x.region || 'NA'}-3-11`,
      tag4: `${x.region || 'NA'}-4-11`,
      tag5: `${x.region || 'NA'}-5-11`,
      tag6: `${x.region || 'NA'}-6-11`,
      tag7: `${x.region || 'NA'}-7-11`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_12(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 12 + idx,
      bucket: ((x.priority || 0) + 12) % 7,
      tag1: `${x.region || 'NA'}-1-12`,
      tag2: `${x.region || 'NA'}-2-12`,
      tag3: `${x.region || 'NA'}-3-12`,
      tag4: `${x.region || 'NA'}-4-12`,
      tag5: `${x.region || 'NA'}-5-12`,
      tag6: `${x.region || 'NA'}-6-12`,
      tag7: `${x.region || 'NA'}-7-12`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_13(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 13 + idx,
      bucket: ((x.priority || 0) + 13) % 7,
      tag1: `${x.region || 'NA'}-1-13`,
      tag2: `${x.region || 'NA'}-2-13`,
      tag3: `${x.region || 'NA'}-3-13`,
      tag4: `${x.region || 'NA'}-4-13`,
      tag5: `${x.region || 'NA'}-5-13`,
      tag6: `${x.region || 'NA'}-6-13`,
      tag7: `${x.region || 'NA'}-7-13`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_14(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 14 + idx,
      bucket: ((x.priority || 0) + 14) % 7,
      tag1: `${x.region || 'NA'}-1-14`,
      tag2: `${x.region || 'NA'}-2-14`,
      tag3: `${x.region || 'NA'}-3-14`,
      tag4: `${x.region || 'NA'}-4-14`,
      tag5: `${x.region || 'NA'}-5-14`,
      tag6: `${x.region || 'NA'}-6-14`,
      tag7: `${x.region || 'NA'}-7-14`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_15(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 15 + idx,
      bucket: ((x.priority || 0) + 15) % 7,
      tag1: `${x.region || 'NA'}-1-15`,
      tag2: `${x.region || 'NA'}-2-15`,
      tag3: `${x.region || 'NA'}-3-15`,
      tag4: `${x.region || 'NA'}-4-15`,
      tag5: `${x.region || 'NA'}-5-15`,
      tag6: `${x.region || 'NA'}-6-15`,
      tag7: `${x.region || 'NA'}-7-15`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_16(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 16 + idx,
      bucket: ((x.priority || 0) + 16) % 7,
      tag1: `${x.region || 'NA'}-1-16`,
      tag2: `${x.region || 'NA'}-2-16`,
      tag3: `${x.region || 'NA'}-3-16`,
      tag4: `${x.region || 'NA'}-4-16`,
      tag5: `${x.region || 'NA'}-5-16`,
      tag6: `${x.region || 'NA'}-6-16`,
      tag7: `${x.region || 'NA'}-7-16`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_17(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 17 + idx,
      bucket: ((x.priority || 0) + 17) % 7,
      tag1: `${x.region || 'NA'}-1-17`,
      tag2: `${x.region || 'NA'}-2-17`,
      tag3: `${x.region || 'NA'}-3-17`,
      tag4: `${x.region || 'NA'}-4-17`,
      tag5: `${x.region || 'NA'}-5-17`,
      tag6: `${x.region || 'NA'}-6-17`,
      tag7: `${x.region || 'NA'}-7-17`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_18(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 18 + idx,
      bucket: ((x.priority || 0) + 18) % 7,
      tag1: `${x.region || 'NA'}-1-18`,
      tag2: `${x.region || 'NA'}-2-18`,
      tag3: `${x.region || 'NA'}-3-18`,
      tag4: `${x.region || 'NA'}-4-18`,
      tag5: `${x.region || 'NA'}-5-18`,
      tag6: `${x.region || 'NA'}-6-18`,
      tag7: `${x.region || 'NA'}-7-18`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_19(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 19 + idx,
      bucket: ((x.priority || 0) + 19) % 7,
      tag1: `${x.region || 'NA'}-1-19`,
      tag2: `${x.region || 'NA'}-2-19`,
      tag3: `${x.region || 'NA'}-3-19`,
      tag4: `${x.region || 'NA'}-4-19`,
      tag5: `${x.region || 'NA'}-5-19`,
      tag6: `${x.region || 'NA'}-6-19`,
      tag7: `${x.region || 'NA'}-7-19`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_20(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 20 + idx,
      bucket: ((x.priority || 0) + 20) % 7,
      tag1: `${x.region || 'NA'}-1-20`,
      tag2: `${x.region || 'NA'}-2-20`,
      tag3: `${x.region || 'NA'}-3-20`,
      tag4: `${x.region || 'NA'}-4-20`,
      tag5: `${x.region || 'NA'}-5-20`,
      tag6: `${x.region || 'NA'}-6-20`,
      tag7: `${x.region || 'NA'}-7-20`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_21(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 21 + idx,
      bucket: ((x.priority || 0) + 21) % 7,
      tag1: `${x.region || 'NA'}-1-21`,
      tag2: `${x.region || 'NA'}-2-21`,
      tag3: `${x.region || 'NA'}-3-21`,
      tag4: `${x.region || 'NA'}-4-21`,
      tag5: `${x.region || 'NA'}-5-21`,
      tag6: `${x.region || 'NA'}-6-21`,
      tag7: `${x.region || 'NA'}-7-21`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_22(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 22 + idx,
      bucket: ((x.priority || 0) + 22) % 7,
      tag1: `${x.region || 'NA'}-1-22`,
      tag2: `${x.region || 'NA'}-2-22`,
      tag3: `${x.region || 'NA'}-3-22`,
      tag4: `${x.region || 'NA'}-4-22`,
      tag5: `${x.region || 'NA'}-5-22`,
      tag6: `${x.region || 'NA'}-6-22`,
      tag7: `${x.region || 'NA'}-7-22`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_23(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 23 + idx,
      bucket: ((x.priority || 0) + 23) % 7,
      tag1: `${x.region || 'NA'}-1-23`,
      tag2: `${x.region || 'NA'}-2-23`,
      tag3: `${x.region || 'NA'}-3-23`,
      tag4: `${x.region || 'NA'}-4-23`,
      tag5: `${x.region || 'NA'}-5-23`,
      tag6: `${x.region || 'NA'}-6-23`,
      tag7: `${x.region || 'NA'}-7-23`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_24(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 24 + idx,
      bucket: ((x.priority || 0) + 24) % 7,
      tag1: `${x.region || 'NA'}-1-24`,
      tag2: `${x.region || 'NA'}-2-24`,
      tag3: `${x.region || 'NA'}-3-24`,
      tag4: `${x.region || 'NA'}-4-24`,
      tag5: `${x.region || 'NA'}-5-24`,
      tag6: `${x.region || 'NA'}-6-24`,
      tag7: `${x.region || 'NA'}-7-24`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_25(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 25 + idx,
      bucket: ((x.priority || 0) + 25) % 7,
      tag1: `${x.region || 'NA'}-1-25`,
      tag2: `${x.region || 'NA'}-2-25`,
      tag3: `${x.region || 'NA'}-3-25`,
      tag4: `${x.region || 'NA'}-4-25`,
      tag5: `${x.region || 'NA'}-5-25`,
      tag6: `${x.region || 'NA'}-6-25`,
      tag7: `${x.region || 'NA'}-7-25`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_26(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 26 + idx,
      bucket: ((x.priority || 0) + 26) % 7,
      tag1: `${x.region || 'NA'}-1-26`,
      tag2: `${x.region || 'NA'}-2-26`,
      tag3: `${x.region || 'NA'}-3-26`,
      tag4: `${x.region || 'NA'}-4-26`,
      tag5: `${x.region || 'NA'}-5-26`,
      tag6: `${x.region || 'NA'}-6-26`,
      tag7: `${x.region || 'NA'}-7-26`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_27(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 27 + idx,
      bucket: ((x.priority || 0) + 27) % 7,
      tag1: `${x.region || 'NA'}-1-27`,
      tag2: `${x.region || 'NA'}-2-27`,
      tag3: `${x.region || 'NA'}-3-27`,
      tag4: `${x.region || 'NA'}-4-27`,
      tag5: `${x.region || 'NA'}-5-27`,
      tag6: `${x.region || 'NA'}-6-27`,
      tag7: `${x.region || 'NA'}-7-27`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_28(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 28 + idx,
      bucket: ((x.priority || 0) + 28) % 7,
      tag1: `${x.region || 'NA'}-1-28`,
      tag2: `${x.region || 'NA'}-2-28`,
      tag3: `${x.region || 'NA'}-3-28`,
      tag4: `${x.region || 'NA'}-4-28`,
      tag5: `${x.region || 'NA'}-5-28`,
      tag6: `${x.region || 'NA'}-6-28`,
      tag7: `${x.region || 'NA'}-7-28`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_29(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 29 + idx,
      bucket: ((x.priority || 0) + 29) % 7,
      tag1: `${x.region || 'NA'}-1-29`,
      tag2: `${x.region || 'NA'}-2-29`,
      tag3: `${x.region || 'NA'}-3-29`,
      tag4: `${x.region || 'NA'}-4-29`,
      tag5: `${x.region || 'NA'}-5-29`,
      tag6: `${x.region || 'NA'}-6-29`,
      tag7: `${x.region || 'NA'}-7-29`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_30(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 30 + idx,
      bucket: ((x.priority || 0) + 30) % 7,
      tag1: `${x.region || 'NA'}-1-30`,
      tag2: `${x.region || 'NA'}-2-30`,
      tag3: `${x.region || 'NA'}-3-30`,
      tag4: `${x.region || 'NA'}-4-30`,
      tag5: `${x.region || 'NA'}-5-30`,
      tag6: `${x.region || 'NA'}-6-30`,
      tag7: `${x.region || 'NA'}-7-30`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_31(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 31 + idx,
      bucket: ((x.priority || 0) + 31) % 7,
      tag1: `${x.region || 'NA'}-1-31`,
      tag2: `${x.region || 'NA'}-2-31`,
      tag3: `${x.region || 'NA'}-3-31`,
      tag4: `${x.region || 'NA'}-4-31`,
      tag5: `${x.region || 'NA'}-5-31`,
      tag6: `${x.region || 'NA'}-6-31`,
      tag7: `${x.region || 'NA'}-7-31`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_32(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 32 + idx,
      bucket: ((x.priority || 0) + 32) % 7,
      tag1: `${x.region || 'NA'}-1-32`,
      tag2: `${x.region || 'NA'}-2-32`,
      tag3: `${x.region || 'NA'}-3-32`,
      tag4: `${x.region || 'NA'}-4-32`,
      tag5: `${x.region || 'NA'}-5-32`,
      tag6: `${x.region || 'NA'}-6-32`,
      tag7: `${x.region || 'NA'}-7-32`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_33(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 33 + idx,
      bucket: ((x.priority || 0) + 33) % 7,
      tag1: `${x.region || 'NA'}-1-33`,
      tag2: `${x.region || 'NA'}-2-33`,
      tag3: `${x.region || 'NA'}-3-33`,
      tag4: `${x.region || 'NA'}-4-33`,
      tag5: `${x.region || 'NA'}-5-33`,
      tag6: `${x.region || 'NA'}-6-33`,
      tag7: `${x.region || 'NA'}-7-33`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_34(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 34 + idx,
      bucket: ((x.priority || 0) + 34) % 7,
      tag1: `${x.region || 'NA'}-1-34`,
      tag2: `${x.region || 'NA'}-2-34`,
      tag3: `${x.region || 'NA'}-3-34`,
      tag4: `${x.region || 'NA'}-4-34`,
      tag5: `${x.region || 'NA'}-5-34`,
      tag6: `${x.region || 'NA'}-6-34`,
      tag7: `${x.region || 'NA'}-7-34`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_35(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 35 + idx,
      bucket: ((x.priority || 0) + 35) % 7,
      tag1: `${x.region || 'NA'}-1-35`,
      tag2: `${x.region || 'NA'}-2-35`,
      tag3: `${x.region || 'NA'}-3-35`,
      tag4: `${x.region || 'NA'}-4-35`,
      tag5: `${x.region || 'NA'}-5-35`,
      tag6: `${x.region || 'NA'}-6-35`,
      tag7: `${x.region || 'NA'}-7-35`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_36(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 36 + idx,
      bucket: ((x.priority || 0) + 36) % 7,
      tag1: `${x.region || 'NA'}-1-36`,
      tag2: `${x.region || 'NA'}-2-36`,
      tag3: `${x.region || 'NA'}-3-36`,
      tag4: `${x.region || 'NA'}-4-36`,
      tag5: `${x.region || 'NA'}-5-36`,
      tag6: `${x.region || 'NA'}-6-36`,
      tag7: `${x.region || 'NA'}-7-36`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_37(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 37 + idx,
      bucket: ((x.priority || 0) + 37) % 7,
      tag1: `${x.region || 'NA'}-1-37`,
      tag2: `${x.region || 'NA'}-2-37`,
      tag3: `${x.region || 'NA'}-3-37`,
      tag4: `${x.region || 'NA'}-4-37`,
      tag5: `${x.region || 'NA'}-5-37`,
      tag6: `${x.region || 'NA'}-6-37`,
      tag7: `${x.region || 'NA'}-7-37`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_38(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 38 + idx,
      bucket: ((x.priority || 0) + 38) % 7,
      tag1: `${x.region || 'NA'}-1-38`,
      tag2: `${x.region || 'NA'}-2-38`,
      tag3: `${x.region || 'NA'}-3-38`,
      tag4: `${x.region || 'NA'}-4-38`,
      tag5: `${x.region || 'NA'}-5-38`,
      tag6: `${x.region || 'NA'}-6-38`,
      tag7: `${x.region || 'NA'}-7-38`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_39(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 39 + idx,
      bucket: ((x.priority || 0) + 39) % 7,
      tag1: `${x.region || 'NA'}-1-39`,
      tag2: `${x.region || 'NA'}-2-39`,
      tag3: `${x.region || 'NA'}-3-39`,
      tag4: `${x.region || 'NA'}-4-39`,
      tag5: `${x.region || 'NA'}-5-39`,
      tag6: `${x.region || 'NA'}-6-39`,
      tag7: `${x.region || 'NA'}-7-39`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_40(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 40 + idx,
      bucket: ((x.priority || 0) + 40) % 7,
      tag1: `${x.region || 'NA'}-1-40`,
      tag2: `${x.region || 'NA'}-2-40`,
      tag3: `${x.region || 'NA'}-3-40`,
      tag4: `${x.region || 'NA'}-4-40`,
      tag5: `${x.region || 'NA'}-5-40`,
      tag6: `${x.region || 'NA'}-6-40`,
      tag7: `${x.region || 'NA'}-7-40`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_41(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 41 + idx,
      bucket: ((x.priority || 0) + 41) % 7,
      tag1: `${x.region || 'NA'}-1-41`,
      tag2: `${x.region || 'NA'}-2-41`,
      tag3: `${x.region || 'NA'}-3-41`,
      tag4: `${x.region || 'NA'}-4-41`,
      tag5: `${x.region || 'NA'}-5-41`,
      tag6: `${x.region || 'NA'}-6-41`,
      tag7: `${x.region || 'NA'}-7-41`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_42(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 42 + idx,
      bucket: ((x.priority || 0) + 42) % 7,
      tag1: `${x.region || 'NA'}-1-42`,
      tag2: `${x.region || 'NA'}-2-42`,
      tag3: `${x.region || 'NA'}-3-42`,
      tag4: `${x.region || 'NA'}-4-42`,
      tag5: `${x.region || 'NA'}-5-42`,
      tag6: `${x.region || 'NA'}-6-42`,
      tag7: `${x.region || 'NA'}-7-42`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_43(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 43 + idx,
      bucket: ((x.priority || 0) + 43) % 7,
      tag1: `${x.region || 'NA'}-1-43`,
      tag2: `${x.region || 'NA'}-2-43`,
      tag3: `${x.region || 'NA'}-3-43`,
      tag4: `${x.region || 'NA'}-4-43`,
      tag5: `${x.region || 'NA'}-5-43`,
      tag6: `${x.region || 'NA'}-6-43`,
      tag7: `${x.region || 'NA'}-7-43`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_44(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 44 + idx,
      bucket: ((x.priority || 0) + 44) % 7,
      tag1: `${x.region || 'NA'}-1-44`,
      tag2: `${x.region || 'NA'}-2-44`,
      tag3: `${x.region || 'NA'}-3-44`,
      tag4: `${x.region || 'NA'}-4-44`,
      tag5: `${x.region || 'NA'}-5-44`,
      tag6: `${x.region || 'NA'}-6-44`,
      tag7: `${x.region || 'NA'}-7-44`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_45(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 45 + idx,
      bucket: ((x.priority || 0) + 45) % 7,
      tag1: `${x.region || 'NA'}-1-45`,
      tag2: `${x.region || 'NA'}-2-45`,
      tag3: `${x.region || 'NA'}-3-45`,
      tag4: `${x.region || 'NA'}-4-45`,
      tag5: `${x.region || 'NA'}-5-45`,
      tag6: `${x.region || 'NA'}-6-45`,
      tag7: `${x.region || 'NA'}-7-45`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_46(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 46 + idx,
      bucket: ((x.priority || 0) + 46) % 7,
      tag1: `${x.region || 'NA'}-1-46`,
      tag2: `${x.region || 'NA'}-2-46`,
      tag3: `${x.region || 'NA'}-3-46`,
      tag4: `${x.region || 'NA'}-4-46`,
      tag5: `${x.region || 'NA'}-5-46`,
      tag6: `${x.region || 'NA'}-6-46`,
      tag7: `${x.region || 'NA'}-7-46`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_47(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 47 + idx,
      bucket: ((x.priority || 0) + 47) % 7,
      tag1: `${x.region || 'NA'}-1-47`,
      tag2: `${x.region || 'NA'}-2-47`,
      tag3: `${x.region || 'NA'}-3-47`,
      tag4: `${x.region || 'NA'}-4-47`,
      tag5: `${x.region || 'NA'}-5-47`,
      tag6: `${x.region || 'NA'}-6-47`,
      tag7: `${x.region || 'NA'}-7-47`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_48(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 48 + idx,
      bucket: ((x.priority || 0) + 48) % 7,
      tag1: `${x.region || 'NA'}-1-48`,
      tag2: `${x.region || 'NA'}-2-48`,
      tag3: `${x.region || 'NA'}-3-48`,
      tag4: `${x.region || 'NA'}-4-48`,
      tag5: `${x.region || 'NA'}-5-48`,
      tag6: `${x.region || 'NA'}-6-48`,
      tag7: `${x.region || 'NA'}-7-48`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_49(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 49 + idx,
      bucket: ((x.priority || 0) + 49) % 7,
      tag1: `${x.region || 'NA'}-1-49`,
      tag2: `${x.region || 'NA'}-2-49`,
      tag3: `${x.region || 'NA'}-3-49`,
      tag4: `${x.region || 'NA'}-4-49`,
      tag5: `${x.region || 'NA'}-5-49`,
      tag6: `${x.region || 'NA'}-6-49`,
      tag7: `${x.region || 'NA'}-7-49`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_50(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 50 + idx,
      bucket: ((x.priority || 0) + 50) % 7,
      tag1: `${x.region || 'NA'}-1-50`,
      tag2: `${x.region || 'NA'}-2-50`,
      tag3: `${x.region || 'NA'}-3-50`,
      tag4: `${x.region || 'NA'}-4-50`,
      tag5: `${x.region || 'NA'}-5-50`,
      tag6: `${x.region || 'NA'}-6-50`,
      tag7: `${x.region || 'NA'}-7-50`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_51(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 51 + idx,
      bucket: ((x.priority || 0) + 51) % 7,
      tag1: `${x.region || 'NA'}-1-51`,
      tag2: `${x.region || 'NA'}-2-51`,
      tag3: `${x.region || 'NA'}-3-51`,
      tag4: `${x.region || 'NA'}-4-51`,
      tag5: `${x.region || 'NA'}-5-51`,
      tag6: `${x.region || 'NA'}-6-51`,
      tag7: `${x.region || 'NA'}-7-51`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_52(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 52 + idx,
      bucket: ((x.priority || 0) + 52) % 7,
      tag1: `${x.region || 'NA'}-1-52`,
      tag2: `${x.region || 'NA'}-2-52`,
      tag3: `${x.region || 'NA'}-3-52`,
      tag4: `${x.region || 'NA'}-4-52`,
      tag5: `${x.region || 'NA'}-5-52`,
      tag6: `${x.region || 'NA'}-6-52`,
      tag7: `${x.region || 'NA'}-7-52`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_53(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 53 + idx,
      bucket: ((x.priority || 0) + 53) % 7,
      tag1: `${x.region || 'NA'}-1-53`,
      tag2: `${x.region || 'NA'}-2-53`,
      tag3: `${x.region || 'NA'}-3-53`,
      tag4: `${x.region || 'NA'}-4-53`,
      tag5: `${x.region || 'NA'}-5-53`,
      tag6: `${x.region || 'NA'}-6-53`,
      tag7: `${x.region || 'NA'}-7-53`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_54(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 54 + idx,
      bucket: ((x.priority || 0) + 54) % 7,
      tag1: `${x.region || 'NA'}-1-54`,
      tag2: `${x.region || 'NA'}-2-54`,
      tag3: `${x.region || 'NA'}-3-54`,
      tag4: `${x.region || 'NA'}-4-54`,
      tag5: `${x.region || 'NA'}-5-54`,
      tag6: `${x.region || 'NA'}-6-54`,
      tag7: `${x.region || 'NA'}-7-54`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_55(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 55 + idx,
      bucket: ((x.priority || 0) + 55) % 7,
      tag1: `${x.region || 'NA'}-1-55`,
      tag2: `${x.region || 'NA'}-2-55`,
      tag3: `${x.region || 'NA'}-3-55`,
      tag4: `${x.region || 'NA'}-4-55`,
      tag5: `${x.region || 'NA'}-5-55`,
      tag6: `${x.region || 'NA'}-6-55`,
      tag7: `${x.region || 'NA'}-7-55`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_56(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 56 + idx,
      bucket: ((x.priority || 0) + 56) % 7,
      tag1: `${x.region || 'NA'}-1-56`,
      tag2: `${x.region || 'NA'}-2-56`,
      tag3: `${x.region || 'NA'}-3-56`,
      tag4: `${x.region || 'NA'}-4-56`,
      tag5: `${x.region || 'NA'}-5-56`,
      tag6: `${x.region || 'NA'}-6-56`,
      tag7: `${x.region || 'NA'}-7-56`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_57(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 57 + idx,
      bucket: ((x.priority || 0) + 57) % 7,
      tag1: `${x.region || 'NA'}-1-57`,
      tag2: `${x.region || 'NA'}-2-57`,
      tag3: `${x.region || 'NA'}-3-57`,
      tag4: `${x.region || 'NA'}-4-57`,
      tag5: `${x.region || 'NA'}-5-57`,
      tag6: `${x.region || 'NA'}-6-57`,
      tag7: `${x.region || 'NA'}-7-57`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_58(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 58 + idx,
      bucket: ((x.priority || 0) + 58) % 7,
      tag1: `${x.region || 'NA'}-1-58`,
      tag2: `${x.region || 'NA'}-2-58`,
      tag3: `${x.region || 'NA'}-3-58`,
      tag4: `${x.region || 'NA'}-4-58`,
      tag5: `${x.region || 'NA'}-5-58`,
      tag6: `${x.region || 'NA'}-6-58`,
      tag7: `${x.region || 'NA'}-7-58`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}

export function selectFlightPlanningView7_59(items: FlightPlanning[] = [], query = '') {
  const q = query.toLowerCase();
  return items
    .filter((x) => !q || `${x.code} ${x.name} ${x.status}`.toLowerCase().includes(q))
    .map((x, idx) => ({
      id: x.id,
      label: `${x.code} · ${x.name}`,
      rank: (x.priority || 0) * 59 + idx,
      bucket: ((x.priority || 0) + 59) % 7,
      tag1: `${x.region || 'NA'}-1-59`,
      tag2: `${x.region || 'NA'}-2-59`,
      tag3: `${x.region || 'NA'}-3-59`,
      tag4: `${x.region || 'NA'}-4-59`,
      tag5: `${x.region || 'NA'}-5-59`,
      tag6: `${x.region || 'NA'}-6-59`,
      tag7: `${x.region || 'NA'}-7-59`,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 100);
}
