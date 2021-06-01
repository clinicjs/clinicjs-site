import { css } from 'styled-components'

const breakpoint = (minWidth, content, props) => {
  return css`
    @media (min-width: ${minWidth}) {
      ${typeof content === 'function' ? content(props) : content};
    }
  `
}

export const breakpointSm = content => props =>
  breakpoint(props.theme.dimension.screen.sm, content, props)

export const breakpointMd = content => props =>
  breakpoint(props.theme.dimension.screen.md, content, props)

export const breakpointLg = content => props =>
  breakpoint(props.theme.dimension.screen.lg, content, props)

export const breakpointXl = content => props =>
  breakpoint(props.theme.dimension.screen.xl, content, props)

const strToNumberAndUnit = str => {
  const number = str.match(/\d+/)
  const unit = str.split(/\d+/).pop() || ''

  if (!number) {
    return {}
  }

  return {
    number: parseFloat(number),
    unit
  }
}

export const divide = (val, divisor) => {
  const { number, unit } = strToNumberAndUnit(val)

  if (!number) {
    return val
  }

  return `${number / divisor}${unit}`
}

export const multiply = (val, multiplier) => {
  const { number, unit } = strToNumberAndUnit(val)

  if (!number) {
    return val
  }

  return `${number * multiplier}${unit}`
}

export const add = (...vals) => {
  const numbersAndUnits = vals.map(strToNumberAndUnit)
  const [{ unit }] = numbersAndUnits
  const total = numbersAndUnits.reduce((acc, cur) => acc + cur.number, 0)

  return `${total}${unit}`
}
