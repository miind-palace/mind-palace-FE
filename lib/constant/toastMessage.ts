export const toastMessage = {
  none: '',
  common: '알 수 없는 에러가 발생했어요. 다시 시도해주세요.',
  successDeleteMemory: '삭제가 완료되었습니다. 새로운 추억을 만들어보세요.',
  successSaveMemory: '저장이 완료되었습니다. 새로운 추억을 만들어보세요.',
  successStoreMemory: '추억이 보관되었습니다. 보관된 추억들을 둘러보세요.',
  failGetMemory: '알 수 없는 이유로 현재 추억를 가져오지 못했어요.',
  failDeleteMemory: '알 수 없는 이유로 추억 삭제에 실패했습니다. 다시 시도해주세요.',
  failSaveMemory: '알 수 없는 이유로 추억 저장에 실패했습니다. 빠진 부분이 없는지 확인해주세요.',
  failStoreMemory: '알 수 없는 이유로 추억 보관에 실패했습니다. 빠진 부분이 없는지 확인해주세요.',
  WrongAccess: '잘못된 접근입니다. 다시 시도해주세요.',
}

export type ToastMessageEnum = keyof typeof toastMessage
