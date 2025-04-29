export class Character {
  constructor(
    public name: string,
    public hp: number,
    public attackPower: number
  ) {}

  attack(enemy: Character) {
    console.log(`${this.name} attaque ${enemy.name}`);
    enemy.hp -= this.attackPower;
    console.log(`${enemy.name} a maintenant ${enemy.hp} HP`);
  }

  isAlive(): boolean {
    return this.hp > 0;
  }
}

// Exemple d'utilisation
const hero = new Character("Héros", 100, 20);
const monster = new Character("Monstre", 80, 15);

while (hero.isAlive() && monster.isAlive()) {
  hero.attack(monster);
  if (!monster.isAlive()) {
    console.log(`${monster.name} est vaincu !`);
    break;
  }
  monster.attack(hero);
  if (!hero.isAlive()) {
    console.log(`${hero.name} est vaincu !`);
    break;
  }
}
