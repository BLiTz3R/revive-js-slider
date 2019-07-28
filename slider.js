const config = [ // πίνακας με τις διαφάνειες
  { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1544132532-54a91735687a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 3, // in seconds
    title: {
      text: 'Checkerboard Mesa, Zion National Park, UT',
      color: '#000',
      bgcolor: '#fff',
      halign: 'center', // left, center, right
      valign: 'bottom', // top, center, bottom
      fontsize: '14px'
    },
    entry: {
      fx: 'fadeIn', // toLeft, toRight, toTop, toBottom, fadeIn
      duration: 3, // in seconds
    }
  }, {
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

let sliderId; // global sliderId to use in various functions

function slider(elementId, config) {
  const sliderEl = document.getElementById(elementId);

  for (let i = 0; i < config.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('slide', `slide${i}`);
    sliderEl.appendChild(newDiv);
    if (i === 0) {
      newDiv.style.animation = `${config[i].entry.fx} ${config[i].entry.duration}s`;
      newDiv.classList.add('active');
      newDiv.style.zIndex = 1;
    }

    // img_url
    newDiv.style.backgroundImage = `url(${config[i].img_url})`;

    // title text, halign, color, bgcolor, fontsize
    newDiv.innerHTML = `<div class="textBox" style="text-align:${config[i].title.halign};"><span style="color:${config[i].title.color};background-color:${config[i].title.bgcolor};font-size:${config[i].title.fontsize}">${config[i].title.text}</span></div>`;

    // title text valign
    if (config[i].title.valign === 'top') {
      document.querySelector(`.slide${i} .textBox`).classList.add(config[i].title.valign);
    } else if (config[i].title.valign === 'center') {
      document.querySelector(`.slide${i} .textBox`).classList.add(config[i].title.valign);
    } else if (config[i].title.valign === 'bottom') {
      document.querySelector(`.slide${i} .textBox`).classList.add(config[i].title.valign);
    }
  }
  sliderId = arguments[0];
  slideAnimate();
}

// play slides
function playNext(sliderId) {
  const activeElement = document.querySelector(`#${sliderId} .active`);
  let nextElement = activeElement.nextElementSibling;
  if (!nextElement) {
    nextElement = document.querySelector(`#${sliderId} div:first-of-type`);
  }
  const slides = document.querySelectorAll('.slide');
  slides.forEach(function (slide) {
    slide.style.zIndex = 0;
  })
  activeElement.style.zIndex = 1;
  activeElement.classList.remove('active');
  activeElement.style.animation = 'none';
  const slideIndex = nextElement.className.replace(/\D/g, ''); // stripping all non-numeric chars from className will give me the slide index
  nextElement.style.animation = `${config[slideIndex].entry.fx} ${config[slideIndex].entry.duration}s`;
  nextElement.classList.add('active');
  nextElement.style.zIndex = 2;
}

// slide duration
function slideAnimate() {
  const duration = config.map(function (slide) {
    return slide.duration * 1000;
  });

  let slideIndex = 0;

  function changeSlide(timer) {
    setTimeout(function () {
      if (timer !== 0) {
        playNext(sliderId);
      }
      if (slideIndex >= duration.length) {
        slideIndex = 0;
      }
      changeSlide(duration[slideIndex++]);
    }, timer);
  }
  changeSlide(0);
}