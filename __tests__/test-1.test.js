import Bowman from '../src/Bowman';
import Character from '../src/Character';

test('Character for Bowman', () => {
  const result = new Bowman('bob', 'Bowman');
  expect(result).toEqual({
    name: 'bob',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Character for Bowman without type', () => {
  const result2 = new Bowman('bob');
  expect(result2).toEqual({
    name: 'bob',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Character without type', () => {
  expect(() => {
    Character('ken');
    Error('в конструктор передано некорректное значение');
  }).toThrow();
});

test('Character with wrong name', () => {
  expect(() => {
    Character(123, 'Bowman');
    Error('в конструктор передано некорректное значение');
  }).toThrow();
});
