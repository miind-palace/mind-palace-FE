import { Dispatch, SetStateAction } from 'react'
import { Container } from './HelpInfo.style'

interface HelpInfoProps {
  step: number
  setHelpInfoStep: Dispatch<SetStateAction<number>>
  setShowHelpInfo: Dispatch<SetStateAction<boolean>>
}

const HelpInfo = ({ step, setHelpInfoStep, setShowHelpInfo }: HelpInfoProps) => {
  const onClickInfoHandler = () => {
    if (step === 5) {
      setShowHelpInfo(false)
      setHelpInfoStep(1)
      return
    }

    setHelpInfoStep((prev) => prev + 1)
  }

  return (
    <Container onClick={onClickInfoHandler}>
      <div>
        {step === 1 && <p className="first-text">키워드를 입력하면 관련이미지를 서칭합니다.</p>}
        {step === 2 && (
          <p className="second-text">서칭한 랜덤이미지가 생성됩니다. 생성된 이미지를 사용할 수 있습니다.</p>
        )}
        {step === 3 && <p className="third-text">내 갤러리에 있는 사진을 업로드해서 사용할 수 있습니다.</p>}
        {step === 4 && <p className="four-text">사진과 함께 업로드할 텍스트를 작성합니다.</p>}
        {step === 5 && <p className="five-text">그날의 소리를 링크로 업로드 한 후 재생해 볼 수 있습니다.</p>}
      </div>
    </Container>
  )
}

export default HelpInfo
