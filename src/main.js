import { GetCountriesByContinent, busqueda, order,GetCountriesBySubregion,GetAreaStatistics,GetPopulationStatistics} from './data.js';

import data from './data/countries/countries.js';

const root =document.getElementById('root');
const dataCountries = data.countries;
/**************Creacion de cartas****************/
const showCards =(data)=>{
  root.innerHTML="";
  for (let i = 0; i< data.length; i++){
    const card = document.createElement ('div');
    card.className= 'card';
    card.id = data[i].name.common;
    card.innerHTML= ` 
    <img src=${data[i].flags.png}>
    <p>${data[i].name.common}</p>
    `
    root.appendChild(card);
    /**********Seleccion de cartas para Modal********/
    card.addEventListener('click', (e) => {
      e.preventDefault();         
      showModal(data[i])        
    });  
  }
}
showCards(dataCountries)
/**************Busqueda por pais****************/
const input = document.getElementById('Buscar');
const searchButton = document.querySelector('#boton');

searchButton.addEventListener('click',function(){
  const valor= input.value.toLowerCase();
  const resultado = busqueda(dataCountries,valor);

  if (resultado.length === 0 || valor.length === 0){
    alert('Pais no encontrado')
  } else{
    showCards(resultado);
  }
});
/**********Creacion de ventana Modal****************/
const showModal = (dataCountry) => {
  const modal = document.createElement("div")
  modal.innerHTML = `
  <section class="modal">
  <div class="modal_container">
  <ul class="modal_lista"></ul>
  <a href="a" class="modal_close_button"> Cerrar</a>
  <img src=${dataCountry.flags.png}>
  <p name="Nombre_de_pais" id="informacion">${dataCountry.name.common}</p>
  <li name="Nombre_de_pais_oficial" id="informacion">Official Country Name: ${dataCountry.name.official}</li>
  <li name="Capital" id="informacion">Capital: ${dataCountry.capital}</li>
  <li name="Continente" id="informacion">Continent: ${dataCountry.continents}</li>
  <li name="Subregion" id="informacion">Subregion: ${dataCountry.subregion}</li>
  <li name="Paises_limitantes">Neighboring countries: ${dataCountry.borders}</li>
  <li name="Poblacion_total">Population: ${dataCountry.population}</li>
  <li name="Area_total">Area: ${dataCountry.area}</li>
  </div> 
  </section> 
  `
  root.appendChild(modal)

  const closeModalButton = document.querySelector('.modal_close_button');
  closeModalButton.addEventListener('click', (e) => {
    e.preventDefault();         
    modal.remove();       
  });
}

/****Filtrado por continentes****/
let countriesContinent = [];
let subregionCheckboxes = [];
const selectContinent = document.getElementById('continent-select');

selectContinent.addEventListener('change', function() {
  const selectedContinent = selectContinent.value;
  if (selectContinent.value === 'Todos'){
    showCards(dataCountries);
    selectOrder.addEventListener('change', function() {
      const selectedOrder = selectOrder.value;
      if(selectedOrder === 'a-z'){
        showCards(order(dataCountries,'a-z')); 
      }
      else{
        showCards(order(countriesContinent,'z-a'));
      }
    });
  } else {
    countriesContinent = GetCountriesByContinent(dataCountries, selectedContinent)
    showCards(countriesContinent); 
  }  
  
  /****Checkbox por subregion****/
  subregionCheckboxes = document.getElementById('subregion-checkboxes');
  subregionCheckboxes.innerHTML = '';
  const filterSubregion = countriesContinent.map(country => country.subregion);
  const subregionByContinent = filterSubregion.filter((subregion,index) => filterSubregion.indexOf(subregion) === index);

  subregionByContinent.forEach(subregion => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'subregion-checkbox';
    checkbox.value = subregion;
    const label = document.createElement('label');
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(subregion));
    subregionCheckboxes.appendChild(label);
    subregionCheckboxes.appendChild(document.createElement('br'));
    /****Seleccion de un solo checkbox por subregion****/
    checkbox.addEventListener('change',function(){
      const checkboxes = subregionCheckboxes.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(cb => {
        if (cb !== checkbox) {
          cb.checked = false;
        }
      });
  
      const selectedSubregion = GetCountriesBySubregion(dataCountries,subregion)
      showCards(selectedSubregion);
    });
  });
  const selectOrder = document.getElementById('order-select');
  selectOrder.selectedIndex = 0;
});

const selectOrder = document.getElementById('order-select');

selectOrder.addEventListener('change', function() {
  const selectedOrder = selectOrder.value;
  if(selectedOrder === 'a-z'){
    showCards(order(countriesContinent,'a-z')); 
  }
  else{
    
    showCards(order(countriesContinent,'z-a'));
  }
});


/***Funcionalidad al boton Inicio */
const inicio =document.getElementById('Inicio');
inicio.addEventListener("click",function(){
  subregionCheckboxes.innerHTML = '';
  showCards(dataCountries);
});

/**Calculo agregado */
/** Por Area */
const buttonStatistics = document.getElementById('Estadisticas');
buttonStatistics.addEventListener("click", function(){ 
  root.innerHTML= " ";

  const table = document.createElement('table');
  table.setAttribute('border','5');
  table.setAttribute('class','style_table')
  
  // Crear una fila de encabezado
  const headerRow = document.createElement("tr");

  // Crear celdas de encabezado
  const headerCell1 = document.createElement("th");
  headerCell1.textContent = "CONTINETS";

  const headerCell2 = document.createElement("th");
  headerCell2.textContent = "AREA (km)" ;

  const headerCell3 = document.createElement("th");
  headerCell3.textContent = "PERCENTAGE (%)" ;

  // Agregar las celdas de encabezado a la fila de encabezado
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);

  // Agregar la fila de encabezado a la tabla
  table.appendChild(headerRow);

  // Crear una fila de datos
  //Agregamos fila1
  const newRow1 = table.insertRow();
  const cellAmerica = newRow1.insertCell();

  const nameContinent = ["America","Asia","Africa","Europe","Antarctica","Oceania","TOTAL"];
  cellAmerica.textContent =nameContinent[0];
  
  const cellAreaAm = newRow1.insertCell();
  cellAreaAm.textContent = (GetAreaStatistics(nameContinent[0],dataCountries)[0]);
  const cellPercentAm = newRow1.insertCell();
  cellPercentAm.textContent=(GetAreaStatistics(nameContinent[0],dataCountries)[2]);
  
  // Agregar fila 2
  const newRow2 = table.insertRow();
  const cellAfrica = newRow2.insertCell();
  cellAfrica.textContent = nameContinent[2];
  
  const cellAreaAfr = newRow2.insertCell();
  cellAreaAfr.textContent = (GetAreaStatistics(nameContinent[2],dataCountries)[0]);
  const cellPercentAfrica = newRow2.insertCell();
  cellPercentAfrica.textContent=(GetAreaStatistics(nameContinent[2],dataCountries)[2]);

  //Agregamos fila3
  const newRow3 = table.insertRow();
  const cellAsia= newRow3.insertCell();
  cellAsia.textContent = nameContinent[1];
   
  const cellAreaAsia = newRow3.insertCell();
  cellAreaAsia.textContent = (GetAreaStatistics(nameContinent[1],dataCountries)[0]);
  const cellPercentAsia = newRow3.insertCell();
  cellPercentAsia.textContent=(GetAreaStatistics(nameContinent[1],dataCountries)[2]);

  // Agregar fila 4
  const newRow4 = table.insertRow();
  const cellEurope = newRow4.insertCell();
  cellEurope.textContent = nameContinent[3];
  
  const cellAreaEurope = newRow4.insertCell();
  cellAreaEurope.textContent = (GetAreaStatistics(nameContinent[3],dataCountries)[0]);
  const cellPercentEurope = newRow4.insertCell();
  cellPercentEurope.textContent=(GetAreaStatistics(nameContinent[3],dataCountries)[2]);
 
  // Agregar fila 5
  const newRow5 = table.insertRow();
  const cellAntartica = newRow5.insertCell();
  cellAntartica.textContent = nameContinent[4];
  
  const cellAreaAntartica = newRow5.insertCell();
  cellAreaAntartica.textContent = (GetAreaStatistics(nameContinent[4],dataCountries)[0]);
  const cellPercentAntartica = newRow5.insertCell();
  cellPercentAntartica.textContent=(GetAreaStatistics(nameContinent[4],dataCountries)[2]);


  // Agregar fila 6
  const newRow6 = table.insertRow();
  const cellOceania = newRow6.insertCell();
  cellOceania.textContent = nameContinent[5];
  
  const cellAreaOceania = newRow6.insertCell();
  cellAreaOceania.textContent = (GetAreaStatistics(nameContinent[5],dataCountries)[0]);
  const cellPercentOceania = newRow6.insertCell();
  cellPercentOceania.textContent=(GetAreaStatistics(nameContinent[5],dataCountries)[2]);


  // Agregar fila 7
  const newRow7 = table.insertRow();
  const cellTotal = newRow7.insertCell();
  cellTotal.textContent = nameContinent[6];
 
  const cellAreaTotal = newRow7.insertCell();
  cellAreaTotal.textContent = (GetAreaStatistics(nameContinent[6],dataCountries)[1]);
  const cellPercentTotal= newRow7.insertCell();
  cellPercentTotal.textContent="100"

  root.appendChild(table);
  ///***  Tabla2 - calculo agregado de población**/
  
  const table1 = document.createElement('table');
  table1.setAttribute('border','5');
  table1.setAttribute('class','style_table1')
  
  // Crear una fila de encabezado
  const headerRow1 = document.createElement("tr");

  // Crear celdas de encabezado
  const headerCellA = document.createElement("th");
  headerCellA.textContent = "CONTINETS";

  const headerCellB = document.createElement("th");
  headerCellB.textContent = "POPULATION (hab)" ;

  const headerCellC = document.createElement("th");
  headerCellC.textContent = "PERCENTAGE (%)" ;
  
  // Agregar las celdas de encabezado a la fila de encabezado
  headerRow1.appendChild(headerCellA);
  headerRow1.appendChild(headerCellB);
  headerRow1.appendChild(headerCellC);
  
  // Agregar la fila de encabezado a la tabla
  table1.appendChild(headerRow1);
  // Crear una fila de datos
  //Agregamos fila1
  const newRowA = table1.insertRow();
  const cellAmerica1 = newRowA.insertCell();
  cellAmerica1.textContent = nameContinent[0];
  
  const cellPopulationAm = newRowA.insertCell();
  cellPopulationAm.textContent =  (GetPopulationStatistics(nameContinent[0],dataCountries)[0]);
  const cellPercentPopulationAm = newRowA.insertCell();
  cellPercentPopulationAm.textContent=(GetPopulationStatistics(nameContinent[0],dataCountries)[2]);
  
  //Agregamos fila2
  const newRowB = table1.insertRow();
  const cellAfrica1 = newRowB.insertCell();
  cellAfrica1.textContent = nameContinent[2];
  
  const cellPopulationAfrica = newRowB.insertCell();
  cellPopulationAfrica.textContent =(GetPopulationStatistics(nameContinent[2],dataCountries)[0]);
  const cellPercentPopulationAfrica = newRowB.insertCell();
  cellPercentPopulationAfrica.textContent=(GetPopulationStatistics(nameContinent[2],dataCountries)[2]);
  
  //Agregamos fila3
  const newRowC = table1.insertRow();
  const cellAsia1 = newRowC.insertCell();

  cellAsia1.textContent = nameContinent[1];

  const cellPopulationAsia = newRowC.insertCell();
  cellPopulationAsia.textContent =  (GetPopulationStatistics(nameContinent[1],dataCountries)[0]);
  const cellPercentPopulationAsia = newRowC.insertCell();
  cellPercentPopulationAsia.textContent=(GetPopulationStatistics(nameContinent[1],dataCountries)[2]);

  //Agregamos fila4
  const newRowD = table1.insertRow();
  const cellEurope1 = newRowD.insertCell();
  cellEurope1.textContent = nameContinent[3];
  
  const cellPopulationEurope = newRowD.insertCell();
  cellPopulationEurope.textContent =  (GetPopulationStatistics(nameContinent[3],dataCountries)[0]);
  const cellPercentPopulationEurope = newRowD.insertCell();
  cellPercentPopulationEurope.textContent=(GetPopulationStatistics(nameContinent[3],dataCountries)[2]);

  //Agregamos fila5
  const newRowE = table1.insertRow();
  const cellAntarctica1 = newRowE.insertCell();
  cellAntarctica1.textContent =nameContinent[4];
    
  const cellPopulationAntarctica = newRowE.insertCell();
  cellPopulationAntarctica.textContent = (GetPopulationStatistics(nameContinent[4],dataCountries)[0]);
  const cellPercentPopulationAntarctica = newRowE.insertCell();
  cellPercentPopulationAntarctica.textContent=(GetPopulationStatistics(nameContinent[4],dataCountries)[2]);

  //Agregamos fila6
  const newRowF = table1.insertRow();
  const cellOceania1 = newRowF.insertCell();

  cellOceania1.textContent = nameContinent[5];
   
  const cellPopulationOceania = newRowF.insertCell();
  cellPopulationOceania.textContent = (GetPopulationStatistics(nameContinent[5],dataCountries)[0]);
  const cellPercentPopulationOceania = newRowF.insertCell();
  cellPercentPopulationOceania.textContent=(GetPopulationStatistics(nameContinent[5],dataCountries)[2]);
  
  //Agregamos fila7
  const newRowG = table1.insertRow();
  const cellTotalPop = newRowG.insertCell();

  cellTotalPop.textContent = nameContinent[6];
  
  const cellPopulationTotal = newRowG.insertCell();
  cellPopulationTotal.textContent =  (GetPopulationStatistics(nameContinent[6],dataCountries)[1]);
  const cellPercentPopulationTotal = newRowG.insertCell();
  cellPercentPopulationTotal.textContent="100";

  root.appendChild(table1);
});
 