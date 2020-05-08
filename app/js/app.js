// Typed js
var typed = new Typed('#typed', {
    // Waits 1000ms after typing "First"
    strings: ['Designing', 'Deployment', 'Programming' ],
    typeSpeed: 80,
    backSpeed: 40,
    startDelay: 500,
    backDelay: 500,
    smartBackspace: false,
    });
    // blob animation anime js
    const blob1 = "M283.863 93.7897C121.477 153.53 34.4753 215.972 7.5345 258.3C-19.4063 300.628 32.8372 352.715 55.4842 404.798C149.867 621.856 422.274 505.666 422.274 619.141C422.274 732.617 328.846 714.305 328.846 770.442C328.846 826.58 347.383 833.484 422.274 896.527C497.164 959.569 550.304 995.293 604.433 999.796C658.561 1004.3 705.133 933.55 751 867.107C885.198 672.71 697.86 428.213 728.508 218.073C759.157 7.93221 655.348 -2.87491 622.476 0.427316C589.603 3.72954 446.249 34.0498 283.863 93.7897Z";
    const blob2 = "M269.283 244.795C200.551 288.539 95.6959 150.05 44.8121 244.795C14.181 301.83 -28.5864 344.854 30.3827 423.124C89.3517 501.394 9.81953 678.741 9.81953 787.114C9.81953 895.487 120.521 863.271 197.743 882.586C256.605 897.309 285.483 832.535 350.932 892.742C416.381 952.95 447.626 1027.76 510.127 991.368C592.768 943.247 565.905 664.5 605.99 601.045C723.27 415.389 771.232 427.017 798.017 226.325C824.801 25.6334 661.549 3.69311 541.405 0.977137C413.206 -1.92092 338.015 201.051 269.283 244.795Z";
    const blob3 = "M295.9 5.38303C218.557 31.5678 148.953 108.087 112.164 188.548C90.0183 236.983 -32.8449 724.032 9.78908 790.501C52.423 856.971 214.346 679.802 243.652 703.809C272.957 727.816 265.524 883.516 321.354 899.919C363.911 912.423 384.789 857.414 432.108 908.544C479.427 959.674 502.016 1023.21 547.203 992.3C606.952 951.434 741.006 916.855 769.987 862.967C854.779 705.302 735.98 513.035 755.345 342.602C774.71 172.168 656.68 153.536 569.817 151.23C477.131 148.768 404.521 -31.3915 295.9 5.38303Z";
    const blob4 = "M278.171 60.4424C213.753 98.3686 91.6775 20.5089 43.9876 102.653C15.2792 152.102 -11.2801 370.662 43.9876 438.522C99.2553 506.383 0.5 554.708 0.5 648.668C0.5 742.627 110.323 983.677 182.698 1000.42C237.866 1013.19 304.926 721.973 366.267 774.173C427.608 826.373 578.241 890.366 636.818 858.813C714.273 817.092 708.968 646.041 746.537 591.025C856.456 430.061 760.186 370.388 785.29 196.388C810.393 22.3881 657.387 3.3658 544.784 1.01104C424.633 -1.50158 342.589 22.5162 278.171 60.4424Z";
    const blob5 = "M209.686 44.7248C141.013 79.5674 94.6787 258.975 43.8388 334.44C13.2341 379.869 -29.4965 414.138 29.4217 476.481C88.34 538.824 230.734 513.815 230.734 600.136C230.734 686.456 132.531 832.017 209.686 847.402C268.498 859.129 230.885 937.048 296.278 985.004C361.671 1032.96 446.306 958.08 508.753 929.093C591.323 890.764 602.862 775.354 642.912 724.811C760.091 576.934 769.633 479.581 796.395 319.728C823.156 159.876 696.077 3.10574 576.037 0.942435C447.949 -1.3659 278.359 9.88221 209.686 44.7248Z";

    const blobId = document.querySelector("#blobId");
    const timeline = anime.timeline({
    loop: true,
    duration :100000,
    easing : "linear"
    });
    timeline.add({
    targets: ".blobClass",
    d: [
    {value: blob2},
    {value: blob3},
    {value: blob4},
    {value: blob5},
    {value: blob1}
    ]
    });

    // parallax animation 
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    var sceneTestimonials = document.getElementById('scene-testimonials');
    var parallaxInstanceTestimonials = new Parallax(sceneTestimonials);

    var sceneFooter = document.getElementById('scene-footer');
    var parallaxInstanceFooter = new Parallax(sceneFooter);

    var sceneAbout1 = document.getElementById('about-img1');
    var parallaxInstanceAbout1 = new Parallax(sceneAbout1);

    var sceneAbout2 = document.getElementById('about-img2');
    var parallaxInstanceAbout2 = new Parallax(sceneAbout2);
    // slogan without fill
    const blobx = "M138.6,-170.2C167.2,-170.1,169.2,-112.9,160,-69C150.9,-25.1,130.6,5.4,125.4,46.7C120.2,88.1,130,140.3,111.6,178C93.3,215.7,46.6,238.8,13,220.9C-20.6,203,-41.1,144,-66.2,108.4C-91.2,72.9,-120.8,60.9,-120.3,43.5C-119.8,26.2,-89.4,3.5,-90,-40C-90.6,-83.4,-122.3,-147.7,-112.5,-153.8C-102.7,-160,-51.3,-108,1.9,-110.5C55.1,-113.1,110.1,-170.2,138.6,-170.2Z";
    const bloby = "M80.2,-126.8C93.1,-101.1,85.1,-63.1,90.7,-32.6C96.4,-2.1,115.7,20.9,120.1,48.8C124.5,76.7,114,109.6,91.5,110.2C69,110.9,34.5,79.5,0,79.5C-34.5,79.5,-69,110.9,-108.6,115.8C-148.2,120.7,-193,99,-217.3,61.7C-241.6,24.5,-245.4,-28.2,-223.2,-65.1C-201,-102,-152.8,-123,-111.3,-139.3C-69.8,-155.7,-34.9,-167.3,-0.6,-166.5C33.7,-165.7,67.4,-152.4,80.2,-126.8Z";
    const blobz = "M10.5,-43.4C15.1,-11.1,21.3,-10,58.7,4.6C96.1,19.3,164.5,47.5,188.8,88.8C213.1,130,193.3,184.3,154.4,183.9C115.6,183.4,57.8,128.2,12.7,110.7C-32.3,93.2,-64.7,113.3,-106.8,114.9C-149,116.4,-201,99.3,-208.6,69.3C-216.2,39.3,-179.4,-3.5,-161.5,-50.5C-143.5,-97.5,-144.3,-148.7,-120.6,-174.8C-96.8,-200.9,-48.4,-201.9,-22.7,-170.7C2.9,-139.4,5.9,-75.8,10.5,-43.4Z";

    const blobIxd = document.querySelector("#blobxId");
    const timelinex = anime.timeline({
    loop: true,
    duration: 50000,
    easing: "linear"
    });
    timelinex.add({
    targets: ".blobxClass",
    d: [{
            value: bloby
        },
        {
            value: blobz
        },
        {
            value: blobx
        }
        ]
    });

    const bloba = "M46.9,-63.4C59.8,-55.3,68.4,-40.1,102.8,-14.5C137.3,11.2,197.5,47.5,190.2,59.3C183,71.2,108.2,58.7,65.3,74.2C22.3,89.7,11.2,133.4,-16.4,155.9C-43.9,178.4,-87.8,179.8,-97,153.3C-106.2,126.8,-80.7,72.4,-94.4,30.6C-108.1,-11.2,-161,-40.4,-161.7,-57C-162.4,-73.6,-110.9,-77.7,-75.2,-78.4C-39.6,-79.1,-19.8,-76.6,-1.4,-74.7C17,-72.8,34.1,-71.6,46.9,-63.4Z";
    const blobb = "M102.6,-123.4C128.5,-122.5,141.8,-86.4,165,-46.2C188.3,-6,221.6,38.4,205.5,60.2C189.3,81.9,123.8,81,81.3,87.5C38.8,94.1,19.4,108,6.7,98.9C-6.1,89.7,-12.1,57.4,-44.6,47.6C-77.1,37.8,-136.1,50.6,-179.8,31.2C-223.5,11.8,-252,-39.7,-220.6,-51.7C-189.2,-63.7,-97.8,-36.3,-51.1,-30.5C-4.3,-24.6,-2.2,-40.3,18.1,-65.2C38.4,-90.2,76.8,-124.4,102.6,-123.4Z";
    const blobc = "M70.3,-117.1C95.2,-78.7,122.3,-63.6,135.2,-40.1C148,-16.6,146.8,15.3,148.4,60C150.1,104.6,154.7,161.9,130.4,167.2C106.2,172.5,53.1,125.7,2.5,122.2C-48,118.7,-96,158.5,-123.7,154.3C-151.5,150.2,-159,102.1,-175.2,56C-191.5,9.9,-216.5,-34.3,-188.8,-43.3C-161,-52.3,-80.5,-26.2,-40.3,-59.6C0,-93,0,-186,11.4,-201.6C22.7,-217.3,45.5,-155.6,70.3,-117.1Z";

    const blobIad = document.querySelector("#blobaId");
    const timelinea = anime.timeline({
    loop: true,
    duration: 50000,
    easing: "linear"
    });
    timelinea.add({
    targets: ".blobaClass",
    d: [{
            value: blobb
        },
        {
            value: blobc
        },
        {
            value: bloba
        }
        ]
    });

    const blobt = "M46.9,-63.4C59.8,-55.3,68.4,-40.1,102.8,-14.5C137.3,11.2,197.5,47.5,190.2,59.3C183,71.2,108.2,58.7,65.3,74.2C22.3,89.7,11.2,133.4,-16.4,155.9C-43.9,178.4,-87.8,179.8,-97,153.3C-106.2,126.8,-80.7,72.4,-94.4,30.6C-108.1,-11.2,-161,-40.4,-161.7,-57C-162.4,-73.6,-110.9,-77.7,-75.2,-78.4C-39.6,-79.1,-19.8,-76.6,-1.4,-74.7C17,-72.8,34.1,-71.6,46.9,-63.4Z";
    const blobw = "M102.6,-123.4C128.5,-122.5,141.8,-86.4,165,-46.2C188.3,-6,221.6,38.4,205.5,60.2C189.3,81.9,123.8,81,81.3,87.5C38.8,94.1,19.4,108,6.7,98.9C-6.1,89.7,-12.1,57.4,-44.6,47.6C-77.1,37.8,-136.1,50.6,-179.8,31.2C-223.5,11.8,-252,-39.7,-220.6,-51.7C-189.2,-63.7,-97.8,-36.3,-51.1,-30.5C-4.3,-24.6,-2.2,-40.3,18.1,-65.2C38.4,-90.2,76.8,-124.4,102.6,-123.4Z";
    const blobr = "M70.3,-117.1C95.2,-78.7,122.3,-63.6,135.2,-40.1C148,-16.6,146.8,15.3,148.4,60C150.1,104.6,154.7,161.9,130.4,167.2C106.2,172.5,53.1,125.7,2.5,122.2C-48,118.7,-96,158.5,-123.7,154.3C-151.5,150.2,-159,102.1,-175.2,56C-191.5,9.9,-216.5,-34.3,-188.8,-43.3C-161,-52.3,-80.5,-26.2,-40.3,-59.6C0,-93,0,-186,11.4,-201.6C22.7,-217.3,45.5,-155.6,70.3,-117.1Z";

    const blobTId = document.querySelector("#blobtId");
    const timelinet = anime.timeline({
    loop: true,
    duration: 50000,
    easing: "linear"
    });
    timelinet.add({
    targets: ".blobaClass",
    d: [{
            value: blobw
        },
        {
            value: blobr
        },
        {
            value: blobt
        }
        ]
    });

    const blobb1 = "M456.07 6.00474C209.376 -30.26 37.3429 133.509 22.1584 152.168C6.97401 170.827 -6.12455 231.478 5.13345 274.618C36.1702 393.551 -5.39642 415.438 87.7462 508.393C137.076 557.624 197.699 578.1 201.861 642.506C206.371 712.308 175.385 689.006 149.617 763.254C129.86 820.181 92.7665 944.177 149.617 979C240.922 1034.93 367.239 968.492 475.856 942.848C547.329 925.974 562.64 908.415 617.579 866.268C852.735 685.867 835.811 444.577 711.447 197.649C683.601 142.359 692.215 138.123 643.134 94.6356C566.964 27.1445 562.88 21.7061 456.07 6.00474Z";
    const blobb2 = "M456.07 6.00474C209.376 -30.26 37.3429 133.509 22.1584 152.168C6.97401 170.827 -6.12455 231.478 5.13345 274.618C36.1702 393.551 -5.39642 415.438 87.7462 508.393C137.076 557.624 197.699 578.1 201.861 642.506C206.371 712.308 175.385 689.006 149.617 763.254C129.86 820.181 92.7665 944.177 149.617 979C240.922 1034.93 367.239 968.492 475.856 942.848C547.329 925.974 562.64 908.415 617.579 866.268C852.735 685.867 835.811 444.577 711.447 197.649C683.601 142.359 692.215 138.123 643.134 94.6356C566.964 27.1445 562.88 21.7061 456.07 6.00474Z";
    const blobb3 = "M490.828 5.45142C246.735 -29.2092 59.6704 148.121 44.646 165.955C29.6217 183.789 -8.83541 259.591 2.3039 300.823C33.0134 414.494 87.496 407.548 179.657 496.391C228.467 543.445 199.565 557.531 179.657 617C156.647 685.734 124.634 743.113 134.338 809.456C142.573 865.756 123.405 954.511 179.657 987.793C269.999 1041.25 445.276 916.446 552.748 891.937C623.467 875.809 708.825 823.556 729.189 765.986C824.555 496.391 808.164 496.391 771.286 234.318C763.258 177.264 777.752 105.487 729.189 63.9232C655.165 0.566842 596.513 20.4583 490.828 5.45142Z";

    const blobBId = document.querySelector("#blobBlog");
    const timelineBlog = anime.timeline({
    loop: true,
    duration: 50000,
    easing: "linear"
    });
    timelineBlog.add({
    targets: ".blob-blog",
    d: [{
            value: blobb2
        },
        {
            value: blobb3
        },
        {
            value: blobb1
        }
        ]
    });
import {CountUp} from './countUp.js';
    // var counter = document.getElementById('.counter'),
    var waypoint = new Waypoint({
        element: document.getElementById('custom'),
        handler: function(direction) {
            var element1 = document.querySelector('.chart1');
            new EasyPieChart(element1, {
                size: 180,
                lineWidth: 7,
                trackColor: '#D4F8E5',
                barColor: '#27DEBF',
                scaleColor: false,
                responsive: true,
            });
            // element1.addEventListener('resize', function(){
            //   EasyPieChart.resize();
            // })
            var element2 = document.querySelector('.chart2');
            new EasyPieChart(element2, {
                size: 180,
                lineWidth: 7,
                trackColor: '#D4F8E5',
                barColor: '#27DEBF',
                scaleColor: false,
            });
            var element3 = document.querySelector('.chart3');
            new EasyPieChart(element3, {
                size: 180,
                lineWidth: 7,
                trackColor: '#D4F8E5',
                barColor: '#27DEBF',
                scaleColor: false,
            });
            var element4 = document.querySelector('.chart4');
            new EasyPieChart(element4, {
                size: 180,
                lineWidth: 7,
                trackColor: '#D4F8E5',
                barColor: '#27DEBF',
                scaleColor: false,
            });
            const options = {
                  separator: '',
                  decimal: '',
                  suffix: '%',
                };
            // element = document.getElementById('counter2'),
            var countUp1 = new CountUp('count1', 50, options);
            var countUp2 = new CountUp('count2', 75, options);
            var countUp3 = new CountUp('count3', 20, options);
            var countUp4 = new CountUp('count4', 50, options);
            countUp1.start();
            countUp2.start();
            countUp3.start();
            countUp4.start();
            this.destroy()
        }
    })
    var waypointBlock1 = new Waypoint({
        element: document.getElementById('block1'),
        handler: function(direction) {
          var bar1 = new ProgressBar.Line(progressbar1, {
              strokeWidth: 1.5,
              easing: 'easeInOut',
              duration: 1400,
              color: '#27DEBF',
              trailColor: '#D4F8E5',
              trailWidth: 1,
              svgStyle: {
                  width: '100%',
                  height: '100%'
              }
          });
          bar1.animate(0.95);
          const options1 = {
              separator: '',
              decimal: '',
              suffix: '%',
            };
          var countup1 = new CountUp('countr1', 95, options1);
            countup1.start();
            this.destroy()
        }
      })
    
      var waypointBlock2 = new Waypoint({
        element: document.getElementById('block2'),
        handler: function(direction) {
            var bar2 = new ProgressBar.Line(progressbar2, {
                strokeWidth: 1.5,
                easing: 'easeInOut',
                duration: 1400,
                color: '#27DEBF',
                trailColor: '#D4F8E5',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
              });
              bar2.animate(0.85);
              const options2 = {
                  separator: '',
                  decimal: '',
                  suffix: '%',
                };
              var countup2 = new CountUp('countr2', 85, options2);
            countup2.start();
            this.destroy()  // Number from 0.0 to 1.0
        }
      })
      var waypointBlock3 = new Waypoint({
        element: document.getElementById('block3'),
        handler: function(direction) {
            var bar3 = new ProgressBar.Line(progressbar3, {
                strokeWidth: 1.5,
                easing: 'easeInOut',
                duration: 1400,
                color: '#27DEBF',
                trailColor: '#D4F8E5',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
              });
              bar3.animate(0.70);
              const options3 = {
                  separator: '',
                  decimal: '',
                  suffix: '%',
                };
              var countup3 = new CountUp('countr3', 70, options3);
            countup3.start();
            this.destroy()  // Num
        }
      })
      var waypointBlock4 = new Waypoint({
        element: document.getElementById('block4'),
        handler: function(direction) {
            var bar4 = new ProgressBar.Line(progressbar4, {
                strokeWidth: 1.5,
                easing: 'easeInOut',
                duration: 1400,
                color: '#27DEBF',
                trailColor: '#D4F8E5',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
              });
              bar4.animate(0.50); 
              const options4 = {
                  separator: '',
                  decimal: '',
                  suffix: '%',
                };
            var countup4 = new CountUp('countr4', 50, options4);
            countup4.start();
            this.destroy() // Num
        }
      })
// Isotope-portfolio
// var iso = new Isotope( '.grid', {
// itemSelector: '.grid-item',
// layoutMode: 'fitRows',
// fitRows: {
//     gutter: '.gutter-sizer'
//     }
//     });
// var filterFns = {
//     numberGreaterThan50: function( itemElem ) {
//       var number = itemElem.querySelector('.number').textContent;
//       return parseInt( number, 10 ) > 50;
//     },
//     ium: function( itemElem ) {
//       var name = itemElem.querySelector('.name').textContent;
//       return name.match( /ium$/ );
//     }
//   };
//   var filtersElem = document.querySelector('.portfolio-filer');
//   filtersElem.addEventListener( 'click', function( event ) {
//     // only work with buttons
//     if ( !matchesSelector( event.target, 'button' ) ) {
//       return;
//     }
//     var filterValue = event.target.getAttribute('data-filter');
//     // use matching filter function
//     filterValue = filterFns[ filterValue ] || filterValue;
//     iso.arrange({ filter: filterValue });
//   });

//   var buttonGroups = document.querySelectorAll('.portfolio-filer');
//   for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
//     var buttonGroup = buttonGroups[i];
//     radioButtonGroup( buttonGroup );
//   }
  
//   function radioButtonGroup( buttonGroup ) {
//     buttonGroup.addEventListener( 'click', function( event ) {
//       // only work with buttons
//       if ( !matchesSelector( event.target, 'button' ) ) {
//         return;
//       }
//       buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
//       event.target.classList.add('is-checked');
//     });
//   }


// Magnific Popup
$('.grid-item').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
  });
$('#headerVideoLink').magnificPopup({
    type:'inline',
    midClick: true
})
//Portfolio View All-button add height to display all
// var portfolioButton = document.getElementById('portfolio-view-all');
// var panel = document.getElementById('portfolio-iso');
// var hide = document.getElementById('portfolio-h');
// portfolioButton.addEventListener('click', function(){
//   if(portfolioButton.value == "View All"){
//     portfolioButton.value = "View Less";
//     panel.classList.remove('portfolio-grid');
//     hide.classList.remove('port-hidd');
//   } else{
//     portfolioButton.value = "View All";
//     panel.classList.add('portfolio-grid');
//     hide.classList.add('port-hidd');
//   }
// })

//Slick Carousel
$('.first-testimonials-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 600,
  dots: true,
  arrows: false,
  infinite: true,
  asNavFor: '.second-testimonials-carousel',
  mobileFirst: true,
  responsive:[
    {
       breakpoint: 315,
        setttings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 400,
          infinite: true,
          dots: true
      }
    },
    {
      breakpoint: 426,
       setttings:{
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 400,
         infinite: true,
         dots: true
     }
   },
  ]
});
$('.second-testimonials-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.first-testimonials-carousel',
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  mobileFirst: true,
  responsive:[
    {
       breakpoint: 315,
        setttings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          speed: 400,
          infinite: true,
          dots: true,
          focusOnSelect: false,
      }
    }
  ]
});
$('.portfolio-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 400,
  infinite: true,
  dots: true,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: false,
  mobileFirst: true,
  responsive:[
    {
      breakpoint: 315,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: false,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: null,
        focusOnSelect: true,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        infinite: true,
        dots: true,
        centerMode: false,
        centerPadding: '10px',
        focusOnSelect: false,
      }
    },
    {
      breakpoint: 1442,
      settings: {
        slidesToShow: 3,
          slidesToScroll: 1,
          speed: 400,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '10px',
          focusOnSelect: true,
      }
    },
  ]
})
// Map
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFzaGFzYWxtaWlhcm92YSIsImEiOiJjazdrOXFuaTUwMnV3M3RvZG9tejVzcml3In0.vDTPEyo5-GciImjhY2Olug'; // replace this with your access token
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/dashasalmiiarova/ck7k9ds330l7j1ipggfhg7pob',
center: [-73.964794, 40.775203], // starting position [lng, lat]
zoom: 15
 // starting zoom
});
// Map PopUp
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['map-nyc-new'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    .addTo(map);
});


(function($){
  $(window).load(function(){
  $("#arrow-up a").mPageScroll2id();
  });
  })(jQuery);

(function($){
  $(window).load(function(){
  $("#home a").mPageScroll2id();
  });
  })(jQuery);
// Mobile Menu
var burgerButton = document.getElementsByClassName("toggle-button");
var p;
for(p = 0; p < burgerButton.length; p++){
    burgerButton[p].onclick = function(){
        // console.log('button clicked');
        var menuha = document.getElementById('nav-menu');
        if(menuha.style.maxHeight){
            menuha.style.maxHeight = null;
        }
        else{
            menuha.style.maxHeight = menuha.scrollHeight + "px";
        }
        if(menuha.style.marginTop){
            menuha.style.marginTop = null;
        }
        else{
            menuha.style.marginTop = 30 + "px";
        }
    }
}