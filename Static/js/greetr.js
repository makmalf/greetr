
jQuery(document).ready(function($) {

	/*----------------------------------------------------*/
	/* Loading Icon
	------------------------------------------------------*/
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

	/*----------------------------------------------------*/
	/*	Make sure that #header-background-image height is
	/* equal to the browser height.
	------------------------------------------------------ */

	$('header#home').css({ 
		'height': $(window).height()
	});

	$(window).on('resize', function() {

		$('header#home').css({ 
			'height': $(window).height() 
		});

		$('body').css({ 
			'width': $(window).width() 
		});

	});



	/*----------------------------------------------------*/
	/* Smooth Scrolling
-	----------------------------------------------------- */

   	$('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	var platform = navigator.platform.toLowerCase();
	if (platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) {
	    if ($.browser.webkit) {
			$.srSmoothscroll({
				// defaults
				step: 100,
				speed: 50,
				target: $('body'),
				container: $(window)
			});
	    }
	 }

   	/*----------------------------------------------------*/
   	/* Sticky Menu Bar
   	------------------------------------------------------*/

	var sticky = new Waypoint.Sticky({
		element: $('.stickit')[0]
	});

	$('#home').waypoint(               // create a waypoint
    	function() {
      		$('#toTop').fadeOut();
    	}
  	);


   	/*----------------------------------------------------*/
   	/* Tooltips
   	------------------------------------------------------*/

  	$('.hastip').tooltipsy();

  	/*----------------------------------------------------*/
   	/* toTop Button
   	------------------------------------------------------*/

  	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() < 100) {
			$('#toTop').fadeOut();
		} else {
			$('#toTop').fadeIn();
		}
	});
	
	//Click event to scroll to top
	$('#toTop').click(function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});

});


/*----------------------------------------------------*/
/* Circular Button a la Path
------------------------------------------------------*/

(function() {

	function SVGMenu( el, options ) {
		this.el = el;
		this.init();
	}

	SVGMenu.prototype.init = function() {
		this.trigger = this.el.querySelector( 'button.trigger' );
		this.shapeEl = this.el.querySelector( 'span.morph-shape' );

		var s = Snap( this.shapeEl.querySelector( 'svg' ) );
		this.pathEl = s.select( 'path' );
		this.paths = {
			reset : this.pathEl.attr( 'd' ),
			active : this.shapeEl.getAttribute( 'data-morph-active' )
		};

		this.isOpen = false;

		this.initEvents();
	};

	SVGMenu.prototype.initEvents = function() {
		this.trigger.addEventListener( 'click', this.toggle.bind(this) );
	};

	SVGMenu.prototype.toggle = function() {
		var self = this;

		if( this.isOpen ) {
			classie.remove( this.el, 'menu--open' );
		}
		else {
			setTimeout( function() { classie.add( self.el, 'menu--open' ); }, 175 );
		}
		
		this.pathEl.stop().animate( { 'path' : this.paths.active }, 150, mina.easein, function() {
			self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
		} );

		this.isOpen = !this.isOpen;
	};

	new SVGMenu( document.getElementById( 'menu' ) );

})();





