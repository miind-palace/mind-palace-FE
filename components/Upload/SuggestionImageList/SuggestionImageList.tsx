import { ImagesTypes } from '@/hooks/useCreateSuggestionImage'
import useHorizontalWheel from '@/hooks/useHorizontalWheel'
import Image from 'next/image'
import { SuggestionImageListContainer, SuggestionImageWrapper } from './SuggestionImageList.style'
import FlippingLoader from '@/components/common/Loader/FlippingLoader'

interface SuggestionImageListProps {
  images: ImagesTypes[]
  isLoading: boolean
  onClickSuggestionImage: ([file, imageUrl]: ImagesTypes) => void
}

const SuggestionImageList = ({ images, isLoading, onClickSuggestionImage }: SuggestionImageListProps) => {
  const { wheelRef, onWheelHandler } = useHorizontalWheel()

  return (
    <SuggestionImageListContainer ref={wheelRef} onWheel={onWheelHandler}>
      {images[0] ? (
        <SuggestionImageWrapper>
          {images.map((el) => (
            <div key={el[1]} className="requestImage__box">
              <Image
                src={el[1]}
                alt="추천 이미지"
                width={100}
                height={100}
                className="requestImage__item"
                onClick={() => onClickSuggestionImage(el)}
              />
              {isLoading && <FlippingLoader size={30} />}
            </div>
          ))}
        </SuggestionImageWrapper>
      ) : (
        <SuggestionImageWrapper>
          {new Array(8).fill('DUMMY').map((el, idx) => (
            <>
              <div key={`${el}-${idx}`} className="requestImage__item">
                {isLoading && <FlippingLoader size={30} />}
              </div>
            </>
          ))}
        </SuggestionImageWrapper>
      )}
    </SuggestionImageListContainer>
  )
}

export default SuggestionImageList
