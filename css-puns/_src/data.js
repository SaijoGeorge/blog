const puns = [
  {
    title: "Titanic",
    slug: "titanic",
    color: "#0073ff",
    code: `
#titanic {
  float: none;
}
`
  },
  {
    title: "Bermuda Triangle",
    slug: "bermuda-triangle",
    color: "#006375",
    code: `
#bermuda-triangle {
  display: none;
}
`
  },
  {
    title: "Invisibility Cloak - Harry Potter",
    slug: "invisibility-cloak-harry-potter",
    color: "#fab319",
    fontSize: 12,
    customFigureStyles: `
      z-index: 1;

      &::after {
        margin-bottom: 0;
      }
    `,
    code: `
.invisibility-cloak + #harry-potter {
  visibility: hidden;
}

.invisibility-cloak + #mad-eye-moody {
  visibility: visible !important;
}
`
  },
  {
    title: "USA + Mexico",
    slug: "usa-mexico",
    color: "#ff6759",
    code: `
#usa + #mexico {
  border: 1px dashed;
}
`
  },
  {
    title: "USA Trump + Mexico",
    slug: "usa-mexico-trump",
    color: "#ff6759",
    code: `
#usa[data-president~=Trump] + #mexico {
  border: 30ft solid;
}
`
  },
  {
    title: "Europe Country",
    slug: "europe-country",
    color: "#4fa8ff",
    code: `
#europe .country:not(.uk) {
  border: none;
}
`
  },
  {
    title: "China Wall",
    slug: "china-wall",
    color: "#33691E",
    code: `
#china {
  border-top-style: solid;
}
`
  },
  {
    title: "Sniper Mode Engaged",
    slug: "sniper-mode-engaged",
    color: "#9CCC65",
    code: `
.sniper-mode-engaged {
  cursor: crosshair;
}
`
  },
  {
    title: "Bambis Mom",
    slug: "bambis-mom",
    color: "#054f47",
    code: `
.bambis-mom {
  cursor: crosshair; 
  orphans: 1; 
}
`
  },
  {
    title: "Periodic Table",
    slug: "periodic-table",
    color: "#4DB6AC",
    code: `
#periodic {
  display: table;
}
`
  },
  {
    title: "Before Big Bang",
    slug: "before-big-bang",
    color: "#5C6BC0",
    code: `
#big-bang::before {
  content: "";
}
`
  },
  {
    title: "Chuck Norris",
    slug: "chuck-norris",
    color: "#BADA55",
    code: `
#chuck-norris {
  color: #BADA55;
}
`
  },
  {
    title: "NSA",
    slug: "nsa",
    color: "#00838F",
    code: `
#nsa {
  opacity: 1;
}
`
  },
  {
    title: "Tower of Pisa",
    slug: "tower-of-pisa",
    color: "#68ABE3",
    code: `
#tower-of-pisa {
  font-style: italic;
}
`
  },
  {
    title: "Australia",
    slug: "australia",
    color: "#00008B",
    code: `
#australia {
  transform: rotateY(180deg);
}
`
  },
  {
    title: "Bruce Banner",
    slug: "bruce-banner",
    color: "#944f2d",
    code: `
.bruce-banner {
  color: pink;
  transition: color 10s;
}

.bruce-banner.the-hulk {
  color: green;
}
`
  },
  {
    title: "Oliver Queen",
    slug: "oliver-queen",
    color: "#33691E",
    code: `
.oliver-queen {
  cursor: arrow;
}
`
  },
  {
    title: "Ninja",
    slug: "ninja",
    color: "#222",
    code: `
.ninja {
  visibility: hidden;
  color: black;
}
`
  },
  {
    title: "Leprechaun",
    slug: "leprechaun",
    color: "#1B5E20",
    code: `
.leprechaun {
  height: 20%; 
  color: green; 
  display: none; 
}
`
  },
  {
    title: "Infinity Edge Pools",
    slug: "infinity-edge-pools",
    color: "#1D3880",
    code: `
.infinity-edge-pools {
  overflow: hidden;
}
`
  },
  {
    title: "Obese",
    slug: "obese",
    color: "#ff5025",
    code: `
.obese {
  width: 200%;
  overflow: visible;
}
`
  },
  {
    title: "Muscles",
    slug: "muscles",
    color: "#C2185B",
    code: `
#muscles {
  display: flex;
}
`
  },
  {
    title: "Religious Upbringing",
    slug: "religious-upbringing",
    color: "#424242",
    code: `
.religious-upbringing {
  perspective: inherit;
}
`
  },
  {
    title: "Yomama",
    slug: "yomama",
    color: "#572C70",
    code: `
.yomama {
  width: 99999999px;
}
`
  },
  {
    title: "Wife",
    slug: "wife",
    color: "#EF5350",
    code: `
.wife {
  right: 100%;
  margin: 0%;
}
`
  },
  {
    title: "Lego",
    slug: "lego",
    color: "#DD1A21",
    code: `
#lego {
  display: block;
}
`
  },
  {
    title: "Hobbit",
    slug: "hobbit",
    color: "#33691E",
    code: `
.hobbit {
  height: 50%;
}

.hobbit #foot {
  width: 200%;
}
`
  },
  {
    title: "Delorean",
    slug: "delorean",
    color: "#1565C0",
    code: `
.delorean {
  z-index: -1955;
}
`
  },
  {
    title: "Fear",
    slug: "fear",
    color: "#FF7043",
    author: "@_tattoosa",
    code: `
.fear {
  display: none;
}
`
  },
  {
    title: "USA > Marijuana Laws",
    slug: "usa-marijuana-laws",
    color: "#43A047",
    code: `
.usa > .marijuana-laws {
  .federal {
    cursor: not-allowed !important;
    .state {
      cursor: wait;
      &.AK, &.CA, &.CO, &.ME, &.MA, &.NV, &.OR, &.WA {
        cursor: progress;
      }
    }
  }
}
`
  },
  {
    title: "Single Lane Road",
    slug: "single-lane-road",
    color: "#111",
    code: `
.single-lane-road {
  width: auto;
}
`
  },
  {
    title: "Samsung",
    slug: "samsung",
    color: "#002552",
    author: "@kasperoo",
    code: `
.samsung {
  @extend apple;
}
`
  },
  {
    title: "RIP",
    slug: "rip",
    color: "#222",
    code: `
#rip {
  bottom: -6912px;
  /* 6912px = 6 feet */
}
`
  },
  {
    title: "Defibrillator",
    slug: "defibrillator",
    color: "#0277BD",
    code: `
.defibrillator {
  clear: both;
}
`
  },
  {
    title: "Illuminati",
    slug: "illuminati",
    color: "#9CCC65",
    code: `
.illuminati {
  position: absolute;
  visibility: hidden;
}
`
  },
  {
    title: "Government",
    slug: "government",
    color: "#873894",
    code: `
.government {
  transition: all 4yr ease-out;
}
`
  },
  {
    title: "Autobots",
    slug: "autobots",
    color: "#d32f2f",
    code: `
#autobots {
  transform: translate3d();
}
`
  },
  {
    title: "Ikea",
    slug: "ikea",
    color: "#005E9D",
    code: `
#ikea {
  display: table;
}
`
  },
  {
    title: "Moses Sea",
    slug: "moses-sea",
    color: "#00838F",
    code: `
#moses > #sea {
  column-count: 2; 
}
`
  },
  {
    title: "Gangsta Rap",
    slug: "gangsta-rap",
    color: "#546E7A",
    code: `
.gangsta-rap {
  word-spacing: 0;
}
`
  },
  {
    title: "Rich People",
    slug: "rich-people",
    color: "#222",
    code: `
.rich-people {
  top: 1%;
}

.working-class {
  bottom: 99%;
}
`
  },
  {
    title: "Monarch",
    slug: "monarch",
    color: "#D32F2F",
    code: `
.monarch {
  position: inherit;
}
`
  },
  {
    title: "Ghost",
    slug: "ghost",
    color: "#00796B",
    code: `
.ghost {
  opacity: 0.1;
  pointer-events: none;
}
`
  },
  {
    title: "Steamy Glasses",
    slug: "steamy-glasses",
    color: "#F57F17",
    author: "@rob_gill_",
    code: `
.glasses-lenses {
  clear: both;
  animation: wipe 5s;
}

.glasses-lenses:after {
  image-rendering: optimizeQuality;
}
`
  }
]

const punIndex = punObject => puns.indexOf(punObject)

const punFromSlug = punSlug =>
  punSlug ? puns.filter(pun => pun.slug === punSlug)[0] : puns[0]

const punFromIndex = punIndex => puns[punIndex]

module.exports = {
  puns,
  punIndex,
  punFromSlug,
  punFromIndex
}
