/**
 * Carousel class - a content element replace with fetched content
 * @author Government of Canada
 * @version 1.0
 * @requires Debug Event Element
 */

define( [ ], function( ) {
	"use strict";
	
	console.log( "MODULE Class loaded" );
	
	// Shared between all instances 
	var local = 3;
	
	// One instance of this class exist per element
	class Carousel extends HTMLElement {

		
		constructor() {
			// Always call super first in constructor
			super();

			// Add wb plugins utilities
			//Object.setPrototypeOf( this, myProto );

			console.log( "[ i18n ] -> " + this.i18n.greeting );
			//if ( !this.local ) {
			//	this.local = 0;
			//}
			//console.log( local );
			//console.log( this.local );
			//local ++;
			//this.local ++;
		}

		connectedCallback() {
			console.log('Custom element added to page.');
		}

		disconnectedCallback() {
			console.log('Custom element removed from page.');
		}

		adoptedCallback() {
			console.log('Custom element moved to new page.');
		}

		attributeChangedCallback(name, oldValue, newValue) {
			console.log('Custom element attributes changed.');
		}
		
	}

	customElements.define("wb-carousel", Carousel);

});
