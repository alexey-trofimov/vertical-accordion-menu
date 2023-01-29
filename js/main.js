/*
Vertical accordion menu: Main js file
main.js v1.0
*/

( function( $ ) {
	'use strict';
	$( document ).ready( function() {

		/*
		Function: Show/hide sub-menus
		*/
		function toggleSubMenus() {

			// menu links
			var $menuLinks = $( '#mw-vertical-menu a' );

			// add an arrow icon to every link that has a submenu
			$menuLinks.each( function( i, elem ) {
				if ( $( elem ).next().is( 'ul' ) ) {
					$( elem ).append( '<span class="mw-toggle-sub-menu"><i class="fa-solid fa-chevron-down"></i></span>' );
				}
			} );

			// arrow icons and additional css class
			var $subMenuToggleButtons = $( '#mw-vertical-menu .mw-toggle-sub-menu' ),
				subMenuVisibleCssClass = 'mw-sub-menu-visible';

			// show or hide sub-menu
			$subMenuToggleButtons.on( 'click', function() {

				// get current button and current menu items
				var $thisButton = $( this ),
					$currentMenuItem = $thisButton.closest( 'li' ),
					$currentSubMenu = $thisButton.parent().next();

				// show sub-menu
				if ( $currentSubMenu.is( 'ul' ) && ! $currentMenuItem.hasClass( subMenuVisibleCssClass ) ) {
					$currentMenuItem.addClass( subMenuVisibleCssClass );
					$currentSubMenu.slideDown( 300 );
					$thisButton.html( '<i class="fa-solid fa-chevron-up"></i>' );
					return false;
				}

				// hide sub-menu
				if ( $currentSubMenu.is( 'ul' ) && $currentMenuItem.hasClass( subMenuVisibleCssClass ) ) {
					$currentMenuItem.removeClass( subMenuVisibleCssClass );
					$currentSubMenu.slideUp( 300 );
					$thisButton.html( '<i class="fa-solid fa-chevron-down"></i>' );
					return false;
				}

				return false;

			} );

		}

		toggleSubMenus();

	} );
} )( jQuery );
