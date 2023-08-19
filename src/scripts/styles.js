console.log(`styles.js loaded`)

const styles = [
  {
    key: "clr",
    name: "Colours",
    min: 0,
    max: 0,
    useVar: true,
    properties: [
      {
        key: "text",
        name: "Text",
        value: "color",
      },
      {
        key: "bg",
        name: "Backgrounds",
        value: "background-color",
      },
      {
        key: "fill",
        name: "Fills",
        value: "fill",
      },
    ],
    values: [
      {
        key: "primary",
        name: "Primary",
        min: 0,
        max: 900,
        value: "",
      },
      {
        key: "secondary",
        name: "Secondary",
        min: 0,
        max: 900,
        value: "",
      },
      {
        key: "accent-1",
        name: "Accent 1",
        min: 0,
        max: 900,
        value: "",
      },
      {
        key: "gray",
        name: "Gray",
        min: 0,
        max: 1000,
        value: "",
      },
    ],
  },
  {
    key: "ff",
    name: "Font Families",
    min: 0,
    max: 0,
    useVar: true,
    properties: [
      {
        key: "ff",
        name: "Font Family",
        value: "font-family",
      },
    ],
    values: [
      {
        key: "primary",
        name: "Primary",
        min: 0,
        max: 0,
        value: "primary",
      },
      {
        key: "secondary",
        name: "Secondary",
        min: 0,
        max: 0,
        value: "secondary",
      },
      {
        key: "monospace",
        name: "Monospace",
        min: 0,
        max: 0,
        value: "monospace",
      },
    ],
  },
  {
    key: "fz",
    name: "Font Sizes",
    min: 0,
    max: 1000,
    useVar: true,
    properties: [
      {
        key: "fz",
        name: "Font Size",
        value: "font-size",
      },
    ],
    values: [],
  },
  {
    key: "fw",
    name: "Font Weights",
    min: 0,
    max: 0,
    useVar: true,
    properties: [
      {
        key: "ff",
        name: "Font Weights",
        value: "font-weight",
      },
    ],
    values: [
      {
        key: "thin",
        name: "Thin",
        min: 0,
        max: 0,
        value: "thin",
      },
      {
        key: "extra-light",
        name: "Extra Light",
        min: 0,
        max: 0,
        value: "extra-light",
      },
      {
        key: "light",
        name: "Light",
        min: 0,
        max: 0,
        value: "light",
      },
      {
        key: "medium",
        name: "Medium",
        min: 0,
        max: 0,
        value: "medium",
      },
      {
        key: "semi-bold",
        name: "Semi-bold",
        min: 0,
        max: 0,
        value: "semi-bold",
      },
      {
        key: "bold",
        name: "Bold",
        min: 0,
        max: 0,
        value: "bold",
      },
      {
        key: "extra-bold",
        name: "Extra Bold",
        min: 0,
        max: 0,
        value: "extra-bold",
      },
      {
        key: "black",
        name: "Black",
        min: 0,
        max: 0,
        value: "black",
      },
    ],
  },
]
