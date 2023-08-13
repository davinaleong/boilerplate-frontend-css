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

  styles.forEach(function ({
    id,
    name,
    key,
    keys,
    min,
    max,
    useVar,
    value,
    values,
  }) {
    html += `/* Helpers - ${name} Classes */`

    if (id === "clr" && keys.length > 0) {
      keys.forEach(function (key) {
        values.forEach(function (value) {
          value.values.forEach(function (valueValue) {
            html += `
              .${key.id}-${value.key}-${valueValue.id} {
                ${key.key}: var(--${id}-${value.key}-${valueValue.key});
              }
            `
          })

          if (value.max > value.min) {
            for (let i = STEP; i <= value.max; ++i) {
              if (i % STEP === 0) {
                html += `
                  .${key.id}-${value.key}-${i} {
                    ${key.key}: var(--${id}-${value.key}-${i});
                  }
                `
              }
            }
          }
        })
      })
    } else if ((id === "f" || id === "v") && max > min) {
      keys.forEach(function (keyKey) {
        if (values.length > 0) {
          values.forEach(function (value) {
            html += `
              .${keyKey.id}-${id}-${value.id} {
                ${keyKey.key}-left: var(--${key}-${id}-${value.id});
                ${keyKey.key}-right: var(--${key}-${id}-${value.id});
                ${keyKey.key}-top: var(--${key}-${id}-${value.id});
                ${keyKey.key}-bottom: var(--${key}-${id}-${value.id});
              }

              .${keyKey.id}-${id}-x-${value.id} {
                ${keyKey.key}-left: var(--${key}-${id}-${value.id});
                ${keyKey.key}-right: var(--${key}-${id}-${value.id});
              }

              .${keyKey.id}-${id}-y-${value.id} {
                ${keyKey.key}-top: var(--${key}-${id}-${value.id});
                ${keyKey.key}-bottom: var(--${key}-${id}-${value.id});
              }

              .${keyKey.id}-${id}-inline-${value.id} {
                ${keyKey.key}-inline-start: var(--${key}-${id}-${value.id});
                ${keyKey.key}-inline-end: var(--${key}-${id}-${value.id});
              }

              .${keyKey.id}-${id}-block-${value.id} {
                ${keyKey.key}-block-start: var(--${key}-${id}-${value.id});
                ${keyKey.key}-block-end: var(--${key}-${id}-${value.id});
              }

              .${keyKey.id}-${id}-l-${value.id} {
                ${keyKey.key}-left: var(--${key}-${id}-${value.id});
              }

              .${keyKey.id}-${id}-r-${value.id} {
                ${keyKey.key}-right: var(--${key}-${id}-${value.id});
              }

              .${keyKey.id}-${id}-t-${value.id} {
                ${keyKey.key}-top: var(--${key}-${id}-${value.id});
              }

              .${keyKey.id}-${id}-b-${value.id} {
                ${keyKey.key}-bottom: var(--${key}-${id}-${value.id});
              }
            `
          })
        }

        if (max > min) {
          for (let i = STEP; i <= max; ++i) {
            if (i % STEP === 0) {
              html += `
              .${keyKey.id}-${id}-${i} {
                ${keyKey.key}-left: var(--${key}-${id}-${i});
                ${keyKey.key}-right: var(--${key}-${id}-${i});
                ${keyKey.key}-top: var(--${key}-${id}-${i});
                ${keyKey.key}-bottom: var(--${key}-${id}-${i});
              }

              .${keyKey.id}-${id}-x-${i} {
                ${keyKey.key}-left: var(--${key}-${id}-${i});
                ${keyKey.key}-right: var(--${key}-${id}-${i});
              }

              .${keyKey.id}-${id}-y-${i} {
                ${keyKey.key}-top: var(--${key}-${id}-${i});
                ${keyKey.key}-bottom: var(--${key}-${id}-${i});
              }

              .${keyKey.id}-${id}-inline-${i} {
                ${keyKey.key}-inline-start: var(--${key}-${id}-${i});
                ${keyKey.key}-inline-end: var(--${key}-${id}-${i});
              }

              .${keyKey.id}-${id}-block-${i} {
                ${keyKey.key}-block-start: var(--${key}-${id}-${i});
                ${keyKey.key}-block-end: var(--${key}-${id}-${i});
              }

              .${keyKey.id}-${id}-l-${i} {
                ${keyKey.key}-left: var(--${key}-${id}-${i});
              }

              .${keyKey.id}-${id}-r-${i} {
                ${keyKey.key}-right: var(--${key}-${id}-${i});
              }

              .${keyKey.id}-${id}-t-${i} {
                ${keyKey.key}-top: var(--${key}-${id}-${i});
              }

              .${keyKey.id}-${id}-b-${i} {
                ${keyKey.key}-bottom: var(--${key}-${id}-${i});
              }
            `
            }
          }
        }
      })
    } else {
      if (values.length > 0) {
        values.forEach(function (value) {
          const valueHtml = useVar ? `var(--${id}-${value.id})` : value.key

          html += `
            .${id}-${value.id} {
              ${key}: ${valueHtml};
            }
          `
        })
      }

      if (max > min) {
        for (let i = STEP; i <= max; ++i) {
          if (i % STEP === 0) {
            html += `
              .${id}-${i} {
                ${key}: var(--${id}-${i});
              }
            `
          }
        }
      }
    }
  })

  outputEl.innerHTML = html
}
