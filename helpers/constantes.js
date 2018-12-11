const ESQUEMAS_DETALHADOS = {
    '3-4-3': { tecnicos: 1, goleiros: 1, zagueiros: 3, laterais: 0, meias: 4, atacantes: 3 },
    '3-5-2': { tecnicos: 1, goleiros: 1, zagueiros: 3, laterais: 0, meias: 5, atacantes: 2 },
    '4-3-3': { tecnicos: 1, goleiros: 1, zagueiros: 2, laterais: 2, meias: 3, atacantes: 3 },
    '4-4-2': { tecnicos: 1, goleiros: 1, zagueiros: 2, laterais: 2, meias: 4, atacantes: 2 },
    '4-5-1': { tecnicos: 1, goleiros: 1, zagueiros: 2, laterais: 2, meias: 5, atacantes: 1 },
    '5-4-1': { tecnicos: 1, goleiros: 1, zagueiros: 3, laterais: 2, meias: 4, atacantes: 1 },
    '5-3-2': { tecnicos: 1, goleiros: 1, zagueiros: 3, laterais: 2, meias: 3, atacantes: 2 }
};

exports.ESQUEMAS_DETALHADOS = ESQUEMAS_DETALHADOS;
exports.ESQUEMAS = Object.keys(ESQUEMAS_DETALHADOS);

