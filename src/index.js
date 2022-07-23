import * as $ from 'jquery';
import { Post } from './post';
import './styles/style';
import logo from './images/coub';

const post1 = new Post('webpack title', logo);

$('pre').html(post1.toString());
