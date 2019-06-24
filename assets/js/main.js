$(function() {
	var o = $('.lang-menu');
	e = $('#search');
    new Swiper(".swiper-container", {
        loop: !0,
        spaceBetween: 30,
        centeredSlides: !0,
        autoplay: {
            delay: 5600,
            disableOnInteraction: !1
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        }
    }), $('a[href="#search"]').on("click", function(e) {
        e.preventDefault(), $("#search").addClass("open"), $('#search > form > input[type="search"]').focus()
    }), $("#search, #search button.close").on("click keyup", function(e) {
        e.target != this && "close" != e.target.className && 27 != e.keyCode || $(this).removeClass("open")
    }), $("form").submit(function(e) {
        return e.preventDefault(), !1
    })
	jQuery('.prev').on('click', function (e) {
		e.stopImmediatePropagation();
		var btn_group_parent = $(this).closest('.btn-group');
		var number = 0;
		var show_number = btn_group_parent.find('.show-number');
		var a = show_number.text();
		a = parseInt(a);
		if (a > 1) {
			number = a - 1;
		} else {
			number = 1;
		}
		show_number.text(number);

	});

	jQuery('.next').on('click', function (e) {
		e.stopImmediatePropagation();
		var btn_group_parent = $(this).closest('.btn-group');
		var number = 0;
		var show_number = btn_group_parent.find('.show-number');
		var a = show_number.text();
		a = parseInt(a);
		if (a > 0) {
			number = a + 1;
		}
		show_number.text(number);
	});

	// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}

	[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
		if( inputEl.value.trim() !== '' ) {
			classie.add( inputEl.parentNode, 'input--filled' );
		}

		// events:
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );

	function onInputFocus( ev ) {
		classie.add( ev.target.parentNode, 'input--filled' );
	};

	function onInputBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input--filled' );
		}
	};

	$(window).on('load', function() {

		$('.lang-toggle').on('click', function() {
			o.toggleClass('lang-menu-active');
		});
	});

	$('.lang-toggle').click(function(event) {
        o.toggleClass('lang-menu-active');
	});
	
	jQuery(document).mouseup(function (e){ // событие клика по веб-документу
         
		var div = $('.lang-menu'); // тут указываем ID элемента
		  
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0  // и не по его дочерним элементам
			&& div.find('input:focus').length === 0 ) {  // и инпуты при этом не в фокусе
				$( ".lang-menu" ).removeClass( "lang-menu-active" )
		}
	});

});