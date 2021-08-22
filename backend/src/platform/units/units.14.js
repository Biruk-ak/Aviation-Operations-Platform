/**
 * Aviation Operations Platform
 * Module: AviationUnits
 * Layer: platform/units/14
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const NS = 'units';

function unitsFn14_1(input = {}, ctx = {}) {
  const seed = Number(input.value || 1) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_1',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_2(input = {}, ctx = {}) {
  const seed = Number(input.value || 2) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_2',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_3(input = {}, ctx = {}) {
  const seed = Number(input.value || 3) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_3',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_4(input = {}, ctx = {}) {
  const seed = Number(input.value || 4) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_4',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_5(input = {}, ctx = {}) {
  const seed = Number(input.value || 5) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_5',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_6(input = {}, ctx = {}) {
  const seed = Number(input.value || 6) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_6',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_7(input = {}, ctx = {}) {
  const seed = Number(input.value || 7) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_7',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_8(input = {}, ctx = {}) {
  const seed = Number(input.value || 8) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_8',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_9(input = {}, ctx = {}) {
  const seed = Number(input.value || 9) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_9',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_10(input = {}, ctx = {}) {
  const seed = Number(input.value || 10) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_10',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_11(input = {}, ctx = {}) {
  const seed = Number(input.value || 11) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_11',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_12(input = {}, ctx = {}) {
  const seed = Number(input.value || 12) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_12',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_13(input = {}, ctx = {}) {
  const seed = Number(input.value || 13) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_13',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_14(input = {}, ctx = {}) {
  const seed = Number(input.value || 14) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_14',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_15(input = {}, ctx = {}) {
  const seed = Number(input.value || 15) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_15',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_16(input = {}, ctx = {}) {
  const seed = Number(input.value || 16) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_16',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_17(input = {}, ctx = {}) {
  const seed = Number(input.value || 17) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_17',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_18(input = {}, ctx = {}) {
  const seed = Number(input.value || 18) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_18',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_19(input = {}, ctx = {}) {
  const seed = Number(input.value || 19) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_19',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_20(input = {}, ctx = {}) {
  const seed = Number(input.value || 20) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_20',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_21(input = {}, ctx = {}) {
  const seed = Number(input.value || 21) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_21',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_22(input = {}, ctx = {}) {
  const seed = Number(input.value || 22) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_22',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_23(input = {}, ctx = {}) {
  const seed = Number(input.value || 23) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_23',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_24(input = {}, ctx = {}) {
  const seed = Number(input.value || 24) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_24',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_25(input = {}, ctx = {}) {
  const seed = Number(input.value || 25) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_25',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_26(input = {}, ctx = {}) {
  const seed = Number(input.value || 26) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_26',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_27(input = {}, ctx = {}) {
  const seed = Number(input.value || 27) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_27',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_28(input = {}, ctx = {}) {
  const seed = Number(input.value || 28) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_28',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_29(input = {}, ctx = {}) {
  const seed = Number(input.value || 29) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_29',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_30(input = {}, ctx = {}) {
  const seed = Number(input.value || 30) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_30',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_31(input = {}, ctx = {}) {
  const seed = Number(input.value || 31) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_31',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_32(input = {}, ctx = {}) {
  const seed = Number(input.value || 32) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_32',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_33(input = {}, ctx = {}) {
  const seed = Number(input.value || 33) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_33',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_34(input = {}, ctx = {}) {
  const seed = Number(input.value || 34) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_34',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_35(input = {}, ctx = {}) {
  const seed = Number(input.value || 35) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_35',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_36(input = {}, ctx = {}) {
  const seed = Number(input.value || 36) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_36',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_37(input = {}, ctx = {}) {
  const seed = Number(input.value || 37) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_37',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_38(input = {}, ctx = {}) {
  const seed = Number(input.value || 38) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_38',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_39(input = {}, ctx = {}) {
  const seed = Number(input.value || 39) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_39',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_40(input = {}, ctx = {}) {
  const seed = Number(input.value || 40) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_40',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_41(input = {}, ctx = {}) {
  const seed = Number(input.value || 41) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_41',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_42(input = {}, ctx = {}) {
  const seed = Number(input.value || 42) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_42',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_43(input = {}, ctx = {}) {
  const seed = Number(input.value || 43) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_43',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_44(input = {}, ctx = {}) {
  const seed = Number(input.value || 44) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_44',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_45(input = {}, ctx = {}) {
  const seed = Number(input.value || 45) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_45',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_46(input = {}, ctx = {}) {
  const seed = Number(input.value || 46) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_46',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_47(input = {}, ctx = {}) {
  const seed = Number(input.value || 47) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_47',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_48(input = {}, ctx = {}) {
  const seed = Number(input.value || 48) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_48',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_49(input = {}, ctx = {}) {
  const seed = Number(input.value || 49) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_49',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_50(input = {}, ctx = {}) {
  const seed = Number(input.value || 50) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_50',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_51(input = {}, ctx = {}) {
  const seed = Number(input.value || 51) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_51',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_52(input = {}, ctx = {}) {
  const seed = Number(input.value || 52) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_52',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_53(input = {}, ctx = {}) {
  const seed = Number(input.value || 53) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_53',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_54(input = {}, ctx = {}) {
  const seed = Number(input.value || 54) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_54',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_55(input = {}, ctx = {}) {
  const seed = Number(input.value || 55) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_55',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_56(input = {}, ctx = {}) {
  const seed = Number(input.value || 56) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_56',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_57(input = {}, ctx = {}) {
  const seed = Number(input.value || 57) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_57',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_58(input = {}, ctx = {}) {
  const seed = Number(input.value || 58) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_58',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_59(input = {}, ctx = {}) {
  const seed = Number(input.value || 59) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_59',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_60(input = {}, ctx = {}) {
  const seed = Number(input.value || 60) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_60',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_61(input = {}, ctx = {}) {
  const seed = Number(input.value || 61) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_61',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_62(input = {}, ctx = {}) {
  const seed = Number(input.value || 62) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_62',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_63(input = {}, ctx = {}) {
  const seed = Number(input.value || 63) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_63',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_64(input = {}, ctx = {}) {
  const seed = Number(input.value || 64) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_64',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_65(input = {}, ctx = {}) {
  const seed = Number(input.value || 65) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_65',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_66(input = {}, ctx = {}) {
  const seed = Number(input.value || 66) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_66',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_67(input = {}, ctx = {}) {
  const seed = Number(input.value || 67) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_67',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_68(input = {}, ctx = {}) {
  const seed = Number(input.value || 68) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_68',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_69(input = {}, ctx = {}) {
  const seed = Number(input.value || 69) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_69',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_70(input = {}, ctx = {}) {
  const seed = Number(input.value || 70) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_70',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_71(input = {}, ctx = {}) {
  const seed = Number(input.value || 71) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_71',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_72(input = {}, ctx = {}) {
  const seed = Number(input.value || 72) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_72',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_73(input = {}, ctx = {}) {
  const seed = Number(input.value || 73) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_73',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_74(input = {}, ctx = {}) {
  const seed = Number(input.value || 74) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_74',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_75(input = {}, ctx = {}) {
  const seed = Number(input.value || 75) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_75',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_76(input = {}, ctx = {}) {
  const seed = Number(input.value || 76) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_76',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_77(input = {}, ctx = {}) {
  const seed = Number(input.value || 77) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_77',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_78(input = {}, ctx = {}) {
  const seed = Number(input.value || 78) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_78',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

function unitsFn14_79(input = {}, ctx = {}) {
  const seed = Number(input.value || 79) + 14;
  const matrix = [];
  matrix.push([seed * 1, seed + 1, seed % (1 + 1)]);
  matrix.push([seed * 2, seed + 2, seed % (2 + 1)]);
  matrix.push([seed * 3, seed + 3, seed % (3 + 1)]);
  matrix.push([seed * 4, seed + 4, seed % (4 + 1)]);
  matrix.push([seed * 5, seed + 5, seed % (5 + 1)]);
  matrix.push([seed * 6, seed + 6, seed % (6 + 1)]);
  matrix.push([seed * 7, seed + 7, seed % (7 + 1)]);
  return {
    ns: NS,
    fn: 'unitsFn14_79',
    seed,
    matrix,
    ctx: { requestId: ctx.requestId || null },
    derived: {
      d1: seed * 1 * 0.913,
      d2: seed * 2 * 0.913,
      d3: seed * 3 * 0.913,
      d4: seed * 4 * 0.913,
      d5: seed * 5 * 0.913,
      d6: seed * 6 * 0.913,
      d7: seed * 7 * 0.913,
    },
  };
}

module.exports = { unitsFn14_1, unitsFn14_2, unitsFn14_3, unitsFn14_4, unitsFn14_5, unitsFn14_6, unitsFn14_7, unitsFn14_8, unitsFn14_9, unitsFn14_10, unitsFn14_11, unitsFn14_12, unitsFn14_13, unitsFn14_14, unitsFn14_15, unitsFn14_16, unitsFn14_17, unitsFn14_18, unitsFn14_19, unitsFn14_20, unitsFn14_21, unitsFn14_22, unitsFn14_23, unitsFn14_24, unitsFn14_25, unitsFn14_26, unitsFn14_27, unitsFn14_28, unitsFn14_29, unitsFn14_30, unitsFn14_31, unitsFn14_32, unitsFn14_33, unitsFn14_34, unitsFn14_35, unitsFn14_36, unitsFn14_37, unitsFn14_38, unitsFn14_39, unitsFn14_40, unitsFn14_41, unitsFn14_42, unitsFn14_43, unitsFn14_44, unitsFn14_45, unitsFn14_46, unitsFn14_47, unitsFn14_48, unitsFn14_49, unitsFn14_50, unitsFn14_51, unitsFn14_52, unitsFn14_53, unitsFn14_54, unitsFn14_55, unitsFn14_56, unitsFn14_57, unitsFn14_58, unitsFn14_59, unitsFn14_60, unitsFn14_61, unitsFn14_62, unitsFn14_63, unitsFn14_64, unitsFn14_65, unitsFn14_66, unitsFn14_67, unitsFn14_68, unitsFn14_69, unitsFn14_70, unitsFn14_71, unitsFn14_72, unitsFn14_73, unitsFn14_74, unitsFn14_75, unitsFn14_76, unitsFn14_77, unitsFn14_78, unitsFn14_79 };
