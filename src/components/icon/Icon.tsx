import iconsSprite from '../../assets/images/spriteSvg.svg'

type iconPropsType = {
    iconId: string,
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: iconPropsType) => {
    return (
        <svg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 50 50'}>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    );
};

