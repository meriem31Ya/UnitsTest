import { divide, multiply, sum } from "../index";
describe("Math functions", () => {
  it("should 3+2=5", () => {
    expect(sum(3, 2)).toBe(5);
  });

  it(" should multiply ", () => {
    expect(multiply(3, 2)).toBe(6);
  });
  //   On l'écrit sous forme de fonction car Jest a besoin d'attraper l'exception (si elle est lancée) au moment de l'exécution, pas avant.
  it("should throw an error when dividing by zero", () => {
    expect(() => divide(3, 0)).toThrow("Division by zero is not allowed.");
  });
  it.todo("something"); //  il faut le faire plus tard
});

//  toequal toEqual compare la valeur du contenu (profondément si c’est un objet ou un tableau).
describe("Object comparison", () => {
  it("should compare two objects", () => {
    const user = { name: "Alice", age: 25 };
    const expectedUser = { name: "Alice", age: 25 };
    expect(user).toEqual(expectedUser); // compare le contenu
  });
  it("should compare two arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(arr1).toEqual(arr2); // compare le contenu
  });
  it("should compare two arrays with different order", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];
    expect(arr1).not.toEqual(arr2); // compare le contenu
  });
});
//   toBe vérifie l'identité stricte (===) entre deux valeurs, donc not.toBe vérifie qu’ils ne sont pas identiques.
describe("Strict identity comparison", () => {
  test("les objets différents", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(obj1).not.toBe(obj2); // Ce ne sont pas le même objet en mémoire
  });

  test("nombres différents", () => {
    expect(5).not.toBe(10); // 5 n'est pas 10
  });
});
