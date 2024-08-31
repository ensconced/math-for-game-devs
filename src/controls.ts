// const SPACING_STRATEGIES = [
//   "space-between",
//   "space-around",
//   "space-evenly",
// ] as const satisfies string[];

// export type SPACING_STRATEGY = (typeof SPACING_STRATEGIES)[number];

// const HUB_EDGE_CHOICE_STRATEGIES = [
//   "rightwards",
//   "downwards",
//   "leftwards",
//   "upwards",
//   "opposites",
//   "to-each-their-own",
// ] as const satisfies string[];

// export type HUB_EDGE_CHOICE_STRATEGY =
//   (typeof HUB_EDGE_CHOICE_STRATEGIES)[number];

// const HUB_CONTROL_POINT_STRATEGIES = [
//   "fixed-offset",
//   "proportional",
// ] as const satisfies string[];

// export type HUB_CONTROL_POINT_STRATEGY =
//   (typeof HUB_CONTROL_POINT_STRATEGIES)[number];

// const selectors = {
//   "Spacing strategy": {
//     options: SPACING_STRATEGIES,
//     currentValue: SPACING_STRATEGIES[0] as SPACING_STRATEGY,
//   },
//   "Hub edge choice strategy": {
//     options: HUB_EDGE_CHOICE_STRATEGIES,
//     currentValue: HUB_EDGE_CHOICE_STRATEGIES[0] as HUB_EDGE_CHOICE_STRATEGY,
//   },
//   "Hub control point strategy": {
//     options: HUB_CONTROL_POINT_STRATEGIES,
//     currentValue: HUB_CONTROL_POINT_STRATEGIES[0] as HUB_CONTROL_POINT_STRATEGY,
//   },
// };

// const sliders = {
//   "Hub control point fixed offset": {
//     min: 0,
//     max: 1000,
//     step: 1,
//     currentValue: 200,
//   },
// };

// const controlsContainer = document.getElementById("controls")!;
// Object.entries(selectors).forEach(([title, control]) => {
//   const label = document.createElement("label");
//   label.innerText = title;
//   const selector = document.createElement("select");
//   control.options.forEach((option) => {
//     const optionElement = document.createElement("option");
//     optionElement.value = option;
//     optionElement.innerText = option;
//     selector.appendChild(optionElement);
//   });
//   selector.onchange = (e) => {
//     const target = e.target as HTMLSelectElement;
//     control.currentValue = target.value as typeof control.currentValue;
//   };
//   label.appendChild(selector);
//   controlsContainer.appendChild(label);
// });

// Object.entries(sliders).forEach(([title, control]) => {
//   const label = document.createElement("label");
//   label.innerText = title;
//   const slider = document.createElement("input");
//   const valueSpan = document.createElement("span");
//   slider.setAttribute("type", "range");
//   slider.setAttribute("min", control.min.toString());
//   slider.setAttribute("max", control.max.toString());
//   slider.setAttribute("step", control.step.toString());
//   slider.oninput = (e) => {
//     const target = e.target as HTMLInputElement;
//     control.currentValue = parseFloat(target.value);
//     valueSpan.innerText = control.currentValue.toString();
//   };
//   label.appendChild(slider);
//   label.appendChild(valueSpan);
//   controlsContainer.appendChild(label);
//   slider.value = control.currentValue.toString();
//   valueSpan.innerText = control.currentValue.toString();
// });

// export const controls = { ...selectors, ...sliders };
