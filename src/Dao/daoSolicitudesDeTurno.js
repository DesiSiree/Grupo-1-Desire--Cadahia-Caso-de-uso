function crearDaoSolicitudesDeTurno() {
    const solicitudes = [];
  
    return {
      add: (solicitud) => {
        const existeSolicitud = solicitudes.some((s) => {
          return s.id === solicitud.id;
        });
        const existePaciente = solicitudes.some((s) => {
          return s.paciente.dni === solicitud.paciente.dni;
        });
        if (!(existeSolicitud || existePaciente)) {
          solicitudes.push(solicitud);
          return true;
        } else {
          return false;
        }
      },
      get:(dni) => {
        return solicitudes.find(s => s.paciente.dni == dni);
      },

      udate:(dni,turno) => {
        let index = solicitudes.findIndex(s => s.persona.dni == dni);
        if (index == -1) {
          console.log("tiro error!")
        }

        solicitudes[index] = turno;
      },


      getAllSolicitudes: () => {
        return solicitudes;
      },
      getAllByKey: (key) => {
        const solicitudesFiltradas = [];
        solicitudes.map((s) => solicitudesFiltradas.push(s[key]));
        return solicitudesFiltradas;
      },
      confirmarSolicitud: (id, turno) => {
        const index = solicitudes.findIndex((s) => {
          return s.id === id;
        });
  
        if (index >= 0) {
          solicitudes[index].estado = "CONFIRMADO";
          solicitudes[index].turno = turno;
          return true;
        } else {
          return false;
        }
      },
      tienePrimeraDosis: (id) => {
        const index = solicitudes.findIndex((s) => {
          return s.id === id;
        });
  
        return solicitud[id].estado == "COMPLETADOPD";
      },
    };
  }
  
  export { crearDaoSolicitudesDeTurno };