import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Horario } from '../model/horario';
import { Paciente } from '../model/paciente';
import { HorarioService } from '../service/horario.service';
import { PacienteService } from '../service/servicepaciente.service';

// import { Paciente } from '../model/paciente';
// import { PacienteService } from '../service/servicepaciente.service';

@Component({
	selector: 'app-horario',
	templateUrl: 'createhorario.component.html',
})
export class CreateHorarioComponent {
	data: Horario = new Horario();
    empleados: Paciente[] = [];
	// dias = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
	dias = [
		{ pos: 0, display: 'Domingo' },
		{ pos: 1, display: 'Lunes' },
		{ pos: 2, display: 'Martes' },
		{ pos: 3, display: 'Miercoles' },
		{ pos: 4, display: 'Jueves' },
		{ pos: 5, display: 'Viernes' },
		{ pos: 6, display: 'Sabado' },
	];

	selectedDay;

	constructor(
		private horarioService: HorarioService,
        private pacienteService: PacienteService,
		private router: Router
	) {
        this.pacienteService.getPacientes().subscribe(
            (data) => {
                this.empleados = data.lista;
            }
        );
    }

	createButton() {
		console.log(this.data);
		// return;
		if (this.checkFields()) {
			this.horarioService.createHorario(this.data).subscribe(
				() => {
					swal.fire({
						title: 'Actualizado!',
						text: 'El nuevo horario fue actualizado exitosamente.',
						icon: 'success',
						customClass: {
							confirmButton: 'btn btn-success',
						},
						buttonsStyling: false,
					}).then(() => {
						this.router.navigate(['/horario']);
					});
				},
				(error) => {
					console.log(error);
					let message = 'El paciente no pudo ser editado. \n';
					message += error.error ? error.error : error.message;
					swal.fire({
						title: 'Error!',
						text: message,
						icon: 'error',
						customClass: {
							confirmButton: 'btn btn-danger',
						},
						buttonsStyling: false,
					});
				}
			);
		}
	}

	checkFields() {
		return true;
	}
}
