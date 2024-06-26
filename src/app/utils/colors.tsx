export const Colors = {
    greenAccent: '#00E676',
    redAccent: '#FF5252',
    blueAccent: '#448AFF',
    yellowAccent: '#FFFF00',
    pink: '#E91E63',
    orangeAccent: '#FF9800',
    lightGreenAccent: '#8BC34A',
    deepPurple: '#673AB7',
    grey: '#9E9E9E',
    purple: '#9C27B0',
    lightBlueAccent: '#03A9F4',
    fromARGB: (r: number, g: number, b: number, a: number = 255) => `rgba(${r}, ${g}, ${b}, ${a / 255})`,
    fromRGBO: (r: number, g: number, b: number, o: number) => `rgba(${r}, ${g}, ${b}, ${o})`,
  };