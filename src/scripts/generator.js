console.log(`generator.js loaded`)

const dataElementAttr = `data-element`
const outputEl = document.querySelector(`[${dataElementAttr}="output"]`)

const initialCss = `
:root {
  --clr-primary-50: hsl(231, 44%, 94%);
  --clr-primary-100: hsl(232, 45%, 84%);
  --clr-primary-200: hsl(231, 44%, 74%);
  --clr-primary-300: hsl(230, 44%, 64%);
  --clr-primary-400: hsl(231, 44%, 56%);
  --clr-primary-500: hsl(231, 48%, 48%);
  --clr-primary-600: hsl(232, 50%, 45%);
  --clr-primary-700: hsl(232, 54%, 41%);
  --clr-primary-800: hsl(233, 57%, 37%);
  --clr-primary-900: hsl(235, 66%, 30%);

  --clr-secondary-50: hsl(205, 87%, 94%);
  --clr-secondary-100: hsl(207, 89%, 86%);
  --clr-secondary-200: hsl(207, 90%, 77%);
  --clr-secondary-300: hsl(207, 89%, 68%);
  --clr-secondary-400: hsl(207, 90%, 61%);
  --clr-secondary-500: hsl(207, 90%, 54%);
  --clr-secondary-600: hsl(208, 79%, 51%);
  --clr-secondary-700: hsl(210, 79%, 46%);
  --clr-secondary-800: hsl(212, 80%, 42%);
  --clr-secondary-900: hsl(216, 85%, 34%);

  --clr-accent-1-50: hsl(37, 100%, 94%);
  --clr-accent-1-100: hsl(36, 100%, 85%);
  --clr-accent-1-200: hsl(36, 100%, 75%);
  --clr-accent-1-300: hsl(36, 100%, 65%);
  --clr-accent-1-400: hsl(36, 100%, 57%);
  --clr-accent-1-500: hsl(36, 100%, 50%);
  --clr-accent-1-600: hsl(33, 100%, 49%);
  --clr-accent-1-700: hsl(30, 100%, 48%);
  --clr-accent-1-800: hsl(27, 100%, 47%);
  --clr-accent-1-900: hsl(21, 100%, 45%);

  --clr-gray-50: hsl(0, 0%, 100%);
  --clr-gray-100: hsl(0, 0%, 90%);
  --clr-gray-200: hsl(0, 0%, 80%);
  --clr-gray-300: hsl(0, 0%, 70%);
  --clr-gray-400: hsl(0, 0%, 60%);
  --clr-gray-500: hsl(0, 0%, 50%);
  --clr-gray-600: hsl(0, 0%, 40%);
  --clr-gray-700: hsl(0, 0%, 30%);
  --clr-gray-800: hsl(0, 0%, 20%);
  --clr-gray-900: hsl(0, 0%, 10%);
  --clr-gray-1000: hsl(0, 0%, 0%);

  --ff-primary: Inter, Arial, Helvetica, sans-serif;
  --ff-secondary: "Playfair Display", "Times New Roman", Times, serif;
  --ff-monospace: Inconsolata, "Courier New", Courier, monospace;

  --fz-0: 0;
  --fz-50: 0.4rem;
  --fz-100: 0.6rem;
  --fz-200: 0.8rem;
  --fz-300: 0.9rem;
  --fz-400: 1rem;
  --fz-500: 1.5rem;
  --fz-600: 2rem;
  --fz-700: 3rem;
  --fz-800: 5rem;
  --fz-900: 8rem;

  --fw-thin: 100;
  --fw-extra-light: 200;
  --fw-light: 300;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semi-bold: 600;
  --fw-bold: 700;
  --fw-extra-bold: 800;
  --fw-black: 900;

  --fs-normal: normal;
  --fs-italic: italic;
  --fs-oblique: oblique;

  --size-f-0: 0rem;
  --size-f-50: 0.1rem;
  --size-f-100: 0.2rem;
  --size-f-200: 0.5rem;
  --size-f-300: 0.75rem;
  --size-f-400: 1rem;
  --size-f-500: 1.5rem;
  --size-f-600: 2rem;
  --size-f-700: 3rem;
  --size-f-800: 4rem;
  --size-f-900: 6rem;
  --size-f-1000: 9rem;

  --size-v-0: 0em;
  --size-v-50: 0.1em;
  --size-v-100: 0.2em;
  --size-v-200: 0.5em;
  --size-v-300: 0.75em;
  --size-v-400: 1em;
  --size-v-500: 1.5em;
  --size-v-600: 2em;
  --size-v-700: 3em;
  --size-v-800: 4em;
  --size-v-900: 6em;
  --size-v-1000: 9em;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.list-style-none {
  list-style: none;
}
`

if (outputEl) {
  const { colours, fontFamilies, fontSizes, fontWeights, sizes } = styles

  let html = initialCss

  colours.forEach(function ({ key, min, max, otherValues }) {
    otherValues.forEach(function (otherValue) {
      html += `
        .text-${key}-${otherValue.key} {
          color: var(--clr-${key}-${otherValue.key});
        }

        .bg-${key}-${otherValue.key} {
          color: var(--clr-${key}-${otherValue.key});
        }

        .fill-${key}-${otherValue.key} {
          fill: var(--clr-${key}-${otherValue.key});
        }
      `
    })

    for (let i = 100; i <= max; i++) {
      if (i % 100 === 0) {
        html += `
          .text-${key}-${i} {
            color: var(--clr-${key}-${i});
          }

          .bg-${key}-${i} {
            color: var(--clr-${key}-${i});
          }

          .fill-${key}-${i} {
            fill: var(--clr-${key}-${i});
          }
        `
      }
    }
  })

  fontFamilies.forEach(function ({ key }) {
    html += `
      .ff-${key} {
        font-family: var(--ff-${key});
      }
    `
  })

  fontSizes.forEach(function ({ key, min, max, otherValues }) {
    otherValues.forEach(function ({ key }) {
      html += `
        .fz-${key} {
          font-size: var(--fz-${key});
        }
      `
    })

    for (let i = 100; i <= max; i++) {
      if (i % 100 === 0) {
        html += `
          .fz-${i} {
            font-size: var(--fz-${i});
          }
        `
      }
    }
  })

  fontWeights.forEach(function ({ key }) {
    html += `
      .fw-${key} {
        font-weight: var(--fw-${key});
      }
    `
  })

  sizes.forEach(function ({ key, min, max, otherValues }) {
    // html += `
    //   .size-${key}-m-0 {
    //     margin-top: var(--size-${key}-0);
    //     margin-bottom: var(--size-${key}-0);
    //     margin-left: var(--size-${key}-0);
    //     margin-right: var(--size-${key}-0);
    //   }

    //   .size-${key}-m-x-0 {
    //     margin-left: var(--size-${key}-0);
    //     margin-right: var(--size-${key}-0);
    //   }

    //   .size-${key}-m-y-0 {
    //     margin-left: var(--size-${key}-0);
    //     margin-right: var(--size-${key}-0);
    //   }

    //   .size-${key}-m-50 {
    //     margin-top: var(--size-${key}-50);
    //     margin-bottom: var(--size-${key}-50);
    //     margin-left: var(--size-${key}-50);
    //     margin-right: var(--size-${key}-50);
    //   }

    //   .size-${key}-p-0 {
    //     padding-top: var(--size-${key}-0);
    //     padding-bottom: var(--size-${key}-0);
    //     padding-left: var(--size-${key}-0);
    //     padding-right: var(--size-${key}-0);
    //   }

    //   .size-${key}-p-50 {
    //     padding-top: var(--size-${key}-50);
    //     padding-bottom: var(--size-${key}-50);
    //     padding-left: var(--size-${key}-50);
    //     padding-right: var(--size-${key}-50);
    //   }
    // `
    otherValues.forEach(function (otherValue) {
      const theVar = `var(--size-${key}-${otherValue.key})`

      html += `
        .m-${key}-${otherValue.key} {
          margin-top: ${theVar};
          margin-bottom: ${theVar};
          margin-left: ${theVar};
          margin-right: ${theVar};
        }

        .m-${key}-x-${otherValue.key} {
          margin-left: ${theVar};
          margin-right: ${theVar};
        }

        .m-${key}-y-${otherValue.key} {
          margin-top: ${theVar};
          margin-bottom: ${theVar};
        }

        .m-${key}-t-${otherValue.key} {
          margin-top: ${theVar};
        }

        .m-${key}-b-${otherValue.key} {
          margin-bottom: ${theVar};
        }

        .m-${key}-l-${otherValue.key} {
          margin-left: ${theVar};
        }

        .m-${key}-r-${otherValue.key} {
          margin-right: ${theVar};
        }

        .m-${key}-inline-${otherValue.key} {
          margin-inline-start: ${theVar};
          margin-inline-end: ${theVar};
        }

        .m-${key}-block-${otherValue.key} {
          margin-block-start: ${theVar};
          margin-block-end: ${theVar};
        }

        .m-${key}-inline-start-${otherValue.key} {
          margin-inline-start: ${theVar};
        }

        .m-${key}-inline-end-${otherValue.key} {
          margin-inline-end: ${theVar};
        }

        .m-${key}-block-start-${otherValue.key} {
          margin-block-start: ${theVar};
        }

        .m-${key}-block-end-${otherValue.key} {
          margin-block-end: ${theVar};
        }

        .p-${key}-${otherValue.key} {
          padding-top: ${theVar};
          padding-bottom: ${theVar};
          padding-left: ${theVar};
          padding-right: ${theVar};
        }

        .p-${key}-x-${otherValue.key} {
          padding-left: ${theVar};
          padding-right: ${theVar};
        }

        .p-${key}-y-${otherValue.key} {
          padding-top: ${theVar};
          padding-bottom: ${theVar};
        }

        .p-${key}-t-${otherValue.key} {
          padding-top: ${theVar};
        }

        .p-${key}-b-${otherValue.key} {
          padding-bottom: ${theVar};
        }

        .p-${key}-l-${otherValue.key} {
          padding-left: ${theVar};
        }

        .p-${key}-r-${otherValue.key} {
          padding-right: ${theVar};
        }

        .p-${key}-inline-${otherValue.key} {
          padding-inline-start: ${theVar};
          padding-inline-end: ${theVar};
        }

        .p-${key}-block-${otherValue.key} {
          padding-block-start: ${theVar};
          padding-block-end: ${theVar};
        }

        .p-${key}-inline-start-${otherValue.key} {
          padding-inline-start: ${theVar};
        }

        .p-${key}-inline-end-${otherValue.key} {
          padding-inline-end: ${theVar};
        }

        .p-${key}-block-start-${otherValue.key} {
          padding-block-start: ${theVar};
        }

        .p-${key}-block-end-${otherValue.key} {
          padding-block-end: ${theVar};
        }
      `

      if (otherValue.key !== "auto" && otherValue.key !== "0") {
        html += `
        .m-n-${key}-${otherValue.key} {
          margin-top: calc(${theVar} * -1);
          margin-bottom: calc(${theVar} * -1);
          margin-left: calc(${theVar} * -1);
          margin-right: calc(${theVar} * -1);
        }
        
        .m-n-${key}-x-${otherValue.key} {
          margin-left: calc(${theVar} * -1);
          margin-right: calc(${theVar} * -1);
        }
        
        .m-n-${key}-y-${otherValue.key} {
          margin-top: calc(${theVar} * -1);
          margin-bottom: calc(${theVar} * -1);
        }
        
        .m-n-${key}-t-${otherValue.key} {
          margin-top: calc(${theVar} * -1);
        }
        
        .m-n-${key}-b-${otherValue.key} {
          margin-bottom: calc(${theVar} * -1);
        }
        
        .m-n-${key}-l-${otherValue.key} {
          margin-left: calc(${theVar} * -1);
        }
        
        .m-n-${key}-r-${otherValue.key} {
          margin-right: calc(${theVar} * -1);
        }
        
        .m-n-${key}-inline-${otherValue.key} {
          margin-inline-start: calc(${theVar} * -1);
          margin-inline-end: calc(${theVar} * -1);
        }
        
        .m-n-${key}-block-${otherValue.key} {
          margin-block-start: calc(${theVar} * -1);
          margin-block-end: calc(${theVar} * -1);
        }
        
        .m-n-${key}-inline-start-${otherValue.key} {
          margin-inline-start: calc(${theVar} * -1);
        }
        
        .m-n-${key}-inline-end-${otherValue.key} {
          margin-inline-end: calc(${theVar} * -1);
        }
        
        .m-n-${key}-block-start-${otherValue.key} {
          margin-block-start: calc(${theVar} * -1);
        }
        
        .m-n-${key}-block-end-${otherValue.key} {
          margin-block-end: calc(${theVar} * -1);
        }
        `
      }
    })

    for (let i = 100; i <= max; i++) {
      if (i % 100 === 0) {
        const theVar = `var(--size-${key}-${i})`

        html += `
        .m-${key}-${i} {
          margin-top: ${theVar};
          margin-bottom: ${theVar};
          margin-left: ${theVar};
          margin-right: ${theVar};
        }

        .m-${key}-x-${i} {
          margin-left: ${theVar};
          margin-right: ${theVar};
        }

        .m-${key}-y-${i} {
          margin-top: ${theVar};
          margin-bottom: ${theVar};
        }

        .m-${key}-t-${i} {
          margin-top: ${theVar};
        }

        .m-${key}-b-${i} {
          margin-bottom: ${theVar};
        }

        .m-${key}-l-${i} {
          margin-left: ${theVar};
        }

        .m-${key}-r-${i} {
          margin-right: ${theVar};
        }

        .m-${key}-inline-${i} {
          margin-inline-start: ${theVar};
          margin-inline-end: ${theVar};
        }

        .m-${key}-block-${i} {
          margin-block-start: ${theVar};
          margin-block-end: ${theVar};
        }

        .m-${key}-inline-start-${i} {
          margin-inline-start: ${theVar};
        }

        .m-${key}-inline-end-${i} {
          margin-inline-end: ${theVar};
        }

        .m-${key}-block-start-${i} {
          margin-block-start: ${theVar};
        }

        .m-${key}-block-end-${i} {
          margin-block-end: ${theVar};
        }

        .p-${key}-${i} {
          padding-top: ${theVar};
          padding-bottom: ${theVar};
          padding-left: ${theVar};
          padding-right: ${theVar};
        }

        .p-${key}-x-${i} {
          padding-left: ${theVar};
          padding-right: ${theVar};
        }

        .p-${key}-y-${i} {
          padding-top: ${theVar};
          padding-bottom: ${theVar};
        }

        .p-${key}-t-${i} {
          padding-top: ${theVar};
        }

        .p-${key}-b-${i} {
          padding-bottom: ${theVar};
        }

        .p-${key}-l-${i} {
          padding-left: ${theVar};
        }

        .p-${key}-r-${i} {
          padding-right: ${theVar};
        }

        .p-${key}-inline-${i} {
          padding-inline-start: ${theVar};
          padding-inline-end: ${theVar};
        }

        .p-${key}-block-${i} {
          padding-block-start: ${theVar};
          padding-block-end: ${theVar};
        }

        .p-${key}-inline-start-${i} {
          padding-inline-start: ${theVar};
        }

        .p-${key}-inline-end-${i} {
          padding-inline-end: ${theVar};
        }

        .p-${key}-block-start-${i} {
          padding-block-start: ${theVar};
        }

        .p-${key}-block-end-${i} {
          padding-block-end: ${theVar};
        }

        .m-n-${key}-${i} {
          margin-top: calc(${theVar} * -1);
          margin-bottom: calc(${theVar} * -1);
          margin-left: calc(${theVar} * -1);
          margin-right: calc(${theVar} * -1);
        }
        
        .m-n-${key}-x-${i} {
          margin-left: calc(${theVar} * -1);
          margin-right: calc(${theVar} * -1);
        }
        
        .m-n-${key}-y-${i} {
          margin-top: calc(${theVar} * -1);
          margin-bottom: calc(${theVar} * -1);
        }
        
        .m-n-${key}-t-${i} {
          margin-top: calc(${theVar} * -1);
        }
        
        .m-n-${key}-b-${i} {
          margin-bottom: calc(${theVar} * -1);
        }
        
        .m-n-${key}-l-${i} {
          margin-left: calc(${theVar} * -1);
        }
        
        .m-n-${key}-r-${i} {
          margin-right: calc(${theVar} * -1);
        }
        
        .m-n-${key}-inline-${i} {
          margin-inline-start: calc(${theVar} * -1);
          margin-inline-end: calc(${theVar} * -1);
        }
        
        .m-n-${key}-block-${i} {
          margin-block-start: calc(${theVar} * -1);
          margin-block-end: calc(${theVar} * -1);
        }
        
        .m-n-${key}-inline-start-${i} {
          margin-inline-start: calc(${theVar} * -1);
        }
        
        .m-n-${key}-inline-end-${i} {
          margin-inline-end: calc(${theVar} * -1);
        }
        
        .m-n-${key}-block-start-${i} {
          margin-block-start: calc(${theVar} * -1);
        }
        
        .m-n-${key}-block-end-${i} {
          margin-block-end: calc(${theVar} * -1);
        }
      `
      }
    }
  })

  outputEl.innerHTML = html
}
