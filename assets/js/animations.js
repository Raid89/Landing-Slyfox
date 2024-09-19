// Animacion para el texto "Lo hacemos por ti."

const writeMtTitle = () => {
  const Mt_Tile_Element = document.getElementById('mt-title-typed-text');
  const Mt_Subtitle_Element = document.getElementById('mt-subtitle-typed-text');
  Mt_Subtitle_Element.innerText = "";

  const mtTitleTypewriter = new Typewriter(Mt_Tile_Element, {
    loop: false,
    delay: 75,
  });

  mtTitleTypewriter
    .pauseFor(500)
    .typeString('Lo Hacemos Bien')
    .pauseFor(300)
    .deleteChars(4)
    .typeString('Por Ti<span style="color: #FF7070">.</span>')
    .callFunction(() => {
      document.querySelector('#mt-title-typed-text .Typewriter__cursor').remove();
      writeMtSubtitle(Mt_Subtitle_Element);
    })
    .start();
}

writeMtTitle();

// Animacion para el subtitulo inicial
const writeMtSubtitle = (Element) => {
  Element.innerText = `Convierte Tus Ideas en Experiencias Digitales Cautivadoras: 
                      Innovación en Diseño Web y Desarrollo de Soluciones Digitales Sin Límites.`;
  Element.classList.add('animate__animated');
  Element.classList.add('animate__bounceInLeft');
  setTimeout(() => {
    customersAnimation();
    starsAnimation();
  }, 700)
}

// Animacion para la seccion de cliente

const customersAnimation = () => {
  document.getElementById('qualifications-customers').style.opacity = '1';
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    anime({
      targets: '.customer1',
      translateX: [
        { value: [250, 32], duration: 500, delay: 500, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer2',
      translateX: [
        { value: [250, 24], duration: 500, delay: 1100, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer3',
      translateX: [
        { value: [250, 16], duration: 500, delay: 1700, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer4',
      translateX: [
        { value: [250, 8], duration: 500, delay: 2100, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer5',
      translateX: [
        { value: [250, 0], duration: 500, delay: 2600, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });
  } else if (screenWidth >= 1280) {

    anime({
      targets: '.customer1',
      translateX: [
        { value: [250, 48], duration: 500, delay: 500, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer2',
      translateX: [
        { value: [250, 36], duration: 500, delay: 1100, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer3',
      translateX: [
        { value: [250, 24], duration: 500, delay: 1700, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer4',
      translateX: [
        { value: [250, 12], duration: 500, delay: 2100, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer5',
      translateX: [
        { value: [250, 0], duration: 500, delay: 2600, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });
  } else if (screenWidth >= 1920) {

  } else {
    anime({
      targets: '.customer1',
      translateX: [
        { value: [250, 27], duration: 500, delay: 500, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer2',
      translateX: [
        { value: [250, 19], duration: 500, delay: 1100, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer3',
      translateX: [
        { value: [250, 13], duration: 500, delay: 1700, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer4',
      translateX: [
        { value: [250, 6], duration: 500, delay: 2100, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });

    anime({
      targets: '.customer5',
      translateX: [
        { value: [250, 0], duration: 500, delay: 2600, direction: 'reverse' },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: false,
    });
  }


}


// Animacion de las estrellas de clientes satisfechos

const starsAnimation = () => {
  anime({
    targets: '.star1',
    scaleX: [
      { value: [0, 1], duration: 500, delay: 500, direction: 'reverse' },
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: false
  });

  anime({
    targets: '.star2',
    scaleX: [
      { value: [0, 1], duration: 500, delay: 1100, direction: 'reverse' },
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: false
  });

  anime({
    targets: '.star3',
    scaleX: [
      { value: [0, 1], duration: 500, delay: 1700, direction: 'reverse' },
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: false
  });

  anime({
    targets: '.star4',
    scaleX: [
      { value: [0, 1], duration: 500, delay: 2100, direction: 'reverse' },
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: false
  });

  anime({
    targets: '.star5',
    scaleX: [
      { value: [0, 1], duration: 500, delay: 2600, direction: 'reverse' },
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: false,
    complete: satisfieddCustomers
  });
}


// Animacion de clientes satisfechos

const satisfieddCustomers = () => {
  const element = document.getElementById('satisfied-text');
  element.style.opacity = 1;
  element.classList.add('animate__animated');
  element.classList.add('animate__fadeInUp');
}

// Animaciones de los ejemplos de aplicaciones
const animatedDivs = document.querySelectorAll('.animate-app-exp');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scaleUpAnimation(entry.target)
    }
  });
});

const scaleUpAnimation = (target) => {
  anime({
    targets: target,
    scale: [0, 1],
    duration: 1000,
    easing: 'easeOutQuad'
  });
};

animatedDivs.forEach(div => observer.observe(div));