export type CharacterClass = "Guerrier" | "Mage" | "Archer";

export class Character {
  constructor(
    public name: string,
    public hp: number,
    public attackPower: number,
    public characterClass: CharacterClass
  ) {}

  // attack modifié pour inclure les coups critiques
  attack(enemy: Character) {
    let damage = this.attackPower;

    if (this.characterClass === "Mage") {
      damage *= 1.5;
    } else if (this.characterClass === "Archer") {
      damage += 5;
    }

    // Coup critique (20% de chance)
    if (Math.random() < 0.2) {
      console.log("Coup critique !");
      damage *= 2;
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
