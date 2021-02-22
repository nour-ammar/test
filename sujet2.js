// Écrire une fonction qui prend un paramètre entier X, et qui renvoi une
// réponse booléenne pour dire si le chiffre est divisible par 3 ou pas,
// sans utiliser la fonction div ou mod ou les opérateurs de division et
// reste de la division. (l'algorithme doit être optimisé)

let myFunc = (x) => {
  return x === 0 ? true :  x < 0 ? false : myFunc(x - 3);
};
// time complexity = O(n) "linear"
