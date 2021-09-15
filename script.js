$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 4; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500)
  });
});


// script 

$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});
});

// gsap anim
select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

var gridNum = 19,
	gridSize = [gridNum,gridNum], // number of cells in cols and rows
	gutter = 1, // in px
	container = select('.bg-container');

function createGrid() {
	var grid = document.createElement("div"),
		cols = gridSize[0],
		rows = gridSize[1],
		width = (100 - (cols-1)*gutter)/cols,
		height = width,
		numCells = cols*rows,
		box;
	
	grid.style.cssText = `grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr); grid-gap: ${gutter}px;`;
	grid.setAttribute("class", "grid");
	
	for(i=0; i<numCells; i++) {
		box = document.createElement("div");
		box.setAttribute("class", "cell");
		grid.appendChild(box);
	}
	container.appendChild(grid);
}

var tl = gsap.timeline({repeat:-1, repeatDelay:0, delay: 1});

function animateBoxes() {
	tl.to(".cell", {
		duration: 2,
		scale: "random(0.1, 2)", 
		opacity: "random(0.3, 1)",
		x: "random(-300,300)",
		y: "random(-300,300)",
		z: "random(-400,400)",
		rotateX: "random(-360, 360, 180)",
		rotateY: "random(-360, 360, 180)",
		repeat:-1, 
		repeatDelay: 2,
		repeatRefresh: true,
		ease: "power2.inOut",
		stagger: {
			amount: 1, 
			grid: gridSize, 
			ease: "sine.inOut",
			from: "center"
		}
	});
	gsap.to('.grid', { duration: 36, rotateX: 2160, rotateY: 720, ease: "none", repeat: -1});
}

createGrid();
animateBoxes();