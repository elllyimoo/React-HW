import scss from 'react';
import '../../components/Icon/icons.scss';

export const cart = ({ color = "lightgray", filled = false, className = "icons" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" className={className} fill={filled ? color : 'none'}
            width='36' height='27'
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>

        </svg>
    )
}