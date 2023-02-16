# clamp calc

[View live](https://clamp-calc.netlify.app/)

<br>

![A screenshot of the clamp calc website](src/images/clamp-calc-16by9.png)

<br>
<br>

## Description

Clamp Calc is a tool for generating clamp CSS functions.
<br />
<br />
This app allows users to specify the minimum and maximum sizes for their elements, as well as the minimum and maximum viewport widths. Using these parameters, the app generates a CSS clamp function that ensures the element scales dynamically with the viewport width.
<br />
<br />
<br />

## Table of Contents

- [FAQ](#faq)
- [How to use](#how-to-use)
- [Links](#links)
- [Contact](#contact)

<br />
<br />

## FAQ

### What is the CSS Clamp function?

The clamp() function is a CSS function that allows you to set a value that falls between a minimum and maximum value, and which can change dynamically based on the viewport size. The clamp() function takes three arguments:

    `clamp(minimum, preferred, maximum)`

- `minimum`: the smallest value that the output of the `clamp()` function can be. If the preferred size value is smaller than the minimum size value, then the output will be set to the minimum size value.
- `preferred`: the value that will be used if it falls within the range defined by the minimum and maximum size values.
- `maximum`: the largest value that the output of the `clamp()` function can be. If the preferred size value is larger than the maximum size value, then the output will be set to the maximum size value.

<br />

The `clamp()` function returns the `preferred` value if it is between `minimum` and `maximum`.

<br />

For example, you can use the `clamp()` function to set the font-size of an element to a value that changes dynamically based on the viewport width, but that never falls below a set minimum or goes above a set maximum:

    `font-size: clamp(1rem, 5.33vw, 3rem);`

In this example, the font size will be `1rem` if the viewport width is very small, it will be `5.33vw` (5.33% of the viewport width) if the viewport width is between `300px` and `900px`, and it will be `3rem` if the viewport width is greater than `900px`. This allows you to create responsive layouts that adjust to different screen sizes and ensure that text remains readable and accessible across different devices.

<br />
<br />

### Why did I make this tool?

The CSS clamp function is one of my favorite ways to add responsive sizing. It allows me to specify the size of an element at all possible screen sizes in a single line of CSS.
<br />
<br />
However, it can be challenging to quickly determine the preferred value. The options are to either make guesses and adjustments, or find and use a calculator or tool online.
<br />
<br />
The calculations aren't very straightforward and the online tools can be difficult to find and use. This is my attempt at building a simple but effective tool without the distractions of irrelevant information and advertisements.

<br />
<br />

### How is the preferred value calculated?

The formula uses the concept of linear interpolation, which is based on the equation of a straight line, `y = mx + b`.
<br />
<br />
`y` = `yAxisIntersection`
<br />
`m` = `slope`
<br />
`x` = `minVW`
<br />
`b` = `minSize`

<br />

The inputs set the following values:

`minSize`: minimum size value of element
<br />
`maxSize`: maximum size value of element
<br />
`minVW`: minimum viewport width
<br />
`maxVW`: maximum viewport width
<br />

\*Note that all values must be of the same unit. For my app, I have converted all values to `rem`

<br />

Here's how the preferred value is calculated in steps:

`slope` = (`maxSize` - `minSize`) / (`maxVW` - `minVW`)
<br />
`yAxisIntersection` = -`minVW` \* `slope` + `minSize`
<br />
`preferred` = `yAxisIntersection` rem + (`slope` \* 100)vw

<br />

Here's the complete CSS clamp function:

clamp(`minSize`, `preferred`, `maxSize`);
<br />

<br />
<br />

### What challenges are there in building this project?

Similar to other projects, the biggest challenge for me personally was finding the right balance between making improvements and getting something complete. In the past I've found myself taking a long time, or never even finishing a project, all in the pursuit of perfection or "one more thing."
<br />
<br />
So instead for this project, I made an effort to just get everything working before a self-imposed deadline, then focus on making improvements over time.
<br />
<br />
<br />
<b>Challenges specific to this project:</b>
<br />
<br />
<b>Type related errors</b>
<br />
There were a few bugs that I found related to different types. For example, when writing event handlers I learned that `event.target.value` was of type `string` when I was expecting an `integer`. Fixing this was as simple as using `event.target.valueAsNumber` instead. In the future, I'm planning on implementing TypeScript to gain experience as well as prevent type related errors in the future.
<br />
<br />
<b>Handling inputs</b>
<br />
Forms and inputs can be tricky and there's still some work do be done in order to solve a few bugs. I encountered `NaN` related errors when any of the inputs were empty, and my quick fix was to use `0` as a value instead of the empty value. This causes some unexpected / undesired behavior, such as moving the cursor or an unnecessary leading 0 in front of numbers.
<br />
<br />
<b>Decimals and Floats</b>
<br />
Some of the math involved involves numbers that produce rounding errors due to the way that JavaScript handles numbers. I addressed these bugs by rounding different values at different steps. This was acceptable to me because the math does not need to be precise to an extreme degree.
<br />
<br />
<br />

### What's next / to do?

<b>Bugs & Improvements</b>

- Improve inputs
- Error handling
- Can't input decimals
- Flash of unstyled content on first load
- Implement TypeScript

<br />

<b>Features</b>

- Add ability to change units from `rem` to `px`

<br />
<br />

## How to use

<b>Min Size:</b>
<br />
Set minimum size of element in `rem`
<br />
<br />
<b>Max Size:</b>
<br />
Set maximum size of element in `rem`
<br />
<br />
<b>Min VW:</b>
<br />
Set viewport width that **Min Size** will be below
<br />
<br />
<b>Max VW:</b>
<br />
Set viewport width that **Max Size** will be below
<br />
<br />
<br />

## Links

- [View live](https://clamp-calc.netlify.app)

<br>

## Contact

- [Portfolio - andrewdent.dev](https://andrew@andrewdent.dev)
- [Email - andrew@andrewdent.dev](mailto:andrew@andrewdent.dev)
- [GitHub - @andentx](https://github.com/andentx)
- [LinkedIn - Andrew Dent](https://www.linkedin.com/in/andrewdentdev/)
- [Twitter - @andentx](https://twitter.com/andentx)
