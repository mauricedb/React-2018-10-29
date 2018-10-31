import React from 'react'
import ErrorCard from './ErrorCard'

export default function withErrorBoundary(WrappedComponent) {
    return class extends React.Component {

        state = {
            error: null
        }

        static getDerivedStateFromError(error) {
            return { error }
        }

        componentDidCatch(error, info) {
            console.warn('Error', error)
            console.warn('Info', info)
        }

        render() {
            const { error } = this.state;

            if (error) {
                return <ErrorCard error={error} />
            }

            return <WrappedComponent {...this.props} />;
        }
    };
}

