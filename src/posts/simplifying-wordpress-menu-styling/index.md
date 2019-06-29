---
date: "2016-10-27"
title: "Simplifying WordPress Menu Styling"
category: ["Parker"]
featuredImage: './dmitriy-adamenko-0r2FM2tsbeM-unsplash.jpg'
featuredImageAccount: 'mikphotopro'
featuredImagePhotographer: 'Dmitriy Adamenko'
---

In the [previous post](https://www.slushman.com/post/improving-underscores-stylesheet-using-parker/) in this [series about Parker](https://www.slushman.com/post/parker-and-wordpress-theme-development/), we optimized parts of the _s stylesheet and improved our Parker scores. However, one of the more difficult optimizations by working on the menus. Simplifying menu styling involves more than just a stylesheet tweak though. We'll need to add some PHP code to underscores that adds classes to each menu ul tag, menu item, and menu item link.

## The Menu

The styling for menus in _s involves some pretty insane selectors, like this one:

```css
.main-navigation ul ul li:hover &gt; ul
```

Lets look at how to add classes to each menu ul tag, menu item, and menu item link so we can reduce how many identifiers we use in each selector, improve our Parker scores, and simplify our stylesheet.

### Menu Items and Links

In the inc/extras.php file, we're going to create two functions. The first adds classes to the menu items and the second adds classes to the links in each menu item.

#### ADD DEPTH AS A MENU ITEM CLASS

The following function adds two classes, derived from the menu name and the menu item depth, to each menu item.

```php
/**
 * Adds a class with the menu name and depth level to each menu item.
 * Makes styling menus much easier.
 *
 * @hooked nav_menu_css_class 10
 * @param array $classes The current menu item classes.
 * @param object $item The current menu item.
 * @param array $args The wp_nav_menu args.
 * @param int $depth The menu item depth.
 * @return array The modified menu item classes.
 */ 
function _s_add_depth_to_menu_items( $classes, $item, $args, $depth ) {
     if ( empty( $item ) ) { return $classes; }
     $classes[] = $args-&gt;menu_id . '-item';
     $classes[] = $args-&gt;menu_id . '-item-' . $depth;
     return $classes;
} // _s_add_depth_to_menu_items()

add_filter( 'nav_menu_css_class', '_s_add_depth_to_menu_items', 10, 4 );
```

The function first checks if the item is empty and returns if it is. We're not going to work invalid menu items.

The $classes parameter is an array, so we create the two new classes, add them to the array, and return the modified array. Here are examples of the resulting class names for a menu titled "Primary Menu":

```css
.primary-menu-item
.primary-menu-item-0
```

The class that includes the depth changes for each menu item according to its depth in the menu:

```css
.primary-menu-item-1
.primary-menu-item-2
.primary-menu-item-3
```

So instead of using:

```css
.primary-menu ul ul ul li
```

We could use this to style just the menu items at this depth:

```css
.primary-menu-item-2
```

Or this to style the menu items at this depth and all its descendants:

```css
.primary-menu-item-1 li
```

This works great for the menu item, but what about the link inside the menu item?

#### ADD DEPTH TO MENU ITEM

The following function adds two classes, derived from the menu name and the menu item depth, to each menu item link.

```php
/**
 * Adds classes to menu item links.
 * Adds the depth and menu name to make styling easier
 *
 * @hooked nav_menu_link_attributes 10
 * @param array $atts The current menu item link attributes
 * @param object $item The current menu item
 * @param object $args The wp_nav_menu args.
 * @param int $depth The menu item depth.
 * @return array The modified menu item link attributes.
 */
function _s_add_depth_to_menu_item_links( $atts, $item, $args, $depth ) {
    if ( empty( $item ) ) { return $atts; }
    $atts['class'] .= $args-&gt;menu_id . '-item-link ';
    $atts['class'] .= $args-&gt;menu_id . '-item-link-' . $depth . ' ';
    return $atts;
} // _s_add_depth_to_menu_item_links()

add_filter( 'nav_menu_link_attributes', '_s_add_depth_to_menu_item_links', 10, 4 );
```

The function first checks if the item is empty and returns if it is. We're not going to work with invalid menu items.

Since the classes for menu item links aren't arrays, like the menu items, we append each newly created class to the existing class string. In this case, I'm adding two new classes:

* <em>menu-name</em>-item-link
* <em>menu-name</em>-item-link-<em>depth</em>

This allows for styling menu links in this menu and menu links in this menu at any particular depth. So we can apply styles to:

```css
.primary-menu-item-link-2
```

Rather than:

```css
.primary-menu ul ul ul li &gt; a
```

### Custom Menu Walker

Now that we have the depth and menu name added to each menu item (li tag) and menu item link (a tag), we still need to add it to each menu level (the ul tag). Unfortunately, there's not a filter for the menu ul tags, so we'll need to create a new file in the "inc" folder called "main-menu-walker.php". In functions.php. copy the last require statement and paste it at the bottom of the file. Change the file name to main-menu-walker.php and change the comment to "Load main menu walker".

In the main-menu-walker.php file, we're going to create a simple class that only includes one method. This method replaces the one used by the default menu walker class used in WordPress and inserts the new classes in each menu and submenu. Here's the entire main-menu-walker.php file code:

```php
&lt;?php
/**
 * Custom walker for adding a wrapper around submenus in the main menu
 *
 * @since 1.0.0
 * @package Rosh
 * @subpackage Rosh/classes
 */
class _s_Main_Menu_Walker extends Walker_Nav_Menu {
    /**
     * Adds classes to the each menu.
     * Offsets the depth by one to allwo for the top-level menu to be level 0.
     *
     * @see Walker_Nav_Menu::end_lvl()
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param int $depth Depth of menu item. Used for padding.
     * @param array $args An array of arguments. @see wp_nav_menu()
     */
    public function start_lvl( &amp;amp;amp;$output, $depth = 0, $args = array() ) {
        $indent = str_repeat( "\t", $depth );
        $offsetdepth = $depth + 1;
        $output .= "\n$indent&lt;ul class=\"$args-&gt;menu_id-items $args-&gt;menu_id-items-$offsetdepth\"&gt;\n";
   } // start_lvl()
} // class
```

The function adds two classes to each ul tag in the menus:

* <em>menu-name</em>-items
* <em>menu-name</em>-items-<em>depth</em>

Before we can optimize our stylesheet with all these new classes, open the header.php file and find the wp_nav_menu function call (around line 45). We need to tell the primary menu to use our new walker class and add two classes to the top-level ul tag. Add the following just after 'menu_id' =&gt; 'primary-menu' and save the files:

```php
, 'menu_class' =&gt; 'primary-menu-items primary-menu-items-0', 'walker' =&gt; new _s_Main_Menu_Walker()
```

At this point, you should have classes that include the menu name and depth on each menu item list, menu item, and menu item link, allowing us to apply styles to the correct element using a few identifiers per selector as possible.

### Change the Stylesheet

Since we can now access each part of the menu directly with a class, lets look at what needs to change in the current stylesheet.Here are the rules we can change in the Menus section:

* .main-navigation ul
* .main-navigation li
* .main-navigation a
* .main-navigation ul ul
* .main-navigation ul ul ul
* .main-navigation ul ul a
* .main-navigation ul ul li
* .main-navigation li:hover &gt; a, .main-navigation li.focus &gt; a
* .main-navigation ul ul :hover &gt; a, .main-navigation ul ul .focus &gt; a
* .main-navigation ul ul a:hover, .main-navigation ul ul a.focus
* .main-navigation ul li:hover &gt; ul, .main-navigation ul li.focus &gt; ul
* .main-navigation ul ul li:hover &gt; ul, .main-navigation ul ul li.focus &gt; ul
* .main-navigation .current_page_item &gt; a, .main-navigation .current-menu-item &gt; a, .main-navigation .current_page_ancestor &gt; a, .main-navigation .current-menu-ancestor &gt; a
* @media screen and (min-width: 37.5em) { .main-navigation ul

We're going change these, respectively, to:

* .primary-menu-items
* .primary-menu-item
* .primary-menu-item-link
* .primary-menu-items-0 ul
* .primary-menu-items-1 ul
* .primary-menu-items-1 a
* .primary-menu-items-1 li
* .primary-menu-item:hover &gt; a, .primary-menu-item.focus &gt; a
* .primary-menu-items-1 :hover &gt; a, .primary-menu-items-1 .focus &gt; a
* .primary-menu-items-1 a:hover, primary-menu-items-1 a.focus
* .primary-menu-item:hover &gt; ul, .primary-menu-item.focus &gt; ul
* .primary-menu-item-1:hover &gt; ul, .primary-menu-item-1.focus &gt; ul
* .current_page_item &gt; .primary-menu-item-link, .current-menu-item &gt; .primary-menu-item-link, .current_page_ancestor &gt; .primary-menu-item-link, .current-menu-ancestor &gt; .primary-menu-item-link
* @media screen and (min-width: 37.5em) { .primary-menu-items

As you can see, we can get now apply styles to elements deep in a menu without needing to add more identifiers to select them. This also allows us to get rid of qualifying identifiers like ".main-navigation ... " because the menu name is now in a class in each item.

A quick note about the numbering before we move on. Computers start counting at 0, rather than 1, so the top-level menu items will be level 0, the next level is 1, etc.

Here are the results from our changes:

* Total Stylesheet Size: 14405, up from 14344, but this expected since the class names are longer, therefore increase the byte size.
* Total Identifiers: 350, down from 389
* Identifiers Per Selector: 1.475, down from 1.6375
* Specificity Per Selector: 8.566666666666666, down from 8.729166666666666

## Wrapping Up

We've now performed the more difficult optimizations and seen the improvements in our Parker scores. In the [final post](https://www.slushman.com/post/finishing-the-underscores-stylesheet/), we'll look back at our changes and see the overall improvement in our Parker scores. We'll also talk about where to go from there.
