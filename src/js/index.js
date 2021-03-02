import * as dragIcon from './dragIcon';

const obj = [
    'art',
    //'contact',
    'cv',
    'dataviz',
    'metrica',
    'terminal',
    'toepunt'
];

obj.forEach( (div) => {
    dragIcon.invoke(document.getElementById(div));
    dragIcon.invoke(document.getElementById(div + 'Window'));
} );
