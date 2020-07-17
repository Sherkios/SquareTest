
"use strict";
jQuery(document).ready(function($) {

	

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=$('.menu__link');
	for(let i=0; i<arrow.length; i++){
			let thisLink=arrow[i].nextElementSibling;

		arrow[i].addEventListener('touchstart', function(){
			thisLink.classList.toggle('open');
		});
	}
}else{
	body.classList.add('mouse');
}


	
	let arrows = $('.blog__arrows button');
	let count = 0;
	var dots = $('.blog__blog li');
	let unlock = true;
	//вешаем обработчик на наши точки
	dots.click(function(){
		var $this = $(this);
		count = Array.prototype.indexOf.call(dots, this);

		dots.removeClass('before after none-dot');
		$this.addClass('after');
		//отображаем 2 предыдущие точки
		$this
			.prev().addClass('before')
			.prev().addClass('before');
		//отображаем 2 следующие точки
		$this
			.next().addClass('after')
			.next().addClass('after');

	
	  //если мы в самом начале - добавляем пару последующих точек
		if(!$this.prev().length) {
	  	$this.next().next().next()
		  	.addClass('after').next()
			  .addClass('after');
			$this
				.addClass('none-dot');
  	}
		//на 2й позиции - добавляем одну точку
	  if(!$this.prev().prev().length) {
  		$this.next().next().next()
	  	  .addClass('after');
	  	$this.prev()
			.addClass('none-dot');
  	}
  	if(!$this.prev().prev().prev().length) {
	  	$this.prev().prev()
			.addClass('none-dot');
  	}
		//в самом конце - добавляем пару доп. предыдущих точек
		if(!$this.next().length) {
			$this.prev().prev().prev()
				.addClass('before').prev()
				.addClass('before');
			$this
				.addClass('none-dot');
		}
		//предпоследний элемента - добавляем одну пред. точку
		if(!$this.next().next().length) {
			$this.prev().prev().prev()
				.addClass('before');
			$this.next()
				.addClass('none-dot');
		}	
		if(!$this.next().next().next().length) {
			$this.next().next()
				.addClass('none-dot');
		}	
	});
	dots.eq(0).click();
	arrows.eq(0).click(function() {
		if (unlock) {
			if (count > 0) {
				count--;
			}
			dots.eq(count).click();
			unlock = false
			setTimeout(function() {
				unlock = true
			}, 800);
		}
	});
	arrows.eq(1).click(function() {
		if (unlock) {
			if (count < dots.length-1) {
				count++;
			}
			dots.eq(count).click();
			unlock = false;
			setTimeout(function() {
				unlock = true;
			}, 800);
		}
	});
	$('.menu__burger').click(function() {
		$('.menu__category,.menu__burger,.header__menu_mob,.header__logo').toggleClass('active');
		$('.sub-menu__list,.sub-sub-menu__list').removeClass('open');
	});
	
	$('.slider__slider').slick({
		dots:false,
		slidesToShow:1,
		appendArrows:$('.slider__arrows'),
	});
	$('.blog__blog').slick({
		slidesToShow:3,
		slidesToScroll:3,
			responsive: [
	   	 {
		      breakpoint: 870,
		      settings: {
		        slidesToShow:2,
		        slidesToScroll:2
	      	}
	    	},
	    	{
		      breakpoint: 570,
		      settings: {
		        slidesToShow:1,
		        slidesToScroll:1
	      	}
	    	}
    ],
		draggable:false,
		focusOnSelect: false,
		dots:true,
		infinite:false,
		speed:800,
		appendArrows:$('.blog__arrows'),
		prevArrow:'<button type="button" class="slick-prev">PREV</button>',
		nextArrow:'<button type="button" class="slick-next">NEXT</button>',
	});

	$('.grid__toggle-1').click(function() {
		$('.grid__grid').removeClass('active__big');
		$('.grid__grid').removeClass('active__small');
		$('.G-one,.G-two,.G-three').css('display', 'none');
		$('.G-one,.big').css('display', 'flex');
	});
	$('.grid__toggle-2').click(function() {
		$('.grid__grid').removeClass('active__big');
		$('.grid__grid').removeClass('active__small');
		$('.grid__grid').addClass('active__big');
		$('.G-one,.G-two,.G-three,.big').css('display', 'none');
		$('.G-two').css('display', 'flex');
	});
	$('.grid__toggle-3').click(function() {
		$('.grid__grid').removeClass('active__big');
		$('.grid__grid').removeClass('active__small');
		$('.grid__grid').addClass('active__small');
		$('.G-one,.G-two,.G-three,.big').css('display', 'none');
		$('.G-three').css('display', 'flex');
	});
});

function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#','');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		})
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose (popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPadding.length > 0) {
		for (let inedx = 0; index < lockPadding.length; i++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function() {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout)

	unlock =false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function() {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function() {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();
//Использовать для смены места объекта при определенном разрешении.
(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());

//# sourceMappingURL=main.js.map