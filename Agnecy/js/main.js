$(function () {
	let menu = $("#menu");
	let introH = $("#header").innerHeight();
	let scrollOffset = $(window).scrollTop();


	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);


	})
	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			menu.addClass("fixed");
		} else {
			menu.removeClass("fixed");
		}
	}

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();
		let offset = $("#menu").innerHeight();
		console.log(offset);

		let $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top - offset;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});

	$("#header__toggle").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});


	let filter = $("[data-filter]");

	filter.on("click", function (event) {
		event.preventDefault();

		let cat = $(this).data('filter');

		if (cat == 'all') {
			$("[data-cat]").removeClass("	hiden");
		} else {
			$("[data-cat]").each(function () {
				let workCat = $(this).data('cat');


				if (workCat != cat) {
					$(this).addClass('hiden');
				} else {
					$(this).removeClass('hiden');
				}
			});
		}
	});




})