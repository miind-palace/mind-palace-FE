import { HTMLAttributes, memo } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never
  direction?: SpacingDirectionType
  size: number
}

const Spacing = ({ direction = 'vertical', size, ...props }: Props) => {
  return (
    <div
      style={{
        flex: 'none',
        width: direction === SpacingDirection.horizontal ? `${size}px` : undefined,
        height: direction === SpacingDirection.vertical ? `${size}px` : undefined,
      }}
      {...props}
    />
  )
}

export default memo(Spacing)

export const SpacingDirection = {
  horizontal: 'horizontal',
  vertical: 'vertical',
}

export type SpacingDirectionType = keyof typeof SpacingDirection
