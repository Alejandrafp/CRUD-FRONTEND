import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Cargo, Empleado } from 'src/app/api/models';
import { CargoControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  empleado: Empleado[] = [];
  Cargo: Cargo[] = []
  visible: boolean = false;

  constructor(
    private cargoService: CargoControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
  ) { }

  formCargo: FormGroup = this.fb.group({
    id: [],
    nombre: []
  })

  ngOnInit(): void {
    this.cargoService.find().subscribe(data => this.Cargo = data)
  }

  eliminar(id: string): void {
    this.cargoService.deleteById({ id }).subscribe(() => {
      this.Cargo = this.Cargo.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formCargo.reset()
  }

  mostrar(data?: Cargo): void {
    if (data?.id) {
      this.formCargo.setValue({ ...data, 'nombre': String(data.nombre) })
    }
    this.visible = true
  }
  guardar(): void {
    this.formCargo.setValue({ ...this.formCargo.value, 'nombre': Boolean(this.formCargo.value.nombre) })
    if (this.formCargo.value.id) {
      this.cargoService.updateById({ 'id': this.formCargo.value.id, 'body': this.formCargo.value }).subscribe(
        () => {
          this.Cargo = this.Cargo.map(obj => {
            if (obj.id === this.formCargo.value.id){
              return this.formCargo.value;
            }
            return obj;
          })
          this.messageService.success('Registro actualizado con exito!')
          this.formCargo.reset()
        }
      )
    } else {
      delete this.formCargo.value.id
      this.cargoService.create({ body: this.formCargo.value }).subscribe((datoAgregado) => {
        this.Cargo = [...this.Cargo, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formCargo.reset()
      })
    }
    this.visible = false
  }
}
