import 'normalize.css';
import './index.scss';

import createMenu from '../../components/menu/menu';
var menu = createMenu(['Главная','Блог', 'more1'], 'menu');
document.body.appendChild(menu);
console.log('Index.js');
