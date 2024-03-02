import Image from 'next/image'
import { useMemo } from 'react'

type IconNameEnum = 'alert' | 'close'
type DefaultSizeEnum = 'sm' | 'md' | 'lg'

const SIZE_SM = 12
const SIZE_MD = 22
const SIZE_LG = 32

type Props = {
  size: DefaultSizeEnum
  name: IconNameEnum
}

const Icon = ({ size, name }: Props) => {
  const iconSize = useMemo(() => {
    return sizeToPx(size)
  }, [size])

  return <Image width={iconSize} height={iconSize} src={`/images/icons/${name}.svg`} alt={name} />
}

export default Icon

function sizeToPx(size: Props['size']): number {
  switch (size) {
    case 'sm':
      return SIZE_SM
    case 'md':
      return SIZE_MD
    case 'lg':
      return SIZE_LG
  }
}
