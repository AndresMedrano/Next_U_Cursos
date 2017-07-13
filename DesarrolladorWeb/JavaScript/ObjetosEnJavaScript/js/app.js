var estudiante={
  nombre:"Andres Medrano",
  edad:12,
  matematicas:8,
  ciencias:6,
  ingles:7,
  obtenerNombre: function() {
    return this.nombre
  },
  obtenerPromedio:function(){
    promedio=(this.matematicas+this.ciencias+this.ingles)/3
    return promedio;
  }

};
