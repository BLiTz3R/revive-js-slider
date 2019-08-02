const config = [ // array with slides
  { // configuration object for first slide
    img_url: 'https://images.unsplash.com/photo-1544132532-54a91735687a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80', // full image url
    duration: 3, // in seconds
    title: { // title settings
      text: 'Checkerboard Mesa, Zion National Park, UT', // text
      color: '#000', // color
      bgcolor: '#fff', // background color
      halign: 'center', // horizontal align: left, center, right
      valign: 'bottom', // vertical align: top, center, bottom
      fontsize: '14px' // font size
    },
    entry: { // slide entry
      fx: 'fadeIn', // effect: toLeft, toRight, toTop, toBottom, fadeIn
      duration: 3, // duration: in seconds
    }
  }, { // object for 2nd slide etc.
    img_url: 'https://images.unsplash.com/photo-1555089439-9edb4b4b8dfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 3,
    title: {
      text: 'Gullfoss, Iceland',
      color: '#ff0000',
      bgcolor: '#fff',
      halign: 'right',
      valign: 'top',
      fontsize: '16px'
    },
    entry: {
      fx: 'toBottom',
      duration: 3,
    }
  }, {
    img_url: 'https://images.unsplash.com/photo-1556924784-f02bd5b5b094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 5,
    title: {
      text: 'Rainforest, Hawaii, USA',
      color: '#FFF',
      bgcolor: '#ff0000',
      halign: 'center',
      valign: 'center',
      fontsize: '18px'
    },
    entry: {
      fx: 'toRight',
      duration: 5,
    }
  }, {
    img_url: 'https://images.unsplash.com/photo-1558429121-3943585e2206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 5,
    title: {
      text: 'Osaka ferris wheel, Osaka, Japan',
      color: '#000',
      bgcolor: '#00ff00',
      halign: 'right',
      valign: 'center',
      fontsize: '15px'
    },
    entry: {
      fx: 'toTop',
      duration: 5,
    }
  }, {
    img_url: 'https://images.unsplash.com/photo-1557067175-db3159d938ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 6,
    title: {
      text: 'Neuschwanstein Castle, Bavaria, Germany',
      color: '#0000ff',
      bgcolor: '#ff22aa',
      halign: 'left',
      valign: 'bottom',
      fontsize: '14px'
    },
    entry: {
      fx: 'toLeft',
      duration: 6,
    }
  }
]

let sliderId; // create a global sliderId

// main function to create all necessary elements and set all main properties for slides
function slider(elementId, config) {
  const sliderEl = document.getElementById(elementId); // get element id

  for (let i = 0; i < config.length; i++) {
    const slideDiv = document.createElement('div'); // create divs for all slides
    slideDiv.classList.add('slide', `slide${i}`); // classes assigned, one common, one indexed
    sliderEl.appendChild(slideDiv); // place slide divs under the main element

    if (i === 0) { // properties for first slide only, required on load to show as intended
      slideDiv.style.animation = `${config[i].entry.fx} ${config[i].entry.duration}s`; // entry
      slideDiv.classList.add('active'); // class of "active"
      slideDiv.style.zIndex = 1; // and z-index 1, to appear in front
    }

    // set img_url
    slideDiv.style.backgroundImage = `url(${config[i].img_url})`;

    // set title text, halign, color, bgcolor, fontsize
    slideDiv.innerHTML = `<div class="textBox" style="z-index:${slideDiv.style.zIndex};text-align:${config[i].title.halign};"><span style="color:${config[i].title.color};background-color:${config[i].title.bgcolor};font-size:${config[i].title.fontsize}">${config[i].title.text}</span></div>`;

    // set title text valign
    if (config[i].title.valign === 'top') {
      document.querySelector(`.slide${i} .textBox`).classList.add(config[i].title.valign);
    } else if (config[i].title.valign === 'center') {
      document.querySelector(`.slide${i} .textBox`).classList.add(config[i].title.valign);
    } else if (config[i].title.valign === 'bottom') {
      document.querySelector(`.slide${i} .textBox`).classList.add(config[i].title.valign);
    }
  }
  slideAnimate(); // play the slides

  sliderId = arguments[0]; // set sliderId as function's first argument, to use later
}

// function to play slides
function playNext(sliderId) {
  const activeEl = document.querySelector(`#${sliderId} .active`); // get active slide
  let nextActive = activeEl.nextElementSibling; // and the next one

  if (!nextActive) { // if no more slides
    nextActive = document.querySelector(`#${sliderId} .slide0`); // set the first slide as active
  }

  const slides = document.querySelectorAll('.slide'); // get all slides
  slides.forEach(function (slide) {
    slide.style.zIndex = 0; // set their z-index to 0
  })

  activeEl.style.zIndex = 1; // set it to 1 for the active one, so it's always appearing "behind" the one coming next
  activeEl.classList.remove('active'); // remove active class to prepare for the next one
  activeEl.style.animation = 'none'; // and reset animation for next cycle

  const slideIndex = nextActive.className.replace(/\D/g, ''); // stripping all non-numeric chars from className returns only the slide index
  nextActive.style.animation = `${config[slideIndex].entry.fx} ${config[slideIndex].entry.duration}s`; // which we need here to set the animation effect and duration
  nextActive.classList.add('active'); // add active class
  nextActive.style.zIndex = 2; // and set z-index to 2, so it's always covering all the others
}

// function to animate slides
function slideAnimate() {
  const duration = config.map(function (slide) { // create an array with all the entry durations
    return slide.duration * 1000; // turn seconds into ms
  });

  let slideIndex = 0; // reset the slide index

  // function to handle given fx.duration
  function changeSlide(timer) {
    setTimeout(function () {
      if (timer !== 0) {
        playNext(sliderId); // play slides
      }

      if (slideIndex >= duration.length) { // if no more slides
        slideIndex = 0; // reset index to start over
      }
      changeSlide(duration[slideIndex++]); // animate slide with given duration and iterate it for next cycle
    }, timer);
  }
  changeSlide(0);
}