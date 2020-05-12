import React from 'react';
import './Menu.scss';
const menuList = [
  {
    title: "Featured Flavors",
    url:"https://www.youtube.com/embed/uJlIncioJVI"
  },
  {
    title: "Sonu Recipes",
    url: "https://www.youtube.com/embed/c3VNmsuQ4pk"
  },
  {
    title: "MORNING FAVORITES",
    url: "https://www.youtube.com/embed/O-3Mlj3MQ_Q"
  }
];

export function DadaMenu () {
  return (
    <div className="DadaMenu-container">
      {
        menuList.map(menuGroup => {
          return (
            <div key={menuGroup.title}>
              <h1 >{menuGroup.title}</h1>
              <iframe width="560" height="315" src={menuGroup.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {menuGroup.url}
            </div>
          );
        })
      }
    </div>
  );
}

export function Menu() {
  return (
    <div className="App">
      <img src="menu.jpg"></img>
      <h1>For the most updated cafe operating hours and services available please visit our locations page. Menu items may vary by location.
FEATURED FLAVORS
POWER BREAKFAST EGG BOWL 
scrambled eggs, ancient grains, chickpeas, oven-roasted tomato, fresh mozzarella, pesto*, power greens blend of baby kale, arugula, & spinach, toast

BACON AVOCADO EGG BOWL 
scrambled eggs, bacon, tomato, spinach, cheddar, avocado, sourdough toast

CARVED HAM & SWISS EGG BOWL 
scrambled eggs, pecan wood smoked ham, roasted red pepper, green onion, Swiss cheese, garlic cream, sourdough toast

AVOCADO BREAKFAST WRAP 
scrambled eggs, avocado, cheddar, spinach, tomato basil tortilla, green chile salsa

BACON BREAKFAST WRAP 
scrambled eggs, bacon, cheddar, oven-roasted tomato, spinach, tomato basil tortilla, green chile salsa

CHICKEN SAUSAGE BREAKFAST WRAP 
scrambled eggs, chicken sausage, cheddar, oven-roasted tomato, spinach, tomato basil tortilla, green chile salsa

POWER GREENS & GRAINS SALAD 
power greens blend of baby kale, arugula, & spinach, ancient grains, chickpeas, cucumber, oven-roasted tomato, hard-boiled egg, honey balsamic vinaigrette

SPICY SHRIMP CLUB WRAP 
shrimp, bacon, avocado, tomato, arugula, Calabrian aioli, tomato basil tortilla

CHICKEN ROSA PASTA 
grilled chicken, Parmesan, spinach, oven-roasted tomato, cavatappi pasta, pesto*, tomato cream sauce, toasted breadcrumbs

CARAMEL PECAN CHOCOLATE BABY BUNDT 
chocolate baby bundt, caramel, candied pecans

CONFETTI BABY BUNDT 
vanilla baby bundt, rainbow sprinkles, vanilla icing

HAZELNUT COLD BREW - BLACK 
cold brew coffee infused with hazelnut

HAZELNUT COLD BREW - CREAM 
creamy cold brew coffee infused with hazelnut

HAZELNUT LATTE 
espresso and milk infused with hazelnut

MORNING FAVORITES
BUTTERMILK PANCAKES & BACON (770 CAL) 
four fluffy buttermilk pancakes with a side of bacon

BUTTERMILK PANCAKES, EGGS & BACON (1010 CAL) 
four fluffy pancakes with bacon and scrambled eggs

VEGGIE SCRAMBLER (370 CAL) 
scrambled eggs, bell pepper, mushroom, onion, cheddar

ANAHEIM SCRAMBLER (590 CAL) 
scrambled eggs, bacon, tomato, green onion, cheddar, avocado

ALL AMERICAN SCRAMBLER (400 CAL) 
scrambled eggs with a side of bacon

BREAKFAST SANDWICHES
COMMUTER CROISSANT (640 CAL) 
scrambled eggs, bacon, cheddar, tomato, croissant

ANAHEIM PANINI (590 CAL) 
scrambled eggs, bacon, tomato, green onion, avocado, cheddar, grilled sourdough

BACON & CHEDDAR PANINI (620 CAL) 
scrambled eggs, bacon, cheddar, grilled sourdough

BREAKFAST WRAPS
BACON (680 CAL) 
scrambled eggs, bacon, cheddar, oven-roasted tomato, spinach, tomato basil tortilla, green chile salsa

CHICKEN SAUSAGE (660 CAL) 
scrambled eggs, chicken sausage, cheddar, oven-roasted tomato, spinach, tomato basil tortilla, green chile salsa

AVOCADO (580 CAL) 
scrambled eggs, avocado, cheddar, spinach, tomato basil tortilla, green chile salsa

OATMEALS & YOGURT
APPLE & BANANA OVERNIGHT OATS (360 CAL)
rolled oats, vanilla yogurt, apple, banana, dried currants, dried cranberries

FRESH BERRY & YOGURT PARFAIT (370 CAL) 
granola, vanilla yogurt, seasonal berries

STEEL-CUT OATMEAL (350 CAL)
steel-cut oats, dried currants, dried cranberries, brown sugar, walnuts, almonds

BERRY & ALMOND OVERNIGHT OATS (490 CAL) 
rolled oats, vanilla yogurt, apple, banana, dried currants, dried cranberries, toasted almonds, strawberry, blueberry

CHOOSE ANY TWO
CHOOSE TWO 
Never Settle - Select Any Two Favorites: Half Sandwich, Half Panini, Cafe Pasta, Cafe Salad, Cup of Soup

THE TRIO
MIX & MATCH TRIO
Any Three Sides or Any Two Sides and Cup of Soup

FRESH SALADS
POWER GREENS SHRIMP CAESAR (350 - 710) 
power greens blend of baby kale, arugula, & spinach, garlic roasted shrimp, Parmesan, house-made croutons, Caesar dressing

TURKEY AVOCADO COBB 
mixed greens, oven-roasted turkey, bacon, hard-boiled egg, bleu cheese, avocado, tomato, avocado ranch dressing

SOUTHWEST (370 - 740 CAL) 
romaine blend, grilled chicken, tortilla strips, cheddar, corn salsa, tomato, avocado ranch dressing

CLASSIC CAESAR (300 - 600 CAL) 
romaine, Parmesan, house-made croutons, Caesar dressing</h1>
    
    
    </div>
  );
}

export default {Menu, DadaMenu};

