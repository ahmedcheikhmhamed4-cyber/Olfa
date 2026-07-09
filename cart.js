const CART_KEY = 'olfa_cart';

const unionCoopPrices = [
    { keywords: ['semoule'], name: 'Semoule fine', price: 3.5, unit: '500g' },
    { keywords: ['farine'], name: 'Farine', price: 4, unit: 'kg' },
    { keywords: ['sucre', 'sucre brun', 'sucre glace', 'sucre cassonade', 'sucre color', 'sucre perl'], name: 'Sucre', price: 5, unit: 'kg' },
    { keywords: ['œuf', 'oeuf', 'œufs', 'oeufs'], name: 'Œufs', price: 8, unit: '12' },
    { keywords: ['beurre', 'beurre sal'], name: 'Beurre', price: 7, unit: '250g' },
    { keywords: ['lait'], name: 'Lait', price: 5, unit: 'L' },
    { keywords: ['huile olive', 'huile d\'olive'], name: 'Huile d\'olive', price: 25, unit: 'L' },
    { keywords: ['huile pour friture', 'huile v', 'huile'], name: 'Huile végétale', price: 8, unit: 'L' },
    { keywords: ['viande agneau', 'agneau'], name: 'Viande d\'agneau', price: 45, unit: 'kg' },
    { keywords: ['viande bœuf', 'bœuf', 'boeuf', 'viande hach', 'steak', 'escalope'], name: 'Viande de bœuf', price: 40, unit: 'kg' },
    { keywords: ['poulet'], name: 'Poulet', price: 20, unit: 'kg' },
    { keywords: ['tomate', 'tomates'], name: 'Tomates', price: 5, unit: 'kg' },
    { keywords: ['oignon', 'oignons'], name: 'Oignons', price: 4, unit: 'kg' },
    { keywords: ['carotte', 'carottes'], name: 'Carottes', price: 3, unit: 'kg' },
    { keywords: ['courgette', 'courgettes'], name: 'Courgettes', price: 5, unit: 'kg' },
    { keywords: ['pomme de terre', 'pommes de terre'], name: 'Pommes de terre', price: 4, unit: 'kg' },
    { keywords: ['poivron', 'poivrons'], name: 'Poivrons', price: 6, unit: 'kg' },
    { keywords: ['ail'], name: 'Ail', price: 3, unit: 'tête' },
    { keywords: ['citron', 'citrons'], name: 'Citrons', price: 5, unit: 'kg' },
    { keywords: ['fromage râp', 'fromage frais', 'cheddar', 'cream cheese', 'mozzarella', 'fromage blanc', 'fromage'], name: 'Fromage', price: 10, unit: '200g' },
    { keywords: ['crème liquide', 'crème fleur', 'crème'], name: 'Crème', price: 8, unit: '200ml' },
    { keywords: ['chocolat', 'cacao'], name: 'Chocolat / Cacao', price: 12, unit: '200g' },
    { keywords: ['levure'], name: 'Levure', price: 2, unit: 'sachet' },
    { keywords: ['miel'], name: 'Miel', price: 25, unit: '500g' },
    { keywords: ['cannelle'], name: 'Cannelle', price: 5, unit: 'boîte' },
    { keywords: ['cumin'], name: 'Cumin', price: 4, unit: 'boîte' },
    { keywords: ['harissa'], name: 'Harissa', price: 6, unit: '200g' },
    { keywords: ['tomate concentr'], name: 'Concentré de tomate', price: 4, unit: '200g' },
    { keywords: ['pois chiche', 'pois chiches'], name: 'Pois chiches', price: 5, unit: '400g' },
    { keywords: ['riz'], name: 'Riz', price: 7, unit: 'kg' },
    { keywords: ['pâte', 'vermicelle', 'nouille', 'spaghetti'], name: 'Pâtes', price: 4, unit: '500g' },
    { keywords: ['thon'], name: 'Thon', price: 7, unit: 'boîte' },
    { keywords: ['olive', 'olives'], name: 'Olives', price: 8, unit: '500g' },
    { keywords: ['fleur d\'oranger', 'fleur doranger'], name: "Eau de fleur d'oranger", price: 10, unit: '200ml' },
    { keywords: ['amande', 'amandes'], name: 'Amandes', price: 14, unit: '200g' },
    { keywords: ['noix', 'noix coco', 'noisette', 'noix de cajou', 'noix de p'], name: 'Noix', price: 16, unit: '200g' },
    { keywords: ['datte', 'dattes'], name: 'Dattes', price: 15, unit: '500g' },
    { keywords: ['yaourt'], name: 'Yaourt', price: 7, unit: '6 pots' },
    { keywords: ['persil', 'coriandre', 'thym', 'basilic', 'menthe', 'herbe'], name: 'Herbes fraîches', price: 3, unit: 'botte' },
    { keywords: ['sel'], name: 'Sel', price: 2, unit: '500g' },
    { keywords: ['poivre'], name: 'Poivre', price: 5, unit: 'boîte' },
    { keywords: ['pain', 'bun', 'baguette', 'pita'], name: 'Pain', price: 3, unit: 'pièce' },
    { keywords: ['banane', 'bananes', 'pomme', 'fraises', 'framboise', 'myrtille', 'mangue', 'ananas', 'rhubarbe', 'abricot', 'raisin', 'fruits secs', 'fruit confit', 'fruits'], name: 'Fruits', price: 8, unit: 'kg' },
    { keywords: ['poudre amande', 'poudre noisette', 'polenta', 'fécule', 'maïzena', 'chapelure', 'biscuit'], name: 'Produits secs', price: 6, unit: 'paquet' },
    { keywords: ['café'], name: 'Café', price: 18, unit: '250g' },
    { keywords: ['rhum', 'cognac'], name: 'Alcool (rhum/cognac)', price: 50, unit: 'bouteille' },
    { keywords: ['vanille'], name: 'Vanille', price: 8, unit: 'gousse' },
    { keywords: ['curcuma', 'paprika', 'cari', 'curry', 'garam masala', 'cardamome', 'muscade', 'coriandre poudre', 'gingembre poudre', 'sumac'], name: 'Épices', price: 5, unit: 'boîte' },
    { keywords: ['vinaigre', 'sauce soja'], name: 'Vinaigre / Sauce soja', price: 6, unit: '250ml' },
    { keywords: ['mayonnaise', 'ketchup', 'moutarde'], name: 'Sauces', price: 7, unit: '200ml' },
];

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(recipeName, ingredients) {
    const cart = getCart();
    cart.push({ recipeName, ingredients, date: Date.now() });
    saveCart(cart);
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

function clearCart() {
    localStorage.removeItem(CART_KEY);
}

function getAllIngredients() {
    const cart = getCart();
    const map = {};
    cart.forEach(entry => {
        entry.ingredients.forEach(ing => {
            const key = ing.trim().toLowerCase();
            if (!key) return;
            if (map[key]) {
                map[key].count++;
            } else {
                map[key] = { text: ing.trim(), count: 1 };
            }
        });
    });
    return Object.values(map);
}

function findPrice(ingredientText) {
    const lower = ingredientText.toLowerCase();
    for (const item of unionCoopPrices) {
        for (const kw of item.keywords) {
            if (lower.includes(kw)) return item;
        }
    }
    return null;
}

const frToEn = {
  'semoule': 'semolina',
  'farine': 'flour',
  'sucre': 'sugar',
  'œuf': 'egg', 'oeuf': 'egg', 'œufs': 'eggs', 'oeufs': 'eggs',
  'beurre': 'butter',
  'lait': 'milk',
  'huile': 'oil',
  'olive': 'olive',
  'agneau': 'lamb',
  'bœuf': 'beef', 'boeuf': 'beef', 'veau': 'veal',
  'poulet': 'chicken',
  'tomate': 'tomato', 'tomates': 'tomatoes',
  'oignon': 'onion', 'oignons': 'onions',
  'carotte': 'carrot', 'carottes': 'carrots',
  'courgette': 'zucchini', 'courgettes': 'zucchini',
  'pomme de terre': 'potato', 'pommes de terre': 'potatoes',
  'poivron': 'bell pepper', 'poivrons': 'bell peppers',
  'ail': 'garlic',
  'citron': 'lemon', 'citrons': 'lemons',
  'fromage': 'cheese',
  'crème': 'cream',
  'chocolat': 'chocolate',
  'cacao': 'cocoa',
  'levure': 'yeast',
  'miel': 'honey',
  'cannelle': 'cinnamon',
  'cumin': 'cumin',
  'harissa': 'harissa',
  'pois chiche': 'chickpeas', 'pois chiches': 'chickpeas',
  'riz': 'rice',
  'pâte': 'pasta', 'vermicelle': 'vermicelli', 'nouille': 'noodles',
  'thon': 'tuna',
  'amande': 'almond', 'amandes': 'almonds',
  'noix': 'nuts', 'noisette': 'hazelnut',
  'datte': 'dates', 'dattes': 'dates',
  'yaourt': 'yogurt',
  'persil': 'parsley',
  'coriandre': 'cilantro',
  'sel': 'salt',
  'poivre': 'pepper',
  'banane': 'banana',
  'pomme': 'apple',
  'fraises': 'strawberries',
  'framboise': 'raspberry',
  'myrtille': 'blueberry',
  'mangue': 'mango',
  'ananas': 'pineapple',
  'café': 'coffee',
  'vanille': 'vanilla',
  'vinaigre': 'vinegar',
  'moutarde': 'mustard',
  'mayonnaise': 'mayonnaise',
  'ketchup': 'ketchup',
};

function translateIngredient(fr) {
  const lower = fr.toLowerCase().trim();
  for (const [frWord, enWord] of Object.entries(frToEn)) {
    if (lower.includes(frWord)) {
      return lower.replace(frWord, enWord);
    }
  }
  return lower;
}
