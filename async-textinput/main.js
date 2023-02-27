import 'modern-normalize/modern-normalize.css';
import './style.scss'

import { TextInput } from './components/TextInput';
import { delay, random } from './utils';

const results = document.querySelector('#result')
const fields = document.querySelector('#fields')

const input = new TextInput({
  parent: fields,
})

input.onSubmit = async (text) => {
  await delay(random(500, 2000));
  results.textContent += text + '\n';
}