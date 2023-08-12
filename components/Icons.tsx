import { SVGAttributes } from 'react'

export function CameraIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg width="43" height="47" viewBox="0 0 43 47" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10.1842 0H32.8158V13.8954H10.1842V0Z" fill="#D1D1D1" />
      <path d="M13.579 2.9776L29.4211 2.9776V13.8954L13.579 13.8954L13.579 2.9776Z" {...props} />
      <path
        d="M37.014 24.9989C36.1687 22.9019 34.5054 21.1344 32.3181 20.009C30.1308 18.8836 27.5603 18.4726 25.061 18.8487C22.5616 19.2248 20.2943 20.3638 18.6598 22.0644C17.0253 23.765 16.1288 25.9177 16.1288 28.1419C16.1288 30.3662 17.0253 32.5189 18.6598 34.2194C20.2943 35.92 22.5616 37.059 25.061 37.4352C27.5603 37.8113 30.1308 37.4003 32.3181 36.2749C34.5054 35.1494 36.1687 33.382 37.014 31.2849H37.6249V40.714C37.6249 41.1307 37.4362 41.5305 37.1002 41.8252C36.7642 42.1199 36.3085 42.2855 35.8333 42.2855H7.16666C6.69148 42.2855 6.23577 42.1199 5.89977 41.8252C5.56376 41.5305 5.375 41.1307 5.375 40.714V15.5699C5.375 15.1531 5.56376 14.7534 5.89977 14.4587C6.23577 14.164 6.69148 13.9984 7.16666 13.9984H35.8333C36.3085 13.9984 36.7642 14.164 37.1002 14.4587C37.4362 14.7534 37.6249 15.1531 37.6249 15.5699V24.9989H37.014ZM8.95833 18.7129V23.4274H12.5417V18.7129H8.95833ZM26.875 34.4279C24.9742 34.4279 23.1514 33.7657 21.8074 32.5868C20.4634 31.408 19.7083 29.8091 19.7083 28.1419C19.7083 26.4748 20.4634 24.8759 21.8074 23.6971C23.1514 22.5182 24.9742 21.8559 26.875 21.8559C28.7757 21.8559 30.5985 22.5182 31.9426 23.6971C33.2866 24.8759 34.0416 26.4748 34.0416 28.1419C34.0416 29.8091 33.2866 31.408 31.9426 32.5868C30.5985 33.7657 28.7757 34.4279 26.875 34.4279ZM26.875 31.2849C27.8253 31.2849 28.7368 30.9538 29.4088 30.3644C30.0808 29.7749 30.4583 28.9755 30.4583 28.1419C30.4583 27.3084 30.0808 26.5089 29.4088 25.9195C28.7368 25.3301 27.8253 24.9989 26.875 24.9989C25.9246 24.9989 25.0132 25.3301 24.3412 25.9195C23.6692 26.5089 23.2916 27.3084 23.2916 28.1419C23.2916 28.9755 23.6692 29.7749 24.3412 30.3644C25.0132 30.9538 25.9246 31.2849 26.875 31.2849Z"
        {...props}
        fillOpacity="0.7"
      />
    </svg>
  )
}

export function XMarkIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z"
        fill="black"
      />
    </svg>
  )
}

export function TrashIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.41055 0C6.47282 0 5.5735 0.321924 4.91043 0.894952C4.24735 1.46798 3.87484 2.24517 3.87484 3.05556V3.54778C2.8527 3.63333 1.83827 3.74333 0.834125 3.87889C0.707158 3.89384 0.584913 3.9305 0.474531 3.98675C0.36415 4.04299 0.267847 4.11768 0.191249 4.20645C0.114652 4.29523 0.059296 4.39631 0.0284172 4.50378C-0.00246157 4.61125 -0.00824422 4.72297 0.0114071 4.8324C0.0310585 4.94182 0.0757495 5.04677 0.142869 5.1411C0.209989 5.23543 0.29819 5.31725 0.40232 5.38179C0.506449 5.44632 0.624418 5.49228 0.749333 5.51696C0.874248 5.54165 1.0036 5.54457 1.12984 5.52556L1.32141 5.50111L2.4027 17.1878C2.47349 17.9535 2.87546 18.6682 3.52854 19.1893C4.18163 19.7105 5.03791 19.9999 5.92684 20H12.1073C12.9962 20.0002 13.8526 19.7111 14.506 19.1901C15.1593 18.6692 15.5616 17.9547 15.6327 17.1889L16.714 5.5L16.9056 5.52556C17.1559 5.55503 17.4096 5.49842 17.6121 5.36791C17.8147 5.23739 17.9498 5.0434 17.9886 4.82765C18.0273 4.6119 17.9666 4.39162 17.8193 4.2142C17.6721 4.03678 17.4502 3.91637 17.2013 3.87889C16.1916 3.74309 15.1776 3.63268 14.1606 3.54778V3.05556C14.1606 2.24517 13.788 1.46798 13.125 0.894952C12.4619 0.321924 11.5626 0 10.6248 0H7.41055ZM9.01769 3.33333C10.0977 3.33333 11.1687 3.36111 12.232 3.41667V3.05556C12.232 2.28889 11.512 1.66667 10.6248 1.66667H7.41055C6.52341 1.66667 5.80341 2.28889 5.80341 3.05556V3.41667C6.86669 3.36111 7.9377 3.33333 9.01769 3.33333ZM7.19198 7.46667C7.18175 7.24565 7.07035 7.0372 6.88227 6.88717C6.6942 6.73715 6.44487 6.65783 6.18912 6.66667C5.93338 6.67551 5.69217 6.77178 5.51857 6.93432C5.34496 7.09685 5.25318 7.31232 5.26341 7.53333L5.64912 15.8667C5.65419 15.9761 5.68415 16.0836 5.73729 16.183C5.79043 16.2825 5.86571 16.3719 5.95883 16.4462C6.05195 16.5204 6.1611 16.5782 6.28003 16.616C6.39896 16.6538 6.52535 16.671 6.65198 16.6667C6.77861 16.6623 6.90301 16.6364 7.01806 16.5905C7.13311 16.5446 7.23658 16.4795 7.32254 16.399C7.4085 16.3185 7.47527 16.2242 7.51905 16.1214C7.56283 16.0187 7.58276 15.9094 7.5777 15.8L7.19198 7.46667ZM12.772 7.53333C12.777 7.4239 12.7571 7.31467 12.7133 7.21189C12.6696 7.10911 12.6028 7.01479 12.5168 6.93432C12.4309 6.85384 12.3274 6.78878 12.2123 6.74286C12.0973 6.69693 11.9729 6.67104 11.8463 6.66667C11.5905 6.65783 11.3412 6.73715 11.1531 6.88717C10.965 7.0372 10.8536 7.24565 10.8434 7.46667L10.4577 15.8C10.4526 15.9094 10.4726 16.0187 10.5163 16.1214C10.5601 16.2242 10.6269 16.3185 10.7129 16.399C10.7988 16.4795 10.9023 16.5446 11.0173 16.5905C11.1324 16.6364 11.2568 16.6623 11.3834 16.6667C11.51 16.671 11.6364 16.6538 11.7554 16.616C11.8743 16.5782 11.9834 16.5204 12.0766 16.4462C12.1697 16.3719 12.245 16.2825 12.2981 16.183C12.3512 16.0836 12.3812 15.9761 12.3863 15.8667L12.772 7.53333Z"
        fill="black"
        fillOpacity="0.7"
      />
    </svg>
  )
}

export function PlayIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path d="M11.0715 7.85715V22.1429L23.2144 15L11.0715 7.85715Z" fill="black" fillOpacity="0.5" />
    </svg>
  )
}

export function PauseIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path
        d="M10 22.1429H14.0476V7.85715H10V22.1429ZM18.0952 7.85715V22.1429H22.1429V7.85715H18.0952Z"
        fill="black"
        fillOpacity="0.5"
      />
    </svg>
  )
}

export function PlayIconInMemoryList(props: SVGAttributes<SVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 6H0V27C0 28.65 1.35 30 3 30H24V27H3V6ZM27 0H9C7.35 0 6 1.35 6 3V21C6 22.65 7.35 24 9 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM15 18.75V5.25L24 12L15 18.75Z"
        fill="white"
        fillOpacity="0.7"
      />
    </svg>
  )
}

export function PauseIconInMemoryList(props: SVGAttributes<SVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 6H0V27C0 28.65 1.35 30 3 30H24V27H3V6ZM27 0H9C7.35 0 6 1.35 6 3V21C6 22.65 7.35 24 9 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM14.25 17.25V7.5H17.25L18 12L19.5 17.25V7.5H22.5V17.25H19.5L18 12L17.25 7.5V17.25H14.25Z"
        fill="white"
        fillOpacity="0.4"
      />
      <path
        d="M3 6H0V27C0 28.65 1.35 30 3 30H24V27H3V6ZM27 0H9C7.35 0 6 1.35 6 3V21C6 22.65 7.35 24 9 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM14.25 17.25V7.5H17.25L18 12L19.5 17.25V7.5H22.5V17.25H19.5L18 12L17.25 7.5V17.25H14.25Z"
        fill="white"
        fillOpacity="0.4"
      />
    </svg>
  )
}

export function SecurityIcon({ color = 'white', ...props }: SVGAttributes<SVGElement>) {
  return (
    <svg color={color} width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.661 0.122295C7.75629 0.0432577 7.8762 0 8 0C8.1238 0 8.24371 0.0432577 8.339 0.122295C10.3366 1.78395 12.8215 2.74905 15.417 2.87129C15.534 2.87489 15.6459 2.9194 15.7335 2.99705C15.821 3.07471 15.8785 3.1806 15.896 3.29629C15.965 3.81629 16 4.34629 16 4.88629C16 10.0483 12.74 14.4493 8.166 16.1423C8.05886 16.1818 7.94114 16.1818 7.834 16.1423C3.26 14.4493 0 10.0483 0 4.88529C0 4.34729 0.0350001 3.81629 0.104 3.29629C0.121528 3.18044 0.17919 3.07442 0.266919 2.99674C0.354649 2.91906 0.466873 2.87466 0.584 2.87129C3.17927 2.74855 5.66379 1.78411 7.661 0.122295ZM11.857 6.07629C11.974 5.91531 12.0222 5.71445 11.991 5.51791C11.9599 5.32138 11.852 5.14526 11.691 5.02829C11.53 4.91133 11.3292 4.86312 11.1326 4.89425C10.9361 4.92538 10.76 5.03331 10.643 5.19429L7.16 9.98429L5.28 8.10429C5.21078 8.0327 5.128 7.9756 5.03647 7.93634C4.94495 7.89707 4.84653 7.87643 4.74694 7.87561C4.64736 7.87479 4.54861 7.89382 4.45646 7.93157C4.3643 7.96933 4.28059 8.02505 4.2102 8.09551C4.13982 8.16596 4.08417 8.24972 4.0465 8.34191C4.00883 8.4341 3.9899 8.53287 3.99081 8.63245C3.99173 8.73204 4.01246 8.83044 4.05181 8.92193C4.09116 9.01341 4.14834 9.09614 4.22 9.16529L6.72 11.6653C6.79663 11.742 6.88896 11.8011 6.99065 11.8387C7.09233 11.8762 7.20094 11.8913 7.30901 11.8828C7.41708 11.8744 7.52203 11.8426 7.61663 11.7897C7.71123 11.7368 7.79324 11.664 7.857 11.5763L11.857 6.07629Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  )
}
