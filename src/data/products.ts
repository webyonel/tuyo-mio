import type { ImageMetadata } from 'astro:assets';
import burgerImg from '../assets/images/img-hamburguesa.jpg';
import bbqBaconImg from '../assets/images/img-bbq-bacon.jpg';
import pizzaImg from '../assets/images/img-pizza.jpg';
import pizzaMargaritaImg from '../assets/images/img-pizza-margarita.jpg';
import papasLoadedImg from '../assets/images/img-papas-loaded.jpg';
import arosCebollaImg from '../assets/images/img-aros-cebolla.jpg';

export interface Producto {
  nombre: string;
  desc: string;
  precio: string;
  imagen: ImageMetadata;
}

export const productos: Producto[] = [
  {
    nombre: 'Burger Clásica',
    desc: 'Carne 100% res a la parrilla, queso cheddar, lechuga, tomate y nuestra salsa secreta de la casa.',
    precio: '$ 2.500',
    imagen: burgerImg,
  },
  {
    nombre: 'BBQ Bacon Burger',
    desc: 'Doble carne, bacon crocante, cebolla crispy, cheddar fundido y salsa BBQ ahumada.',
    precio: '$ 3.200',
    imagen: bbqBaconImg,
  },
  {
    nombre: 'Pizza Pepperoni',
    desc: 'Masa artesanal fermentada 48 hs, mozzarella generosa y pepperoni picante al horno de piedra.',
    precio: '$ 3.800',
    imagen: pizzaImg,
  },
  {
    nombre: 'Pizza Margarita',
    desc: 'Salsa de tomate casera, mozzarella fresca, albahaca y un toque de aceite de oliva extra virgen.',
    precio: '$ 3.500',
    imagen: pizzaMargaritaImg,
  },
  {
    nombre: 'Papas Loaded',
    desc: 'Papas crocantes bañadas en cheddar, bacon ahumado, cebollín fresco y un toque de pimentón.',
    precio: '$ 1.800',
    imagen: papasLoadedImg,
  },
  {
    nombre: 'Aros de Cebolla',
    desc: 'Aros de cebolla empanizados, dorados y extra crujientes, con dip de la casa.',
    precio: '$ 1.500',
    imagen: arosCebollaImg,
  },
];
