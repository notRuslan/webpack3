import 'normalize.css';
import './blog.scss';


import createMenu from '../../components/menu/menu';
const menu = createMenu(['Главная','Блог', 'more1'], 'menu');
document.body.appendChild(menu);
console.log('blog.js');
