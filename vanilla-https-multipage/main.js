import 'modern-normalize/modern-normalize.css';
import './style.scss'

import { delay, random } from './utils';
// or
import * as utils from './utils';

import MyClass from './MyClass';

const classInstance = new MyClass('test');
classInstance.tellSomething()

console.log(utils.delay, delay);