export const ColorBar = ({ background = undefined, classes = [] }: ColorBarProps) => {
    const style = {
        height: '4px',
        border: 'none',
        borderRadius: '2px',
    }
    if (background) {
        style['background'] = background
    }
    if (classes.every(className => !/^m[setbyxlr]{1}-[0-9]{1,2}$/.test(className))) {
        console.log('there is no className matching a margin one of Tailwind.')
        console.log('classes ===', classes)
        style['margin'] = '8px 0'
    }
    return <hr className={classes.join(' ')} style={style} />
}

type ColorBarProps = {
    background?: string | undefined,
    classes: string[],
}
