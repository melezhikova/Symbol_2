import Team from '../app';
import Character from '../basic';

test('should check generator_1', () => {
  const one = new Character('Ann', 'Bowerman');
  const two = new Character('Winter', 'Daemon');
  const three = new Character('Autumn', 'Magician');
  const members = new Team();
  members.addAll(one, two, three);
  const generator = members[Symbol.iterator]();
  const result = generator.next().value;

  expect(result).toEqual({
    attack: 25, defence: 25, health: 50, level: 1, name: 'Ann', type: 'Bowerman',
  });
});
