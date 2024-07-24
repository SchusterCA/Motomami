
const data = [
  { name: 'Buenos Aires', localidades: ['La Plata', 'Mar del Plata', 'Bahía Blanca', 'Alberti', 'Tres de Febrero', 'Pilar', 'Tigre','Vicente Lopez', 'Zárate'] },
  { name: 'Capital Federal', localidades: ['Villa del Parque', 'Belgrano', 'Monte Castro', 'Recoleta', 'Villa Luro', 'Villa Real', 'San Nicolás', 'San Telmo', 'La Boca', 'Almagro', 'Boedo', 'Flores', 'Chacarita', 'Agronomía', 'Mataderos'] },
  { name: 'Córdoba', localidades: ['Córdoba', 'Villa Carlos Paz', 'Río Cuarto'] },
  { name: 'Santa Fe', localidades: ['Santa Fe', 'Rosario', 'Rafaela'] },
  { name: 'Mendoza', localidades: ['Mendoza', 'San Rafael', 'Godoy Cruz'] },
  { name: 'Tucumán', localidades: ['San Miguel de Tucumán', 'Tafí Viejo', 'Yerba Buena'] },

];

function filterProvincias() {
  const input = document.getElementById('provincia').value.toLowerCase();
  const dataList = document.getElementById('provinciasList');
  dataList.innerHTML = '';
  
  const filteredProvincias = data.filter(provincia => 
    provincia.name.toLowerCase().includes(input)
  );

  filteredProvincias.forEach(provincia => {
    const option = document.createElement('option');
    option.value = provincia.name;
    dataList.appendChild(option);
  });

  if (filteredProvincias.length === 1) {
    updateLocalidades(filteredProvincias[0].localidades);
  } else {
    document.getElementById('localidad').innerHTML = '';
  }
}

function updateLocalidades(localidades) {
  const localidadSelect = document.getElementById('localidad');
  localidadSelect.innerHTML = '';
  
  localidades.forEach(localidad => {
    const option = document.createElement('option');
    option.value = localidad;
    option.textContent = localidad;
    localidadSelect.appendChild(option);
  });
}

document.getElementById('provincia').addEventListener('change', function() {
  const selectedProvincia = data.find(provincia =>
    provincia.name.toLowerCase() === this.value.toLowerCase()
  );
  if (selectedProvincia) {
    updateLocalidades(selectedProvincia.localidades);
  } else {
    document.getElementById('localidad').innerHTML = '';
  }
});
