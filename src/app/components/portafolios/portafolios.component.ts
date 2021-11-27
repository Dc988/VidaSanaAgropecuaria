import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.scss'],
})
export class PortafoliosComponent implements OnInit {
  constructor() {}

  productosSupBov = [
    {
      id: '1',

      imagen: '../../../../assets/img/SUP_BOVINO_1.png',

      titulo: 'Suplemento Bioreproduccion',

      precio: '26.000',

      descripcion:
        'Suplemento proteico y mineral que complementa los aportes de proteína',
    },

    {
      id: '2',

      imagen: '../../../../assets/img/SUP_BOVINO_2.PNG',

      titulo: 'Suplemento lactante',

      precio: '36.000',

      descripcion:
        'Suplemento proteico y mineral para ternero en etapa de lactancia y recién destetados.',
    },

    {
      id: '3',

      imagen: '../../../assets/img/SUP_BOVINO_3.png',

      titulo: 'Suplemento Florida',

      precio: '33.000',

      descripcion:
        'Suplemento proteico y mineral para novillos de ceba que pastorean forrajes de calidad media.',
    },

  ];

  productosConBov = [
    {
      id: '4',

      imagen: '../../../assets/img/CON_BOVINO_1.PNG',

      titulo: 'Concentrado Levante',

      precio: '42.000',

      descripcion:
        'Contiene minerales necesarios en sistema de levante de cría y doble propósito.',
    },

    {
      id: '5',

      imagen: '../../../assets/img/CON_BOVINO_2.PNG',

      titulo: 'Concentrado Lechero',

      precio: '45.000',

      descripcion:
        'Formulado para complementar el aporte de minerales a bovinos en crecimientos y vacas en producción (10-35 litros/día)',
    },

    {
      id: '6',

      imagen: '../../../assets/img/CON_BOVINO_3.PNG',

      titulo: 'Concentrado Proteico',

      precio: '43.000',

      descripcion:
        'Para vacas de cría y doble propósito, que pastorean forrajes de calidad media.',
    },
  ];

  productosProtBov = [
    {
      id: '7',

      imagen: '../../../assets/img/PROT_BOVINO_1.PNG',

      titulo: 'Concentrado Levante',

      precio: '38.000',

      descripcion:
        'Contiene minerales necesarios en sistema de levante de cría y doble propósito.',
    },

    {
      id: '8',

      imagen: '../../../assets/img/PROT_BOVINO_2.PNG',

      titulo: 'Concentrado Lechero',

      precio: '41.000',

      descripcion:
        'Formulado para complementar el aporte de minerales a bovinos en crecimientos y vacas en producción (10-35 litros/día)',
    },

    {
      id: '9',

      imagen: '../../../assets/img/PROT_BOVINO_3.PNG',

      titulo: 'Concentrado Proteico',

      precio: '33.000',

      descripcion:
        'Para vacas de cría y doble propósito, que pastorean forrajes de calidad media.',
    },
  ];

  productosSuplEqu = [
    {
      id: '10',

      imagen: '../../../assets/img/SUP_EQUINO_1.PNG',

      titulo: 'Suplemento Energetico',

      precio: '28.000',

      descripcion:
        'Suplemento proteico y mineral que complementa los aportes de proteína.',
    },

    {
      id: '11',

      imagen: '../../../assets/img/SUP_EQUINO_2.PNG',

      titulo: 'Suplemento Calorico',

      precio: '31.000',

      descripcion:
        'Suplemento proteico y mineral para potros en etapa de lactancia y recién destetados.',
    },

    {
      id: '12',

      imagen: '../../../assets/img/SUP_EQUINO_3.PNG',

      titulo: 'Suplemento Proteico',

      precio: '38.000',

      descripcion:
        'Suplemento proteico y mineral para potros que pastorean forrajes de calidad media.',
    },
  ];

  productosConEqu = [
    {
      id: '13',

      imagen: '../../../assets/img/CON_EQUINO_1.PNG',

      titulo: 'Concentrado Yeguas',

      precio: '40.000',

      descripcion:
        'Contiene minerales necesarios en sistema de levante de cría.',
    },

    {
      id: '14',

      imagen: '../../../assets/img/CON_EQUINO_2.PNG',

      titulo: 'Concentrado Potros',

      precio: '35.000',

      descripcion:
        'Formulado para complementar el aporte de minerales a equinos en crecimiento.',
    },

    {
      id: '15',

      imagen: '../../../assets/img/CON_EQUINO_3.PNG',

      titulo: 'Concentrado Cria',

      precio: '39.000',

      descripcion:
        'Para caballos de cría, que pastorean forrajes de calidad media.',
    },
  ];

  productosProtEqu = [
    {
      id: '16',

      imagen: '../../../assets/img/PROT_EQUINO_1.PNG',

      titulo: 'Suplemento Reproduccion',

      precio: '33.000',

      descripcion:
        'Contiene minerales necesarios en sistema de levante de cría.',
    },

    {
      id: '17',

      imagen: '../../../assets/img/PROT_EQUINO_2.PNG',

      titulo: 'Suplemento Calcico',

      precio: '40.000',

      descripcion:
        'Formulado para complementar el aporte de minerales a equinos en crecimiento.',
    },

    {
      id: '18',

      imagen: '../../../assets/img/PROT_EQUINO_3.PNG',

      titulo: 'Suplemento Mineral',

      precio: '43.000',

      descripcion:
        'Para caballos de cría y doble propósito, que pastorean forrajes de calidad media.',
    },
  ];

  productosSupPor = [
    {
      id: '19',

      imagen: '../../../assets/img/SUP_PORCINO_1.PNG',

      titulo: 'Suplemento Destete',

      precio: '29.000',

      descripcion:
        'Suplemento proteico y mineral que complementa los aportes de proteína.',
    },

    {
      id: '20',

      imagen: '../../../assets/img/SUP_PORCINO_2.PNG',

      titulo: 'Suplemento Mineral',

      precio: '31.000',

      descripcion:
        'Suplemento proteico y mineral para potros en etapa de lactancia y recién destetados.',
    },

    {
      id: '21',

      imagen: '../../../assets/img/SUP_PORCINO_3.PNG',

      titulo: 'Suplemento Premium',

      precio: '38.000',

      descripcion:
        'Suplemento proteico y mineral para potros que pastorean forrajes de calidad media.',
    },
  ];

  productosConPor = [
    {
      id: '22',

      imagen: '../../../assets/img/CON_PORCINO_1.PNG',

      titulo: 'Concentrado Energetico',

      precio: '30.000',

      descripcion:
        'Contiene minerales necesarios en sistema de levante de cría.',
    },

    {
      id: '23',

      imagen: '../../../assets/img/CON_PORCINO_2.PNG',

      titulo: 'Concentrado Multiproposito',

      precio: '25.000',

      descripcion:
        'Formulado para complementar el aporte de minerales a cerdos en crecimiento.',
    },

    {
      id: '24',

      imagen: '../../../assets/img/CON_PORCINO_3.PNG',

      titulo: 'Concentrado Engorde',

      precio: '31.000',

      descripcion:
        'Para cerdos de cría, garantiza un engorde mayor',
    },
  ];

  productosProtPor = [
    {
      id: '25',

      imagen: '../../../assets/img/PROT_PORCINO_1.PNG',

      titulo: 'Proteinado Cria',

      precio: '38.000',

      descripcion:
        'Contiene minerales necesarios en sistema de levante de cría.',
    },

    {
      id: '26',

      imagen: '../../../assets/img/PROT_PORCINO_2.PNG',

      titulo: 'Proteinado Natural',

      precio: '46.000',

      descripcion:
        'Formulado para complementar el aporte de minerales a porcinos en crecimiento.',
    },

    {
      id: '27',

      imagen: '../../../assets/img/PROT_PORCINO_3.PNG',

      titulo: 'Proteinado Vitaminico',

      precio: '34.000',

      descripcion:
        'Para porcinos de cría y doble propósito, que pastorean forrajes de calidad media.',
    },
  ];

  productosSupAvi = [
    {
      id: '28',

      imagen: '../../../assets/img/SUP_AVICOLA_1.PNG',

      titulo: 'Suplemento Organico',

      precio: '25.000',

      descripcion:
        'Suplemento proteico y mineral que complementa los aportes de proteína.',
    },

    {
      id: '29',

      imagen: '../../../assets/img/SUP_AVICOLA_2.PNG',

      titulo: 'Suplemento Dietetico',

      precio: '28.000',

      descripcion:
        'Formulado para complementar el aporte de minerales a avícolas en crecimiento.',
    },

    {
      id: '30',

      imagen: '../../../assets/img/SUP_AVICOLA_3.PNG',

      titulo: 'Suplemento Omega',

      precio: '32.000',

      descripcion:
        'Suplemento proteico y mineral para avicolas.',
    },
  ];

  productosConAvi = [
    {
      id: '31',

      imagen: '../../../assets/img/CON_AVICOLA_1.PNG',

      titulo: 'Concentrado Plumaje',

      precio: '28.000',

      descripcion:
        'Contiene minerales necesarios en sistema de levante de cría.',
    },

    {
      id: '32',

      imagen: '../../../assets/img/CON_AVICOLA_2.PNG',

      titulo: 'Concentrado crecimiento',

      precio: '29.000',

      descripcion:
        'Formulado para complementar el aporte de minerales a gallinas en crecimiento.',
    },

    {
      id: '33',

      imagen: '../../../assets/img/CON_AVICOLA_3.PNG',

      titulo: 'Concentrado engorde',

      precio: '34.000',

      descripcion:
        'Para pollos de cría, apoyo a una dieta de maiz de calidad media.',
    },
  ];

  productosProtAvi = [
    {
      id: '34',

      imagen: '../../../assets/img/PROT_AVICOLA_1.PNG',

      titulo: 'Proteinado reproduccion',

      precio: '38.000',

      descripcion:
        'Contiene minerales necesarios en sistema de levante de cría.',
    },

    {
      id: '35',

      imagen: '../../../assets/img/PROT_AVICOLA_2.PNG',

      titulo: 'Proteinado huevos',

      precio: '46.000',

      descripcion:
        'Formulado para complementar el aporte de vitaminas a gallinas y pollos en crecimiento.',
    },

    {
      id: '36',

      imagen: '../../../assets/img/PROT_AVICOLA_3.PNG',

      titulo: 'Proteinado vitaminico',

      precio: '34.000',

      descripcion:
        'Para pollos de cría y doble propósito, apoyo a una dieta de maiz de calidad media.',
    },
  ];

  ngOnInit(): void {}
}
