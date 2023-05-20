import '../assets/css/components/button.css'

export const Button = ({ children, margin, padding, href, color, textColor }) => {
    return (
        <a href={href}>
            <button style={
                {
                    margin: margin,
                    padding: padding,
                    backgroundColor: color,
                    color: textColor
                }
            } 
            className="btn">{ children }</button>
        </a>
    )
}