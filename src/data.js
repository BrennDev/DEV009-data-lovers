
/*************Filtro por continente***************/
export const GetCountriesByContinent= (countries, continent) => {
  const filterContinents= countries.filter((item) => item.continents[0] === continent);
  orderAZ(filterContinents)
  return filterContinents
};

/*************Busqueda por pais*****************/
export const busqueda = (countries,valor) => {
  return countries.filter((item) => item.name.common.toLowerCase().startsWith(valor));
};

/*************Ordenar de la A-Z***************/
export const orderAZ = (countries) => {
  return countries.sort((a, b) =>{
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
  });
};

/*************Ordenar de la Z-A***************/
export const orderZA = (countries) => {
  return countries.sort((a, b) =>{
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    if (nameA < nameB) return 1;
    if (nameA > nameB) return -1;
  });
};

/*************Filtro por subregion***************/
export const GetCountriesBySubregion= (countries, subregion) => {
  const filterSubregion= countries.filter((item) => item.subregion === subregion);
  orderAZ(filterSubregion)
  return filterSubregion
};

/******* Calculo agregado********/
export const GetAreaStatistics=(continents, countries) =>{
  const arrayContinent= GetCountriesByContinent (countries,continents);
  const areaContinent= arrayContinent .reduce((total,country)=> total +(country.area ||0), 0);
  const totalAreasContinent = countries.reduce((total,country)=> total +(country.area ||0), 0);
  const averageContinent= parseFloat(((areaContinent/totalAreasContinent)*100).toFixed(2));
  return  [areaContinent, totalAreasContinent,averageContinent];
};

export const GetPopulationStatistics=(continents, countries) =>{
  const arrayContinent= GetCountriesByContinent (countries,continents);
  const populationContinent= arrayContinent .reduce((total,country)=> total +(country.population ||0), 0);
  const totalPopulationContinent = countries.reduce((total,country)=> total +(country.population ||0), 0);
  const averagePopulationContinent= parseFloat(((populationContinent/totalPopulationContinent)*100).toFixed(2));
  return  [populationContinent, totalPopulationContinent,averagePopulationContinent];
};