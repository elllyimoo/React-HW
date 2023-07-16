import React from 'react';
import "./ErrorBoundary.scss";
import DeathStar from './death-star.jpg'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
        // server with
    }

    static getDerivedStateFromError() {
        return {hasError: true}
    }

    render() {
        const {hasError} = this.state
        const {children} = this.props

        if (hasError) {
            return (
                <div className="error-boundary">
                    <img src={DeathStar} alt="logo"/>
                    <div>An error occurred</div>
                    <button>Go to back</button>
                </div>
            )
        }

        return (
            <div>
                {children}
            </div>
        );
    }
}

export default ErrorBoundary;