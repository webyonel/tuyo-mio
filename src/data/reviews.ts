import type { ImageMetadata } from 'astro:assets';
import avatar1 from '../assets/images/avatar-01.jpg';
import avatar2 from '../assets/images/avatar-02.jpg';
import avatar3 from '../assets/images/avatar-03.jpg';
import avatar4 from '../assets/images/avatar-04.jpg';
import avatar5 from '../assets/images/avatar-05.jpg';
import avatar6 from '../assets/images/avatar-06.jpg';
import avatar7 from '../assets/images/avatar-07.jpg';

export interface Opinion {
  texto: string;
  nombre: string;
  rol: string;
  estrellas: number;
  avatar: ImageMetadata;
}

export const opiniones: Opinion[] = [
  {
    texto: 'Las mejores hamburguesas del barrio. La BBQ Bacon es una explosión de sabor y las papas loaded son adictivas.',
    nombre: 'Marcos Silva',
    rol: 'Cliente habitual',
    estrellas: 5,
    avatar: avatar1,
  },
  {
    texto: 'La pizza pepperoni tiene la masa perfecta: crocante por fuera y suave por dentro. Vuelvo cada semana.',
    nombre: 'Andrea López',
    rol: 'Foodie local',
    estrellas: 5,
    avatar: avatar2,
  },
  {
    texto: 'Excelente para ir con amigos. Pedimos varias cosas para compartir y todo estaba recién hecho y caliente.',
    nombre: 'Diego Morales',
    rol: 'Estudiante',
    estrellas: 5,
    avatar: avatar3,
  },
  {
    texto: 'Buen precio, buena comida y atención rápida. El combo de burger + papas es imbatible para la zona.',
    nombre: 'Sofía Castro',
    rol: 'Trabajadora',
    estrellas: 4,
    avatar: avatar4,
  },
  {
    texto: 'El local es súper lindo y la atención es súper rápida. Ideal para una pausa en el día con un buen combo.',
    nombre: 'Rodrigo Vega',
    rol: 'Diseñador',
    estrellas: 5,
    avatar: avatar5,
  },
  {
    texto: 'Probé los aros de cebolla y el brownie con helado, ambos estaban increíbles. Voy a volver pronto.',
    nombre: 'Valentina Núñez',
    rol: 'Bloguera gastronómica',
    estrellas: 5,
    avatar: avatar6,
  },
  {
    texto: 'Atención al cliente de primera. Me armaron un combo personalizado para mi hijo sin problema.',
    nombre: 'Hernán Ortiz',
    rol: 'Padre de familia',
    estrellas: 5,
    avatar: avatar7,
  },
];
