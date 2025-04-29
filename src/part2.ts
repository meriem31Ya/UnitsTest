export type CharacterClass = "Guerrier" | "Mage" | "Archer";

export class Character {
  constructor(
    public name: string,
    public hp: number,
    public attackPower: number,
    public characterClass: CharacterClass
  ) {}

  attack(enemy: Character) {
    let damage = this.attackPower;

    // Capacité spéciale
    if (this.characterClass === "Mage") {
      damage *= 1.5; // Mage inflige 50% de dégâts en plus
    } else if (this.characterClass === "Archer") {
      damage += 5; // Archer ajoute 5 points de dégâts
    }

    enemy.hp -= damage;
  }

  isAlive(): boolean {
    return this.hp > 0;
  }

  //    ajouter potion
  heal(amount: number) {
    this.hp += amount;
  }
}
