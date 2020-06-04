export const ordenar = (ordenarData, seleccion) => {
  let resultado;
  if (seleccion === 'a-z') {
    resultado = ordenarData.sort((a, b) => {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      return 0;
    });
  } else {
    resultado = ordenarData.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return 1;
      }
      if (a.nombre > b.nombre) {
        return -1;
      }
      return 0;
    });
  }

  return resultado;
};

export const filtroPorDeporte = (listaCompetidor, sport) => {
  const filteredPorSport = listaCompetidor.filter(x => x.deporte === sport);
  return filteredPorSport;
};
