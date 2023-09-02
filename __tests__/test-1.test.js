import Bowman from '../src/Bowman';
import Character from '../src/Character';

test('should create Character for type Bowman', () => {
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

test('should create Character for type Bowman', () => {
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

test('should create Character for type Bowman', () => {
  const result3 = new Character('ken', 'Bowman');
  expect(result3).toEqual({
    name: 'ken',
    type: 'Bowman',
    health: 100,
    level: 1,
  });
});

test('should create Character for type Bowman', () => {
  const result3 = new Character('k', 'Bowman');
  expect(result3).toEqual({
    name: 'ken',
    type: 'Bowman',
    health: 100,
    level: 1,
  });
});
