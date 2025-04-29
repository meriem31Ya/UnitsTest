export type CharacterClass = "Guerrier" | "Mage" | "Archer";

export class Character {
  constructor(
    public name: string,
    public hp: number,
    public attackPower: number,
    public characterClass: CharacterClass,
    public isDefending: boolean = false // ajout de la propriété isDefending
  ) {}

  // attack modifié pour inclure les coups critiques
  attack(enemy: Character) {
    let damage = this.attackPower;

    if (this.characterClass === "Mage") {
      damage *= 1.5;
    } else if (this.characterClass === "Archer") {
      damage += 5;
    }

    // // Coup critique (20% de chance)
    // if (Math.random() < 0.2) {
    //   console.log("Coup critique !");
    //   damage *= 2;
    // }

    enemy.receiveDamage(damage);
  }

  isAlive(): boolean {
    return this.hp > 0;
  }

  //    ajouter potion
  heal(amount: number) {
    this.hp += amount;
  }
  defend() {
    this.isDefending = true;
  }

  receiveDamage(damage: number) {
    if (this.isDefending) {
      damage /= 2;
      this.isDefending = false;
    }
    this.hp -= damage;
  }
}
