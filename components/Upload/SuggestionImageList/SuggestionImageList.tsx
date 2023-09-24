import { ImagesTypes } from '@/hooks/useCreateSuggestionImage'
import useHorizontalWheel from '@/hooks/useHorizontalWheel'
import Image from 'next/image'
import { SuggestionImageListContainer, SuggestionImageWrapper } from './SuggestionImageList.style'

interface SuggestionImageListProps {
  images: ImagesTypes[]
  onClickSuggestionImage: ([file, imageUrl]: ImagesTypes) => void
}

const SuggestionImageList = ({ images, onClickSuggestionImage }: SuggestionImageListProps) => {
  const { wheelRef, onWheelHandler } = useHorizontalWheel()

  return (
    <SuggestionImageListContainer ref={wheelRef} onWheel={onWheelHandler}>
      {images[0] ? (
        <SuggestionImageWrapper>
          {images.map((el) => (
            <Image
              key={el[1]}
              src={el[1]}
              alt="추천 이미지"
              width={100}
              height={100}
              className="requestImage__item"
              onClick={() => onClickSuggestionImage(el)}
            />
          ))}
        </SuggestionImageWrapper>
      ) : (
        <SuggestionImageWrapper>
          {new Array(8).fill(null).map((el) => (
            <div key={el} className="requestImage__item" />
          ))}
        </SuggestionImageWrapper>
      )}
    </SuggestionImageListContainer>
  )
}

export default SuggestionImageList
