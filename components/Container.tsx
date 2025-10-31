export const Container = ({ size, flex = false, classes = [], children }) => <div className={`container mx-auto p-${size} ${flex ? 'flex' : ''} `.concat(classes.join(' '))}>{children}</div>
