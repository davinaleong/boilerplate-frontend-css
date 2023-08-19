console.log(`generator.js loaded`)

const STEP = 100

const dataElementAttr = `data-element`
const outputEl = document.querySelector(`[${dataElementAttr}="output"]`)

const initialCss = `/* Helpers - Misc Classes */
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

.flow > * + * {
  --_flow-spacer: var(--size-v-400);

  margin-top: var(--_flow-spacer);
}

.width-100 {
  width: 100%;
}

.height-100 {
  height: 100%;
}

.width-full {
  width: 100vw;
}

.height-full {
  min-height: 100vh;
}

/* Helpers - List Classes */
.list {
  --_list-spacer: var(--size-v-400);
  margin-left: var(--_list-spacer);
}

ul.list {
  list-style: disc;
}

ol.list {
  list-style: decimal;
}
`

if (outputEl) {
  let html = initialCss

  styles.forEach(function (style, styleIndex) {
    html += `/* ${styleIndex + 1}. ${style.name} Styles */
    `

    style.properties.forEach(function (property) {
      if (style.max > style.min) {
        for (let i = style.min; i <= style.max; ++i) {
          if (i % STEP === 0) {
            html += `
              .${style.key}-${i} {
                ${property.value}: var(--${style.key}-${i});
              }
            `
          }
        }
      }

      style.values.forEach(function (value, valueIndex) {
        html += `/* ${styleIndex + 1}.${valueIndex + 1}. ${value.name} ${
          style.name
        } */
        `

        if (value.max > value.min) {
          for (let i = value.min; i <= value.max; ++i) {
            if (i % STEP === 0) {
              html += `
                .${property.key}-${value.key}-${i} {
                  ${property.value}: var(--${style.key}-${value.key}-${i});
                }
              `
            }
          }
        }

        if (value.value !== "") {
          const val = style.useVar
            ? `var(--${style.key}-${value.key})`
            : value.value
          html += `
            .${property.key}-${value.key} {
              ${property.value}: ${val};
            }
          `
        }
      })
    })
  })

  outputEl.innerHTML = html
}
