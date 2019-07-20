const config = [ // πίνακας με τις διαφάνειες
  { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1544132532-54a91735687a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 1,
    title: {
      text: 'Checkerboard Mesa, Zion National Park, UT',
      color: '#FFF',
      bgcolor: '#000',
      halign: 'center', // ή right ή center
      valign: 'top', // ή bottom ή center
      fontsize: '14px'
    },
    entry: {
      fx: 'toleft', // ή toright ή fadein
      duration: 12,
    }
  }, { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1555089439-9edb4b4b8dfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 2,
    title: {
      text: 'Gullfoss, Iceland',
      color: '#FFF',
      bgcolor: '#000',
      halign: 'left', // ή right ή center
      valign: 'top', // ή bottom ή center
      fontsize: '16px'
    },
    entry: {
      fx: 'toleft', // ή toright ή fadein
      duration: 12,
    }
  }, { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1556924784-f02bd5b5b094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 3,
    title: {
      text: 'Rainforest, Hawaii, USA',
      color: '#FFF',
      bgcolor: '#000',
      halign: 'right', // ή right ή center
      valign: 'top', // ή bottom ή center
      fontsize: '18px'
    },
    entry: {
      fx: 'toleft', // ή toright ή fadein
      duration: 12,
    }
  }, { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1558429121-3943585e2206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 2,
    title: {
      text: 'Osaka ferris wheel, Osaka, Japan',
      color: '#FFF',
      bgcolor: '#000',
      halign: 'center', // ή right ή center
      valign: 'top', // ή bottom ή center
      fontsize: '15px'
    },
    entry: {
      fx: 'toleft', // ή toright ή fadein
      duration: 12,
    }
  }, { // αντικείμενο για κάθε διαφάνεια
    img_url: 'https://images.unsplash.com/photo-1557067175-db3159d938ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    duration: 1,
    title: {
      text: 'Neuschwanstein Castle, Bavaria, Germany',
      color: '#FFF',
      bgcolor: '#000',
      halign: 'left', // ή right ή center
      valign: 'top', // ή bottom ή center
      fontsize: '14px'
    },
    entry: {
      fx: 'toleft', // ή toright ή fadein
      duration: 12,
    }
  }
]

function slider(elementId, config) {
  // βρίσκουμε το 1ο slide (το θεωρούμε ως active, γι'αυτό το βάζουμε σε μεταβλητή με αυτό το όνομα)
  const sliderEl = document.getElementById(elementId);
  const newDiv = document.createElement('div');
  newDiv.classList.add('slide');
  sliderEl.appendChild(newDiv);
  const activeElement = document.querySelector(`#${elementId} .slide`);

  // για κάθε εικόνα από τη δεύτερη μέχρι και την τελευταία
  for (let i = 1; i < config.length; i++) {
    // δημιουργούμε ένα αντίγραφο (κλώνο) του βασικού στοιχείου
    const slideClone = activeElement.cloneNode(true);
    // θέουμε στο style attribute του στοιχείου την background images από τον πίνακα με τη βοήθεια της CSS url( ) 
    slideClone.style.backgroundImage = `url(${config[i].img_url})`;
    // προσθέτουμε ως τελευταίο παιδί του slider το νέο αυτό element/slide
    sliderEl.appendChild(slideClone);
    slideClone.innerHTML = `<p style="color:${config[i].title.color};background-color:${config[i].title.bgcolor};text-align:${config[i].title.halign};font-size:${config[i].title.fontsize}">${config[i].title.text}</p>`;
  }

  // τώρα μπορούμε να θέσουμε την εικόνα για το 1ο slide
  activeElement.style.backgroundImage = `url(${config[0].img_url})`;
  activeElement.innerHTML = `<p style="color:${config[0].title.color};background-color:${config[0].title.bgcolor};text-align:${config[0].title.halign};font-size:${config[0].title.fontsize}">${config[0].title.text}</p>`;
  // και να το "δηλώσουμε" ως active, προσθέτοντας την αντίστοιχη κλάση
  activeElement.classList.add('active');

  // σε αυτό το σημείο η σελίδα μας είναι στην κατάσταση που ήταν και με την HTML του 1ης προσέγγισης
  // άρα ο κώδικας που υπήρχε εκεί λειτουργεί αυτούσιος (εδώ έχουν αφαιρεθεί τα σχόλια)

  setInterval(function () {
    const activeElement = document.querySelector(`#${elementId} .active`);
    let nextElement = activeElement.nextElementSibling;
    if (!nextElement) {
      nextElement = document.querySelector(`#${elementId} div:first-of-type`);
    }
    activeElement.classList.remove('active');
    nextElement.classList.add('active');
  }, 3000);

}

slider('sliderA', config);